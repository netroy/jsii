---
version: 1.0.0
---
# The *jsii* type model
## Overview
This document outlines the type model used by *jsii* in order to support running
applications in a mixed language environment (**Javascript** and some host
language). It details the semantics of the various types and any restrictions
that apply to the **TypeScript** expressions that are supported.

## `null` and `undefined`
### **Javascript** definition
**Javascript** has two distinct ways of denoting the absence of data:
* `undefined` usually denotes omitted optional values, for example when a caller
  decided not to pass some optional argument.
* `null` usually denotes intentional assignment of *no value*, for example when
  specifically opting out of a default value.

Both `null` and `undefined` are falsey. They are not strictly equal to each
other (`null !== undefined`) but are loosely equal to each other
(`null == undefined`).

### *jsii* semantics
Since many other programming languages do not have a specific `undefined`
literal like **Javascript** does, and instead only have a `null` value, *jsii*
considers `null` and `undefined` as synonyms.

In the rest of this document, `undefined` will be used to refer to both `null`
and `undefined` (if applicable).

## Primitive Types
Type            | TypeScript        | JSON Serialized Form
----------------|-------------------|-------------------------------------------
Opaque Data     | `any` & `unknown` | JSON Object / By-Reference
Boolean         | `boolean`         | `true` / `false`
Timestamp       | `Date`            | ISO-8601 timestamp
Key-Value Pairs | `object`          | JSON Object
Number          | `number`          | JSON Number
String          | `string`          | JSON String

## Collections
### Lists
**Javascript** arrays are shared by value across the process boundary. This
means mutations operated on the array in **Javascript** are not reflected on
copies of the list in the *host* process, and vice-versa. It is advised to
handle lists as read-only data structures.

### Maps
**Javascript** maps are shared by value across the process boundary. This means
mutations operated on the map in **Javascript** are not reflected on copies of
the map in the *host* process, and vice-versa. It is advised to handle maps as
read-only data structures.

## Complex Types
### Structs
Structs are pure-data, immutable data structures. They are declared in
**TypeScript** as `interfaces` named without the `I` prefix, and that only
feature `readonly` properties (no methods).

Since they are `interfaces`, *jsii* structs can extend one or more other
*jsii* structs, but may not extend classes or *jsii* interfaces.

Their immutable nature means they can be shared across processes by-value.

#### Example
```ts
export interface BaseStruct {
  readonly baseProp: Date;
}

export interface ExampleStruct extends BaseStruct {
  readonly property: string;
  readonly optional?: number;
}
```

### Classes & Interfaces
Interfaces are declared in **TypeScript** using the `interface` keyword, and are
required to have a leading `I` in their name (differentiating them from
structs, which do not feature the prefix). They can declare any number of
properties (`readonly` or not) and methods. Interfaces can extend multiple
parent interfaces.

Classes are declared in **TypeScript** using the `class` keyword. They can
extend one base class, and implement multiple interfaces. Static members are
supported.

When extending or implementing a class or interface, the signature of overridden
members cannot be altered. Parameter and return types must be identical,
including whether they are required or not.

#### Example
```ts
export interface IBehavioral {
  property: number;

  method(...params: string[]): void;
}

export abstract class BaseType implements IBehavioral {
  protected constructor(public property: number){ }

  public abstract method(...params: string[]): void;
}

export class ConcreteType extends BaseType {
  public constructor(property: number) {
    super(number);
  }

  public method(...params: string[]): void {
    // ...
  }
}
```
