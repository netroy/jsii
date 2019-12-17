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
* *jsii* guides (instead of forcing) library authors towards better APIs:
  * Reserved names are limited to a minimum.
  * Warn about patterns or names that are known to be awkward in other
    programming languages, instead of blocking them.
* *jsii* uses idiomatic tools whenever possible:
  * Generated libraries can be easily published to the "standard" package
    repository for the language.
  * Standard tools can be used to work with the generated libraries, and do not
    require any special configuration.
