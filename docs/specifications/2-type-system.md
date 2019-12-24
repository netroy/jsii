---
version: 1.0.0
---
# The *jsii* type system

## Preamble
The base language for authoring *jsii* libraries for re-use from other languages
is **TypeScript**, which compiles to **JavaScript**. Consequently, the base type
system that *jsii* sources from is that of **TypeScript**.

When used from another language than **TypeScript** or **JavaScript**, *jsii*
libraries are running the **JavaScript** code in a child *node* process, and
data is exchanged using **JSON**-based protocol.

This document describes how **TypeScript** types map into the *jsii* type
system.

The API represented by the *jsii* assembly only covers declarations that are
exported from the main file in the **TypeScript** project (as specified in the
`package.json` file by the `types` attribute). Restrictions described in this
document only apply to such declarations, the rest of the module can leverage
any **TypeScript** feature.

## Basic Types

### Introduction
In order to build useful programs, the simplest units of data need to be
modeled: booleans, numbers, strings, etc... Those basic building blocks are the
foundations on which APIs stand. *jsii* supports much of the same types that
**TypeScript** and **JavaScript** support, although with notable differences.

### Boolean
The *jsii* type system mirrors **TypeScript**'s `boolean`, which is the simplest
primitive data types, with only two supported values: `true` and `false`.

### Number
The *jsii* type system mirrors **TypeScript**'s `number`. All numbers are
floating point values.

### String
The *jsii* type system mirrors **TypeScript**'s `string`. Strings are used to
represent textual data.

### List
**TypeScript** arrays (`Array<T>`, `T[]`, `ReadonlyArray<T>` and `readonly T[]`)
are represented as *lists* in the *jsii* type model. Lists are shared between
the *node* process and the host process by-value, meaning a copy of the array is
produced each time it is passed through the process boundary.

> Items in the list may be passed by-reference (according to their type's
> specification), in which case mutating operations performed on those may be
> visible across the process boundary.

### Enum
As in many languages, `enum` can be used to represent a group of related
constants. Whle **TypeScript** `enum` entries are associated with a value that
is either a `string` or a `number`, the *jsii* type system does not allow for
those to be down-casted to their value type (e.g: a `string`-valued `enum` entry
cannot be directly passed into a `string` parameter).

> Unlike in certain languages such as **Java**, `enum` types cannot declare new
> properties or methods.

### Any and Unknown
**TypeScript** defines two opaque types: `any` and `unknown` that can be used to
represent a value of arbitary type. The difference between them is that while
`any` is assignable to any other type, `unknown` requires a type assertion or
explicit cast to be performed before it can be assigned.

> It is important to note that, contrary to the other types in the
> **TypeScript** type system, `any` and `unknown` types are inherently
> `null`-able.

### Void
As in most languages, the `void` type is used to denote a method does not return
anything.

### Null and Undefined
**JavaScript** differentiates `undefined` and `null` values. While `undefined`
denotes that *no value* has been set, `null` denotes an intentional signal of
there being *no data*. Most other programming languages (particularly statically
typed languages) however lack this distinction, and the *jsii* type model
consequently considers `null` and `undefined` are semantically equivalent.

> Unlike certain other programming languages, such as **Java**, **TypeScript**
> does not allow `null` (or `undefined`) values unless the type signature
> expressedly supports that (with the exception of `any` and `unknown`, which
> are implicitly `null`-able, as was discussed earlier).

### Object
**TypeScript**'s `object` type denotes anything that is not a *primitive* type,
meaning anything other than a `number`, `srting`, `boolean`, `biging`, `symbol`,
`null` or `undefined`.

In the *jsii* type model, `object` indicates a block of structured data that can
be shared by-value across the process boundary. As a consequence, they may not
include any method.

### Promises
*jsii* supports asynchronous methods, and the **TypeScript** `Promise<T>` type
has to be used as the result of `async` methods. Promises can only be used as
the result type of methods, not as the type of a property or parameter.

### Unsupported **TypeScript** basic types
Due to how such types cannot be represented in many other programming languages,
the *jsii* type model does not support the following **TypeScript** entities:
- Tuples, a group of arbitrarily-typed values, often used as the result type for
  multi-valued functions.
- The `never` type, which is used as the return type of functions that will not
  yield control back to their invoker (infinite loops, `process.exit()`, ...).
- `bigint` and `symbol` don't have equivalents in many other programming
  languages and are generally of limited value in API design.


## Complex Types
The goal of *jsii* is to enable cross-language re-use of class libraries.
**TypeScript** enables representing classic object-oriented concepts such as
*classes*, *interfaces* and such. The *jsii* type system supports some
additional nuances on top of those, to better represent **TypeScript** and
**JavaScript** idioms in a way that enables generating convenient APIs in other
languages.

### Classes
Exported **TypeScript** classes are represented in the *jsii* type system, with
the following restrictions from plain **TypeScript**:
- Methods overloads are not supported.
- Overridden methods or properties must retain the exact same type signature as
  the one declared in a parent type. The **jsii** type system strictly enforces
  the [Liskov substitution principle].

[Liskov substitution principle]: https://en.wikipedia.org/wiki/Liskov_substitution_principle

### Interfaces & Structs
Exported **TypeScript** interfaces are interpreted as one of two entities in the
*jsii* type system:
- If the `interface` name is prefixed with an `I` (e.g: `ISomething`), it is
  interpreted as a *behavioral interface*.
- Otherwise (e.g: `Something`), it is interpreted as a *struct*.

#### Behavioral Interfaces
*Behavioral interfaces* are the usual object-oriented interface: they can extend
other *behavioral interfaces*, and can be extended by *classes*. They may
however not extend *structs*.

#### Structs
*Structs* are used to model the **JavaScript** idiom of receiving options as an
object literal passed as the last parameter of a function. They are a formal
description of a bag of properties, and are not meant to be implemented by other
types. Since those types are used as inputs, they can be handled as pure-data,
immutable objects, and the following restrictions apply:
- A *struct* cannot declare any *method*: they must be kept behavior-free.
- All properties declared by a *struct* must be `readonly`. The values of the
  properties may however be mutable.

*Structs* may extend one or more other *structs*, but cannot extend or be
extended by *behavioral interfaces*, and may not be implemented by *classes*.

### Type Unions
In certain cases, several different kinds of values are acceptable for a given
parameter or return type. **TypeScript** models those cases using *type unions*,
which are represented as `TypeA | TypeB`. The *jsii* type model supports those,
however most other statically typed languages do not have such a concept, making
those parameters or return values difficult to use from those languages, as the
value has to be declared using the most generic reference type available (for
example, in **Java**, those are returned as `java.lang.Object`).

When used as inputs (parameters, or properties of a *struct*), it may be
possible to generate method overloads that will allow for a convenient API in
languages that support overloards.

In general however, *type unions* are discouraged and should only be used when
there is no alternate way to model the API.


## References

The [**TypeScript** Handbook] describes the language's type system and syntax
elements that serve as the basis for the *jsii* type system. Additionally, the
**JavaScript** type system is described in the [**JavaScript** Fundamentals]
document.

[**JavaScript** Fundamentals]: https://javascript.info/types
[**TypeScript** Handbook]: https://www.typescriptlang.org/docs/handbook/basic-types.html
