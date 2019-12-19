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
### *Opaque*
**TypeScript** elements annotated with the type `any` or `unknown` accept values
of any valid type, including `undefined`.

### *Boolean*
Boolean         `boolean`

### *Timestamp*
Date            `Date`

### *Key-Value Pairs*
Json            `object`

### *Number*
Number          `number`

### *String*
String          `string`

## Complex Types
