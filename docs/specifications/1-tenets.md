---
version: 1.0.0
---
# Design Tenets (unless you know better ones)

* *jsii* APIs strive to feel idiomatic in all supported languages.
* *jsii* applications behave identically regardless of the language they are
  written in. It favors correctness over performance.
* *jsii* **does not** attempt to support all TypeScript idioms (many features of
  TypeScript cannot be expressed in some target languages).
  * When prohibiting an idiom, *jsii* strives to provide an error message that
    gives the user insight into why the pattern cannot be supported.
* *jsii* does not force API design opinions on the developer:
  * Reserved names are limited to a minimum.
  * TypeScript API design patterns that will not transpose well in other
    languages may cause a warning to be issued, but the developer is ultimately
    entitled to decide whether they want to take or leave the advice.
* *jsii* uses idiomatic tools whenever possible:
  * Generated libraries can be easily published to the "standard" package
    repository for the language.
  * Standard tools can be used to work with the generated libraries, and do not
    require any special configuration.
