---
version: 1.0.0
---
# The *jsii* Kernel API
This document describes the API for the `@jsii/kernel` module, which is to be
used by all *host* libraries. It provides the fundational features necesarry for
*host* processes to interact with the original module's code.

## Initialization - the `hello` message
The *host* library is responsible for spawning the `node` process that will run
the original module's code. This `node` process typically runs the
`@jsii/runtime` application, which wraps a `@jsii/kernel` instance with code
that handles inter-process communication over a designated channel (this can be
`STDIN` and `STDOUT` of the `node` process or otherwise).

Upon initialization, the `@jsii/runtime` process introduces itself to the *host*
application by emitting a single JSON message:

```js
{
  // The package name@version of the @jsii/runtime in use
  "hello": "@jsii/runtime@0.21.1",
}
```

Any additional key present on the `hello` message will be silently ignored by a
*host* library that does not know how to process it, ensuring forward
compatibility of this message, if and when new attributes are added.

In the future, this message may be augmented with additional keys to enable
feature negotiation between the *host* application and the `@jsii/runtime`.

## General Kernel API
Once the `hello` handshake is complete, a sequence of request and responses are
exchanged with the `@jsii/runtime`. Requests take the form of JSON-encoded
messages that all follow the following pattern:

```ts
interface Request {
  /**
   * This field discriminates the various request types.
   */
  api: 'load'               // Loading jsii assemblies into the Kernel
    | 'create'              // Creating objects
    | 'del'                 // Destroying objects
    | 'invoke' | 'sinvoke'  // Invoking methods (and static methods)
    | 'get' | 'sget'        // Invoking getters (and static getters)
    | 'set' | 'sset'        // Invoking setters (and static setters)
    | 'naming'              // Obtaining naming information for loaded assemblies
    | 'stats';              // Obtaining statistics about the Kernel usage

  // ... request-type specific fields ...
}
```

### Loading jsii assemblies into the Kernel
Before any *jsii* type can be used, the assembly that provides it must be loaded
into the kernel. Similarly, all dependencies of a given *jsii* module must have
been loaded into the kernel before the module itself can be loaded (the
`@jsii/runtime` and `@jsii/kernel` do not perofrm any kind of dependency
resolution).

Loading new assemblies into the `@jsii/kernel` is done using the `load` API:

```ts
interface CreateRequest {
  name: string;             // The name of the assembly being loaded
  version: string;          // The version of the assembly being loaded
  tarball: string;          // The local path to the npm package for the assembly

  // The discriminator
  api: 'load';
}
```

Once a module is loaded, all the types it declares immediately become available.

### Creating objects
Most JSII workflows start with creating instances of objects. This can mean
creating a pure **JavaScript** object, instantiating a sub-class of some
**JavaScript** class, or even creating a pure-*host* instance that implements
a collection of *behavioral interfaces*.

Creating objects is achieved using the `create` API, which accepts the following
parameters:

```ts
interface CreateRequest {
  fqn: string;              // The jsii fully qualified name of the class
  args?: any[];             // Any arguments to provide to the constructor
  interfaces?: string[];    // Additional interfaces implemented in the host app
  overrides?: Override[];   // Any methods or property overridden in the host app

  // The discriminator
  api: 'create';
}
```

#### Additional Interfaces
Sometimes, the *host* app will extend a *jsii* class and implement new *jsii*
interfaces that were not present on the original type. Such interfaces must be
declared by providing their *jsii* fully qualified name as an entry in the
`interfaces` list.

Providing interfaces in this list that are implicitly present from another
delcaration (either because they are already implemented by the class denoted by
the `fqn` field, or because another entry in the `interfaces` list extends it)
is valid, but not necessary. The `@jsii/kernel` is responsible for correctly
handling redundant declarations.

**:warning:** while declared `interfaces` may contain redundant declarations of
members already declared by other `interfaces` or by the type denoted by `fqn`,
undefined behavior results if any such declaration is not identical to the
others (e.g: property `foo` declared with type `boolean` on one of the
`interfaces`, and with type `string` on another).

#### Overrides
For any method that is implemented or overridden from the *host* app, the
`create` call must specify an `override` entry. This will inform the Kernel that
calls to these methods must be relayed to the *host* app for execution, instead
of executing the original library's version.

An optional `cookie` string can be provided. This string will be recorded on the
**Javascript** proxying implementation, and will be provided to the **host** app
with any *callback* request. This information can be used, for example, to
improve the performance of implementation lookups in the *host* app, where the
necessary reflection calls would otherwise be prohibitively expensive.

Override declarations adhere to the following schema:

```ts
interface MethodOverride {
  method: string;           // The name of the overridden method
  cookie?: string;          // An arbitrary override cookie string
}

interface PropertyOverride {
  property: string;         // The name of the overridden property
  cookie?: string;          // An arbitrary override cookie string
}

type Override = MethodOverride | PropertyOverride;
```

### Destroying Objects
Once the *host* app no longer needs a particular object, it can be discarded.
This can happen for example when the *host* reference to an object is garbage
collected or freed. In order to allow the **JavaScript** process to also
recclaim the associated memory footprint, the `del` API must be used:

```ts
interface DelRequest {
  objref: ObjectReference;  // The object reference that can be released

  // The discriminator
  api: 'del';
}
```

**:warning:** Failure to use the `del` API will result in memory leakage as the
**JavaScript** process accumulates garbage in it's Kernel instance. This can
eventually result in a *Javascript heap out of memory* error, and the abnormal
termination of the `node` process, and consequently of the *host* app.

:construction: The existing *jsii* runtimes do not implement this behavior!

### Invoking methods (and static methods)


### Invoking getters (and static getters)

### Invoking setters (and static setters)

### Obtaining naming information for loaded assemblies

### Obtaining statistics about the Kernel usage
