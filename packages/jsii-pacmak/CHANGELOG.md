# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.21.1](https://github.com/aws/jsii/compare/v0.21.0...v0.21.1) (2020-01-03)

**Note:** Version bump only for package jsii-pacmak





# [0.21.0](https://github.com/aws/jsii/compare/v0.20.11...v0.21.0) (2020-01-02)


### Bug Fixes

* **dotnet:** documentation strings sometimes invalid ([#1127](https://github.com/aws/jsii/issues/1127)) ([94da056](https://github.com/aws/jsii/commit/94da0568c09a0d18cff6be7b933cd2d5ad506c65))
* **java,dotnet:** abstract properties have concrete implementations ([#1128](https://github.com/aws/jsii/issues/1128)) ([c9351a3](https://github.com/aws/jsii/commit/c9351a3c477e778ec8a0ce1e34d262f39563e49d)), closes [#240](https://github.com/aws/jsii/issues/240) [#1011](https://github.com/aws/jsii/issues/1011)
* **pacmak:** generated dependencies are not consistent with source npm module ([#1141](https://github.com/aws/jsii/issues/1141)) ([03221fe](https://github.com/aws/jsii/commit/03221fe6c2b26414ac45fb693524701ec05509dc)), closes [#676](https://github.com/aws/jsii/issues/676) [#1137](https://github.com/aws/jsii/issues/1137)


### Features

* **rosetta:** translate examples to Java and C# ([#985](https://github.com/aws/jsii/issues/985)) ([d591b85](https://github.com/aws/jsii/commit/d591b859e1f4a3f49753b91d752e0e654400795e))





## [0.20.11](https://github.com/aws/jsii/compare/v0.20.10...v0.20.11) (2019-12-13)

**Note:** Version bump only for package jsii-pacmak





## [0.20.10](https://github.com/aws/jsii/compare/v0.20.9...v0.20.10) (2019-12-13)

**Note:** Version bump only for package jsii-pacmak





## [0.20.9](https://github.com/aws/jsii/compare/v0.20.8...v0.20.9) (2019-12-11)


### Bug Fixes

* **java:** missing remarks in builder documentation ([#1111](https://github.com/aws/jsii/issues/1111)) ([33e820c](https://github.com/aws/jsii/commit/33e820c9252dd791a11eefdb2e6ad64f63facefd)), closes [#1094](https://github.com/aws/jsii/issues/1094)
* **java:** remove Jackson confusion with certain patterns ([#1070](https://github.com/aws/jsii/issues/1070)) ([9eacbe3](https://github.com/aws/jsii/commit/9eacbe3476c471bf0528559bb602bcb1ede0904b)), closes [#987](https://github.com/aws/jsii/issues/987) [aws/aws-cdk#4080](https://github.com/aws/aws-cdk/issues/4080)
* **python:** correctly emit sligified positional args ([#1081](https://github.com/aws/jsii/issues/1081)) ([6f9167b](https://github.com/aws/jsii/commit/6f9167bc21fd5274d4e7c5e5442973d747f7dd94)), closes [aws/aws-cdk#4302](https://github.com/aws/aws-cdk/issues/4302)
* **python:** correctly handle structs out of callbacks ([#1009](https://github.com/aws/jsii/issues/1009)) ([812d8c2](https://github.com/aws/jsii/commit/812d8c2fec948a507bcf488dd7387c6ce1b91b1a)), closes [#1003](https://github.com/aws/jsii/issues/1003) [#997](https://github.com/aws/jsii/issues/997) [#997](https://github.com/aws/jsii/issues/997) [#1003](https://github.com/aws/jsii/issues/1003)
* **python:** members named property results in invalid code ([#1114](https://github.com/aws/jsii/issues/1114)) ([92be5d7](https://github.com/aws/jsii/commit/92be5d7f12cfccb5f7f3ba714b73a4db96f7d329)), closes [#1113](https://github.com/aws/jsii/issues/1113)


### Features

* upgrade to typescript 3.7 ([#988](https://github.com/aws/jsii/issues/988)) ([6e0a7e6](https://github.com/aws/jsii/commit/6e0a7e698ee1f2b20526667bb1222e92beb9eec8))





## [0.20.8](https://github.com/aws/jsii/compare/v0.20.7...v0.20.8) (2019-11-24)

**Note:** Version bump only for package jsii-pacmak





## [0.20.7](https://github.com/aws/jsii/compare/v0.20.5...v0.20.7) (2019-11-18)


### Bug Fixes

* **java:** handle null-able collections correctly ([#986](https://github.com/aws/jsii/issues/986)) ([e88e5e2](https://github.com/aws/jsii/commit/e88e5e2dc3db75dc9cbae494185ae65100783544)), closes [aws/aws-cdk#4316](https://github.com/aws/aws-cdk/issues/4316)
* **java:** remove Jackson confusion with certain patterns ([#987](https://github.com/aws/jsii/issues/987)) ([a8096b7](https://github.com/aws/jsii/commit/a8096b7a68472067ec8d17c31b378f5841015b03)), closes [aws/aws-cdk#4080](https://github.com/aws/aws-cdk/issues/4080)
* **kernel:** cannot pass decorated structs to kernel as "any" ([#997](https://github.com/aws/jsii/issues/997)) ([2bd3183](https://github.com/aws/jsii/commit/2bd318358781c629085cbe594dfd0cc2b554f308)), closes [aws/aws-cdk#5066](https://github.com/aws/aws-cdk/issues/5066)


### Features

* **rosetta:** extract and compile samples into "tablets" ([#925](https://github.com/aws/jsii/issues/925)) ([eec44e1](https://github.com/aws/jsii/commit/eec44e106ee1e3d2e3d03f70e4d87a4d7ee0bbba))





## [0.20.6](https://github.com/aws/jsii/compare/v0.20.5...v0.20.6) (2019-11-14)


### Bug Fixes

* **python:** dynamic proxies handling of setters ([eec9640](https://github.com/aws/jsii/commit/eec96403fea1e940b744e40d54a35535b766851d)), closes [aws/aws-cdk#5032](https://github.com/aws/aws-cdk/issues/5032)





## [0.20.5](https://github.com/aws/jsii/compare/v0.20.4...v0.20.5) (2019-11-13)


### Bug Fixes

* **dotnet:** allow down-casting to parent interface type ([#983](https://github.com/aws/jsii/issues/983)) ([8a390e5](https://github.com/aws/jsii/commit/8a390e579a7cae2bbe386eaefb1c7a9084210a7f)), closes [#982](https://github.com/aws/jsii/issues/982)
* **python:** correctly handle interface declarations on returned objects ([#980](https://github.com/aws/jsii/issues/980)) ([c2de100](https://github.com/aws/jsii/commit/c2de100ecdf30dacfbad94cb4ff071feb22b2fc2))


### Features

* **python:** add license & classifiers to generated packages ([#712](https://github.com/aws/jsii/issues/712)) ([84fd8bb](https://github.com/aws/jsii/commit/84fd8bbcf2ca22235780d3fa3959bd327a0d8107)), closes [#707](https://github.com/aws/jsii/issues/707)





## [0.20.4](https://github.com/aws/jsii/compare/v0.20.3...v0.20.4) (2019-11-12)


### Bug Fixes

* **python:** correctly handle nested structs-as-dict ([#973](https://github.com/aws/jsii/issues/973)) ([9fd2499](https://github.com/aws/jsii/commit/9fd2499388745cf63d194a47bf247e5e24f4a7db))





## [0.20.3](https://github.com/aws/jsii/compare/v0.20.2...v0.20.3) (2019-11-11)

**Note:** Version bump only for package jsii-pacmak





## [0.20.2](https://github.com/aws/jsii/compare/v0.20.1...v0.20.2) (2019-11-08)


### Bug Fixes

* **dotnet:** fix callback issues ([#953](https://github.com/aws/jsii/issues/953)) ([849c004](https://github.com/aws/jsii/commit/849c004ddfefa7b255197daf4dddc8e6f55c6dcb))
* **pacmak:** .NET build downloading packages from NuGet ([#949](https://github.com/aws/jsii/issues/949)) ([433d1f8](https://github.com/aws/jsii/commit/433d1f870e23d9881c847d79834ebd27cd640061))
* **pacmak:** occasional EISDIR failure ([#948](https://github.com/aws/jsii/issues/948)) ([a388f24](https://github.com/aws/jsii/commit/a388f24b418b9b0053a09329c7a72be7207215f5))





## [0.20.1](https://github.com/aws/jsii/compare/v0.20.0...v0.20.1) (2019-11-06)


### Bug Fixes

* **dotnet/analyzer:** remove dependency on Runtime ([#927](https://github.com/aws/jsii/issues/927)) ([815b449](https://github.com/aws/jsii/commit/815b44982bfe1f9b2ee3a9cf60e4f5dfb4dd22f6))
* **kernel:** revert behavior change around `any` serialization ([#932](https://github.com/aws/jsii/issues/932)) ([2f47543](https://github.com/aws/jsii/commit/2f475437847b10377e5b91cc42bd752d1f2e06c4)), closes [#825](https://github.com/aws/jsii/issues/825)
* **pacmak:** put package README into the right Python module ([#928](https://github.com/aws/jsii/issues/928)) ([17dd60f](https://github.com/aws/jsii/commit/17dd60f18142ec64849f3c03be46325fc3c6deff))





## [0.20.0](https://github.com/aws/jsii/compare/v0.19.0...v0.20.0) (2019-10-30)


### Bug Fixes

* **java:** correctly search for protected override implementations ([#905](https://github.com/aws/jsii/issues/905)) ([e3f0f6c](https://github.com/aws/jsii/commit/e3f0f6cb4e7fa722412ca158a1e2803ed06c4c40)), closes [#903](https://github.com/aws/jsii/issues/903)
* **java,dotnet:** emit default implementations for optional properties ([#906](https://github.com/aws/jsii/issues/906)) ([37ddfd5](https://github.com/aws/jsii/commit/37ddfd5fde1399274ca1541542c7268b75e026c2)), closes [#543](https://github.com/aws/jsii/issues/543)
* **kernel:** correct deserialization of structs in union contexts ([#919](https://github.com/aws/jsii/issues/919)) ([c0f338e](https://github.com/aws/jsii/commit/c0f338e289f6523f207bbdd3d9249a998bc370b9)), closes [#822](https://github.com/aws/jsii/issues/822) [aws/aws-cdk#3917](https://github.com/aws/aws-cdk/issues/3917) [aws/aws-cdk#2013](https://github.com/aws/aws-cdk/issues/2013)
* **pacmak:** fix a couple of issues related to java generation ([#921](https://github.com/aws/jsii/issues/921)) ([5ad58c0](https://github.com/aws/jsii/commit/5ad58c0d3937e4a5fa5f5dfbb84f4be089727cba))
* **pacmak/python:** improve detection of twine ([#845](https://github.com/aws/jsii/issues/845)) ([2c4ef29](https://github.com/aws/jsii/commit/2c4ef2969997b21243bdf3c508d5df78f7308141))


### Features

* update Dockerfile to .NET SDK 3.1, improve NuGet metadata ([#880](https://github.com/aws/jsii/issues/880)) ([5e076cf](https://github.com/aws/jsii/commit/5e076cfe0063e87e58c85862488d88a5959036ba))
* **java:** offer Builders for certain Java classes ([#895](https://github.com/aws/jsii/issues/895)) ([f9c1335](https://github.com/aws/jsii/commit/f9c1335cc0f27c8186d5b7d7a148ef7fffc5b1aa)), closes [#488](https://github.com/aws/jsii/issues/488)
* **kernel:** annotate implemented interfaces on "ObjRef"s ([#825](https://github.com/aws/jsii/issues/825)) ([a4e2095](https://github.com/aws/jsii/commit/a4e209539190cbe156462364f2617e9a05c5589c))
* **pacmak:** build all java targets at once ([#849](https://github.com/aws/jsii/issues/849)) ([5d7824d](https://github.com/aws/jsii/commit/5d7824d5f0aa35625fc56b8301bc27a1e5691d46))
* **pacmak:** put translated README into module docstring ([#900](https://github.com/aws/jsii/issues/900)) ([8bacfb1](https://github.com/aws/jsii/commit/8bacfb1463e252aeb907665efe2038fb47e5f01a))





# [0.19.0](https://github.com/aws/jsii/compare/v0.18.0...v0.19.0) (2019-10-14)


### Features

* **sampiler:** translate code samples to Python ([#827](https://github.com/aws/jsii/issues/827)) ([c9a7002](https://github.com/aws/jsii/commit/c9a7002431c0db6224d595eb5555b916036d4575))





# [0.18.0](https://github.com/aws/jsii/compare/v0.17.1...v0.18.0) (2019-10-01)


### Bug Fixes

* **dotnet:** use snupkg format for dotnet symbol packages ([#830](https://github.com/aws/jsii/issues/830)) ([0d18b4d](https://github.com/aws/jsii/commit/0d18b4d)), closes [NuGet/Home#6082](https://github.com/NuGet/Home/issues/6082)


### Features

* configure `engines` with `node >= 10.3.0` ([#795](https://github.com/aws/jsii/issues/795)) ([6164b6b](https://github.com/aws/jsii/commit/6164b6b)), closes [#794](https://github.com/aws/jsii/issues/794)
* configure AWS logo for NuGet packages ([#797](https://github.com/aws/jsii/issues/797)) ([04305ce](https://github.com/aws/jsii/commit/04305ce))





## [0.17.1](https://github.com/aws/jsii/compare/v0.17.0...v0.17.1) (2019-09-30)


### Bug Fixes

* **dotnet:** use snupkg format for dotnet symbol packages ([#830](https://github.com/aws/jsii/issues/830)) ([d2724f0](https://github.com/aws/jsii/commit/d2724f0)), closes [NuGet/Home#6082](https://github.com/NuGet/Home/issues/6082)





# [0.17.0](https://github.com/aws/jsii/compare/v0.16.0...v0.17.0) (2019-09-18)


### Bug Fixes

* **dotnet:** fix deep type conversion across the process boundary, intelisense docs, set target to netcoreapp2.1 ([#772](https://github.com/aws/jsii/issues/772)) ([ecf8d3b](https://github.com/aws/jsii/commit/ecf8d3b))


### Features

* **java:** Indicate if method param is required ([#762](https://github.com/aws/jsii/issues/762)) ([cb7e11f](https://github.com/aws/jsii/commit/cb7e11f)), closes [#365](https://github.com/aws/jsii/issues/365)
* **java:** use immutable java implementations of JSII primitive collection types array and map ([#765](https://github.com/aws/jsii/issues/765)) ([5e713e3](https://github.com/aws/jsii/commit/5e713e3))





# [0.16.0](https://github.com/aws/jsii/compare/v0.15.1...v0.16.0) (2019-08-29)


### Bug Fixes

* **kernel:** correctly serialize enum values ([#754](https://github.com/aws/jsii/issues/754)) ([41ed25d](https://github.com/aws/jsii/commit/41ed25d)), closes [#753](https://github.com/aws/jsii/issues/753)


### Features

* **dotnet:** [JsiiOptional] attribute on properties that are optionals + Roslyn Analyzer ([#717](https://github.com/aws/jsii/issues/717)) ([bece042](https://github.com/aws/jsii/commit/bece042))
* **dotnet:** drop the useless I prefix for non datatype interfaces ([#728](https://github.com/aws/jsii/issues/728)) ([b9621f1](https://github.com/aws/jsii/commit/b9621f1)), closes [#109](https://github.com/aws/jsii/issues/109)


### BREAKING CHANGES

* **dotnet:** names of .NET behavioral interfaces have changed (the duplicate prefix I was removed).





## [0.15.1](https://github.com/aws/jsii/compare/v0.15.0...v0.15.1) (2019-08-18)


### Bug Fixes

* **dotnet:** add missing GetInterfaceType in the .NET runtime ([#703](https://github.com/aws/jsii/issues/703)) ([56617b1](https://github.com/aws/jsii/commit/56617b1)), closes [/docs.aws.amazon.com/cdk/api/latest/dotnet/api/Amazon.CDK.AWS.EC2.Vpc.html#Amazon_CDK_AWS_EC2](https://github.com//docs.aws.amazon.com/cdk/api/latest/dotnet/api/Amazon.CDK.AWS.EC2.Vpc.html/issues/Amazon_CDK_AWS_EC2) [aws/aws-cdk#2362](https://github.com/aws/aws-cdk/issues/2362)


### Features

* **java:** detect & rename members named after reserved words ([#705](https://github.com/aws/jsii/issues/705)) ([32bc117](https://github.com/aws/jsii/commit/32bc117))
* **python:** check distribution artifacts with `twine` ([#711](https://github.com/aws/jsii/issues/711)) ([f3d1da0](https://github.com/aws/jsii/commit/f3d1da0)), closes [#710](https://github.com/aws/jsii/issues/710)





## [0.15.0](https://github.com/aws/jsii/compare/v0.14.3...v0.15.0) (2019-08-12)


### Bug Fixes

* **dotnet:** stop mutating Dictionary when iterating on it ([#691](https://github.com/aws/jsii/issues/691)) ([8aedfc9](https://github.com/aws/jsii/commit/8aedfc9)), closes [#690](https://github.com/aws/jsii/issues/690)
* **java:** improve property override detection ([#692](https://github.com/aws/jsii/issues/692)) ([d90b304](https://github.com/aws/jsii/commit/d90b304))


### Features

* **dotnet:** handling optional and variadic parameters ([#680](https://github.com/aws/jsii/issues/680)) ([e8b5a35](https://github.com/aws/jsii/commit/e8b5a35)), closes [#153](https://github.com/aws/jsii/issues/153) [#210](https://github.com/aws/jsii/issues/210)
* **java:** overhauled structs with native implementation, builders, ...  ([#694](https://github.com/aws/jsii/issues/694)) ([b0b3fd2](https://github.com/aws/jsii/commit/b0b3fd2)), closes [#525](https://github.com/aws/jsii/issues/525)





## [0.14.3](https://github.com/aws/jsii/compare/v0.14.2...v0.14.3) (2019-08-01)


### Bug Fixes

* **dotnet:** use fully-qualified type names ([#651](https://github.com/aws/jsii/issues/651)) ([d32e2cd](https://github.com/aws/jsii/commit/d32e2cd)), closes [#650](https://github.com/aws/jsii/issues/650)


### Features

* new code generator for .NET ([#567](https://github.com/aws/jsii/issues/567)) ([c03e078](https://github.com/aws/jsii/commit/c03e078))





## [0.14.2](https://github.com/aws/jsii/compare/v0.14.1...v0.14.2) (2019-07-19)


### Bug Fixes

* fix usage of "external" stability ([#639](https://github.com/aws/jsii/issues/639)) ([30dea87](https://github.com/aws/jsii/commit/30dea87))





## [0.14.1](https://github.com/aws/jsii/compare/v0.14.0...v0.14.1) (2019-07-17)


### Bug Fixes

* **kernel:** validate presence of required struct properties ([#591](https://github.com/aws/jsii/issues/591)) ([90135f9](https://github.com/aws/jsii/commit/90135f9))


### Features

* add support for "external" stability ([#596](https://github.com/aws/jsii/issues/596)) ([dd66afb](https://github.com/aws/jsii/commit/dd66afb))





# [0.14.0](https://github.com/aws/jsii/compare/v0.13.4...v0.14.0) (2019-07-08)


### Features

* **python:** idiomatic capitalization for structs ([#586](https://github.com/aws/jsii/issues/586)) ([51211a0](https://github.com/aws/jsii/commit/51211a0)), closes [#537](https://github.com/aws/jsii/issues/537) [#577](https://github.com/aws/jsii/issues/577) [#578](https://github.com/aws/jsii/issues/578) [#588](https://github.com/aws/jsii/issues/588)





## [0.13.4](https://github.com/aws/jsii/compare/v0.13.3...v0.13.4) (2019-07-03)

**Note:** Version bump only for package jsii-pacmak





## [0.13.3](https://github.com/aws/jsii/compare/v0.13.2...v0.13.3) (2019-07-01)


### Bug Fixes

* **.net:** occasional incorrect param type cast ([#568](https://github.com/aws/jsii/issues/568)) ([c89d0fa](https://github.com/aws/jsii/commit/c89d0fa)), closes [awslabs/aws-cdk#3093](https://github.com/awslabs/aws-cdk/issues/3093)





## [0.13.2](https://github.com/aws/jsii/compare/v0.12.1...v0.13.2) (2019-07-01)


### Features

* **pacmak:** support adding a suffix to Java package version ([#552](https://github.com/aws/jsii/issues/552)) ([dfde37a](https://github.com/aws/jsii/commit/dfde37a))
* **pacmak:** support adding suffix to .NET package versions ([#557](https://github.com/aws/jsii/issues/557)) ([99adf19](https://github.com/aws/jsii/commit/99adf19))





## [0.12.1](https://github.com/aws/jsii/compare/v0.12.0...v0.12.1) (2019-06-25)

**Note:** Version bump only for package jsii-pacmak





# [0.12.0](https://github.com/aws/jsii/compare/v0.11.3...v0.12.0) (2019-06-24)


### Bug Fixes

* **python:** parameter names in docstrings should be snake_case, not camelCase ([#539](https://github.com/aws/jsii/issues/539)) ([a91a315](https://github.com/aws/jsii/commit/a91a315))


### Features

* **jsii:** enforce enum member names to be ALL_CAPS ([#541](https://github.com/aws/jsii/issues/541)) ([c88080d](https://github.com/aws/jsii/commit/c88080d)), closes [awslabs/aws-cdk#2287](https://github.com/awslabs/aws-cdk/issues/2287)


### BREAKING CHANGES

* **jsii:** Enum members are now expected to be `ALL_CAPS`





## [0.11.3](https://github.com/aws/jsii/compare/v0.11.2...v0.11.3) (2019-06-18)


### Bug Fixes

* **jsii:** Correctly handle singleton enums ([#535](https://github.com/aws/jsii/issues/535)) ([01aed03](https://github.com/aws/jsii/commit/01aed03)), closes [#231](https://github.com/aws/jsii/issues/231)
* **jsii:** Correctly ignore private properties from ctor ([#531](https://github.com/aws/jsii/issues/531)) ([e804cab](https://github.com/aws/jsii/commit/e804cab))





## [0.11.2](https://github.com/aws/jsii/compare/v0.11.1...v0.11.2) (2019-06-07)


### Bug Fixes

* **java:** Escape `*/` in package-info.java ([#526](https://github.com/aws/jsii/issues/526)) ([4e7ea98](https://github.com/aws/jsii/commit/4e7ea98))
* **kernel:** Correct null handling in JSON types ([#523](https://github.com/aws/jsii/issues/523)) ([7ffa98d](https://github.com/aws/jsii/commit/7ffa98d))





## [0.11.1](https://github.com/aws/jsii/compare/v0.11.0...v0.11.1) (2019-06-07)


### Bug Fixes

* **jsii-pacmak:** retry .NET build a couple of times ([#509](https://github.com/aws/jsii/issues/509)) ([d1ef618](https://github.com/aws/jsii/commit/d1ef618))
* **python:** support variadic arguments ([#513](https://github.com/aws/jsii/issues/513)) ([695ca6b](https://github.com/aws/jsii/commit/695ca6b))


### Features

* Register module-level stability ([#515](https://github.com/aws/jsii/issues/515)) ([efae447](https://github.com/aws/jsii/commit/efae447)), closes [awslabs/cdk-ops#367](https://github.com/awslabs/cdk-ops/issues/367)
* **jsii:** Propagate stability to members ([#522](https://github.com/aws/jsii/issues/522)) ([20507e6](https://github.com/aws/jsii/commit/20507e6))
* **jsii-spec:** Add optional metadata field ([#512](https://github.com/aws/jsii/issues/512)) ([10e2bfe](https://github.com/aws/jsii/commit/10e2bfe))





# [0.11.0](https://github.com/aws/jsii/compare/v0.10.5...v0.11.0) (2019-05-21)


### Bug Fixes

* **jsii:** deduplicate interfaces ([#497](https://github.com/aws/jsii/issues/497)) ([05f5189](https://github.com/aws/jsii/commit/05f5189)), closes [#496](https://github.com/aws/jsii/issues/496)





## [0.10.5](https://github.com/aws/jsii/compare/v0.10.4...v0.10.5) (2019-05-06)


### Bug Fixes

* **jsii:** merge all "implements" declarations ([#494](https://github.com/aws/jsii/issues/494)) ([5e069aa](https://github.com/aws/jsii/commit/5e069aa)), closes [#493](https://github.com/aws/jsii/issues/493)





## [0.10.4](https://github.com/aws/jsii/compare/v0.10.3...v0.10.4) (2019-05-05)


### Bug Fixes

* **jsii:** consider interfaces from erased base classes ([#491](https://github.com/aws/jsii/issues/491)) ([b03511b](https://github.com/aws/jsii/commit/b03511b)), closes [#487](https://github.com/aws/jsii/issues/487)





## [0.10.3](https://github.com/aws/jsii/compare/v0.10.2...v0.10.3) (2019-04-24)


### Bug Fixes

* **java:** fix illegal arguments passed to JavaDoc generator ([#475](https://github.com/aws/jsii/issues/475)) ([4456138](https://github.com/aws/jsii/commit/4456138))
* **python:** fix indentation for multiline bullets in RST generator ([#479](https://github.com/aws/jsii/issues/479)) ([3a79142](https://github.com/aws/jsii/commit/3a79142)), closes [#478](https://github.com/aws/jsii/issues/478)
* **python:** maintain inheritance chain for structs ([#482](https://github.com/aws/jsii/issues/482)) ([607f151](https://github.com/aws/jsii/commit/607f151)), closes [#473](https://github.com/aws/jsii/issues/473)


### Features

* **jsii-pacmak:** add Python docstrings ([#470](https://github.com/aws/jsii/issues/470)) ([6cd4903](https://github.com/aws/jsii/commit/6cd4903))





## [0.10.2](https://github.com/aws/jsii/compare/v0.10.1...v0.10.2) (2019-04-18)


### Bug Fixes

* **dotnet:** Correctly handle 'void' callback results ([#471](https://github.com/aws/jsii/issues/471)) ([81e41bd](https://github.com/aws/jsii/commit/81e41bd))





## [0.10.1](https://github.com/aws/jsii/compare/v0.10.0...v0.10.1) (2019-04-17)


### Bug Fixes

* **dotnet:** Correctly generate "optional" markers ([#466](https://github.com/aws/jsii/issues/466)) ([17403dc](https://github.com/aws/jsii/commit/17403dc))





# [0.10.0](https://github.com/aws/jsii/compare/v0.9.0...v0.10.0) (2019-04-16)


### Bug Fixes

* **dotnet:** fix doc comment model parsing in .NET generator ([#455](https://github.com/aws/jsii/issues/455)) ([ae85aa5](https://github.com/aws/jsii/commit/ae85aa5))
* **java:** Stop using Streams to render params ([#459](https://github.com/aws/jsii/issues/459)) ([a5e8a93](https://github.com/aws/jsii/commit/a5e8a93))
* **jsii:** flatten out dependency list ([#454](https://github.com/aws/jsii/issues/454)) ([ebdd10d](https://github.com/aws/jsii/commit/ebdd10d)), closes [#453](https://github.com/aws/jsii/issues/453)
* **jsii-reflect:** don't load same assembly multiple times ([#461](https://github.com/aws/jsii/issues/461)) ([3a6b21c](https://github.com/aws/jsii/commit/3a6b21c))
* **kernel:** Set `this` in static contexts ([#460](https://github.com/aws/jsii/issues/460)) ([c81b4c1](https://github.com/aws/jsii/commit/c81b4c1)), closes [awslabs/aws-cdk#2304](https://github.com/awslabs/aws-cdk/issues/2304)
* **pacmak:** fix Maven dependency collector. ([#449](https://github.com/aws/jsii/issues/449)) ([675b86a](https://github.com/aws/jsii/commit/675b86a)), closes [#447](https://github.com/aws/jsii/issues/447)


### Features

* **jsii-spec:** Model parameter optionality ([#432](https://github.com/aws/jsii/issues/432)) ([21e485a](https://github.com/aws/jsii/commit/21e485a)), closes [#296](https://github.com/aws/jsii/issues/296) [#414](https://github.com/aws/jsii/issues/414)


### BREAKING CHANGES

* **jsii-spec:** JSII assemblies generated by older versions of the tool
will fail loading with this new version, and vice-versa. Re-compile your
projects in order to fix this.





# [0.9.0](https://github.com/aws/jsii/compare/v0.8.2...v0.9.0) (2019-04-04)


### Bug Fixes

* **jsii:** Prohibit illegal uses of structs (aka data types) ([#418](https://github.com/aws/jsii/issues/418)) ([8ff9137](https://github.com/aws/jsii/commit/8ff9137)), closes [#287](https://github.com/aws/jsii/issues/287)


### Features

* **jsii:** Enforce use of peerDependencies ([#421](https://github.com/aws/jsii/issues/421)) ([e72fea5](https://github.com/aws/jsii/commit/e72fea5)), closes [#361](https://github.com/aws/jsii/issues/361)
* **jsii:** Erase un-exported base classes instead of prohibiting those ([#425](https://github.com/aws/jsii/issues/425)) ([d006f5c](https://github.com/aws/jsii/commit/d006f5c)), closes [#417](https://github.com/aws/jsii/issues/417)
* **jsii:** Erase un-exported base interfaces instead of prohibiting those ([#426](https://github.com/aws/jsii/issues/426)) ([afbabff](https://github.com/aws/jsii/commit/afbabff)), closes [#417](https://github.com/aws/jsii/issues/417)
* **jsii:** record source locations in assembly ([#429](https://github.com/aws/jsii/issues/429)) ([e601c0c](https://github.com/aws/jsii/commit/e601c0c))
* **jsii:** Tag the jsii compiler version in the .jsii assemblies ([#420](https://github.com/aws/jsii/issues/420)) ([42dece1](https://github.com/aws/jsii/commit/42dece1)), closes [#412](https://github.com/aws/jsii/issues/412)
* **jsii-diff:** standardize doc comments, add API compatibility tool ([#415](https://github.com/aws/jsii/issues/415)) ([9cfd867](https://github.com/aws/jsii/commit/9cfd867))
* **kernel:** Normalize empty structs to undefined ([#416](https://github.com/aws/jsii/issues/416)) ([a8ee954](https://github.com/aws/jsii/commit/a8ee954)), closes [#411](https://github.com/aws/jsii/issues/411)


### BREAKING CHANGES

* **jsii:** All direct dependencies must be duplicated in
                 peerDependencies unless they are in bundledDependencies.





## [0.8.2](https://github.com/aws/jsii/compare/v0.8.1...v0.8.2) (2019-03-28)


### Bug Fixes

* **python:** Lift the entire data class hierarchy ([#408](https://github.com/aws/jsii/issues/408)) ([f813620](https://github.com/aws/jsii/commit/f813620))





## [0.8.1](https://github.com/aws/jsii/compare/v0.8.0...v0.8.1) (2019-03-28)


### Bug Fixes

* **kernel:** make type serialization explicit and recursive ([#401](https://github.com/aws/jsii/issues/401)) ([0a83d52](https://github.com/aws/jsii/commit/0a83d52)), closes [awslabs/aws-cdk#1981](https://github.com/awslabs/aws-cdk/issues/1981)
* **runtime:** Passing 'this' to a callback from constructor ([#395](https://github.com/aws/jsii/issues/395)) ([850f42b](https://github.com/aws/jsii/commit/850f42b))





# [0.8.0](https://github.com/aws/jsii/compare/v0.7.15...v0.8.0) (2019-03-20)


### Bug Fixes

* copy non-hidden bases when erasing hidden interfaces ([#392](https://github.com/aws/jsii/issues/392)) ([5af84b6](https://github.com/aws/jsii/commit/5af84b6)), closes [#390](https://github.com/aws/jsii/issues/390)
* Fix Async function support in Python ([b5d49de](https://github.com/aws/jsii/commit/b5d49de))
* Proxy interface literals in the generated Python code ([10242eb](https://github.com/aws/jsii/commit/10242eb))
* Python's abstract class proxies now inherit from parent's proxy ([6f1c9c0](https://github.com/aws/jsii/commit/6f1c9c0))


### Features

* Add Python Support ([cc3ec87](https://github.com/aws/jsii/commit/cc3ec87))
* internal accessibility ([#390](https://github.com/aws/jsii/issues/390)) ([e232cb5](https://github.com/aws/jsii/commit/e232cb5)), closes [#287](https://github.com/aws/jsii/issues/287) [#388](https://github.com/aws/jsii/issues/388)
* pass data types (structs) by-value instead of by-ref ([#376](https://github.com/aws/jsii/issues/376)) ([db3ccdf](https://github.com/aws/jsii/commit/db3ccdf)), closes [awslabs/aws-cdk#965](https://github.com/awslabs/aws-cdk/issues/965) [#375](https://github.com/aws/jsii/issues/375)


### BREAKING CHANGES

* all properties in interfaces which represent data types must be marked as `readonly`. Otherwise, jsii compilation will fail.
* member names that begin with underscore now must be marked as "@internal" in their jsdocs, which will cause them to disappear from type declaration files and jsii APIs.





<a name="0.7.15"></a>
## [0.7.15](https://github.com/aws/jsii/compare/v0.7.14...v0.7.15) (2019-02-27)


### Bug Fixes

* **jsii-pacmack:** default to target directory mode ([#363](https://github.com/aws/jsii/issues/363)) ([967d917](https://github.com/aws/jsii/commit/967d917))




<a name="0.7.14"></a>
## [0.7.14](https://github.com/aws/jsii/compare/v0.7.13...v0.7.14) (2019-02-04)


### Bug Fixes

* **kernel:** Improve tagged type of wire values ([#346](https://github.com/aws/jsii/issues/346)) ([8ea39ac](https://github.com/aws/jsii/commit/8ea39ac)), closes [#345](https://github.com/aws/jsii/issues/345)


### Features

* **jsii:** support multiple class declaration sites ([#348](https://github.com/aws/jsii/issues/348)) ([4ecf28c](https://github.com/aws/jsii/commit/4ecf28c))
* Generate NuGet symbol and source packages ([#243](https://github.com/aws/jsii/issues/243)) ([aafd405](https://github.com/aws/jsii/commit/aafd405))




<a name="0.7.13"></a>
## [0.7.13](https://github.com/aws/jsii/compare/v0.7.12...v0.7.13) (2019-01-03)




**Note:** Version bump only for package jsii-pacmak

<a name="0.7.12"></a>
## [0.7.12](https://github.com/aws/jsii/compare/v0.7.11...v0.7.12) (2018-12-11)


### Bug Fixes

* **kernel:** Correctly return instances of un-exported types ([#321](https://github.com/aws/jsii/issues/321)) ([9c59acc](https://github.com/aws/jsii/commit/9c59acc))


### Features

* JSII_AGENT ([#325](https://github.com/aws/jsii/issues/325)) ([cf1d0c3](https://github.com/aws/jsii/commit/cf1d0c3)), closes [#324](https://github.com/aws/jsii/issues/324)




<a name="0.7.11"></a>
## [0.7.11](https://github.com/aws/jsii/compare/v0.7.10...v0.7.11) (2018-11-18)


### Bug Fixes

* **jsii-dotnet-runtime:** Proxy parameters should not throw exception. ([#317](https://github.com/aws/jsii/issues/317)) ([acc8f22](https://github.com/aws/jsii/commit/acc8f22)), closes [#316](https://github.com/aws/jsii/issues/316)




<a name="0.7.10"></a>
## [0.7.10](https://github.com/aws/jsii/compare/v0.7.9...v0.7.10) (2018-11-12)




**Note:** Version bump only for package jsii-pacmak

<a name="0.7.9"></a>
## [0.7.9](https://github.com/aws/jsii/compare/v0.7.8...v0.7.9) (2018-11-12)


### Bug Fixes

* **docs:** improve docs rendering ([#303](https://github.com/aws/jsii/issues/303)) ([094a215](https://github.com/aws/jsii/commit/094a215)), closes [#301](https://github.com/aws/jsii/issues/301) [#298](https://github.com/aws/jsii/issues/298) [#302](https://github.com/aws/jsii/issues/302) [#300](https://github.com/aws/jsii/issues/300) [#299](https://github.com/aws/jsii/issues/299)
* **jsii:** do not mark "any" or "unknown" as optional (unless "?") ([#295](https://github.com/aws/jsii/issues/295)) ([cdf5a53](https://github.com/aws/jsii/commit/cdf5a53)), closes [#284](https://github.com/aws/jsii/issues/284)
* **jsii-runtime:** treat "null" as "undefined" ([#297](https://github.com/aws/jsii/issues/297)) ([43fb16a](https://github.com/aws/jsii/commit/43fb16a)), closes [awslabs/aws-cdk#157](https://github.com/awslabs/aws-cdk/issues/157) [#282](https://github.com/aws/jsii/issues/282)
* **runtime/dotnet:** Correct a number of type mappings ([#291](https://github.com/aws/jsii/issues/291)) ([0d59dab](https://github.com/aws/jsii/commit/0d59dab)), closes [#290](https://github.com/aws/jsii/issues/290) [awslabs/aws-cdk#1027](https://github.com/awslabs/aws-cdk/issues/1027)
* accept variadic arguments after optional arguments ([#307](https://github.com/aws/jsii/issues/307)) ([c1af1d6](https://github.com/aws/jsii/commit/c1af1d6))


### Features

* **jsii:** enforce peer dependencies ([#294](https://github.com/aws/jsii/issues/294)) ([1753910](https://github.com/aws/jsii/commit/1753910)), closes [awslabs/aws-cdk#979](https://github.com/awslabs/aws-cdk/issues/979)




<a name="0.7.8"></a>
## [0.7.8](https://github.com/aws/jsii/compare/v0.7.7...v0.7.8) (2018-10-23)


### Bug Fixes

* **jsii:** use base interfaces for 'datatype' property ([#265](https://github.com/aws/jsii/issues/265)) ([1c56902](https://github.com/aws/jsii/commit/1c56902)), closes [#264](https://github.com/aws/jsii/issues/264)
* match behavioral interface to 'I'-prefix ([#271](https://github.com/aws/jsii/issues/271)) ([03103f3](https://github.com/aws/jsii/commit/03103f3))




<a name="0.7.7"></a>
## [0.7.7](https://github.com/aws/jsii/compare/v0.7.6...v0.7.7) (2018-10-10)


### Bug Fixes

* **dotnet:** abstract classes should have proxy implementations ([#241](https://github.com/aws/jsii/issues/241)) ([828a26f](https://github.com/aws/jsii/commit/828a26f)), closes [#223](https://github.com/aws/jsii/issues/223)
* **jsii:** support  public autoproperties in private constructor ([#256](https://github.com/aws/jsii/issues/256)) ([181012e](https://github.com/aws/jsii/commit/181012e))
* **jsii-dotnet-generator:** Use FQ type returns in conflict. ([#258](https://github.com/aws/jsii/issues/258)) ([a78784a](https://github.com/aws/jsii/commit/a78784a)), closes [#252](https://github.com/aws/jsii/issues/252)
* **kernel:** Return object literals as references ([#249](https://github.com/aws/jsii/issues/249)) ([61cb3a4](https://github.com/aws/jsii/commit/61cb3a4)), closes [#248](https://github.com/aws/jsii/issues/248) [awslabs/aws-cdk#774](https://github.com/awslabs/aws-cdk/issues/774)




<a name="0.7.6"></a>
## [0.7.6](https://github.com/aws/jsii/compare/v0.7.5...v0.7.6) (2018-09-20)


### Bug Fixes

* Sphinx generated incorrect type references for display ([#232](https://github.com/aws/jsii/issues/232)) ([b664805](https://github.com/aws/jsii/commit/b664805))
* **jsii:** Defaulted parameters were not rendered as optional ([#234](https://github.com/aws/jsii/issues/234)) ([578bf9c](https://github.com/aws/jsii/commit/578bf9c)), closes [#233](https://github.com/aws/jsii/issues/233)
* **jsii:** Optional `any` represented as required ([#237](https://github.com/aws/jsii/issues/237)) ([91074f3](https://github.com/aws/jsii/commit/91074f3)), closes [#230](https://github.com/aws/jsii/issues/230)


### Features

* **sphinx:** allow readme file to define sphinx header and reorganize topic ([#229](https://github.com/aws/jsii/issues/229)) ([405da9c](https://github.com/aws/jsii/commit/405da9c)), closes [#228](https://github.com/aws/jsii/issues/228) [#185](https://github.com/aws/jsii/issues/185)
* Document overriden/inherited members ([#238](https://github.com/aws/jsii/issues/238)) ([7a6278a](https://github.com/aws/jsii/commit/7a6278a)), closes [#196](https://github.com/aws/jsii/issues/196)




<a name="0.7.5"></a>
## [0.7.5](https://github.com/aws/jsii/compare/v0.7.4...v0.7.5) (2018-09-13)


### Bug Fixes

* **java:** support abstract return types ([#224](https://github.com/aws/jsii/issues/224)) ([3257223](https://github.com/aws/jsii/commit/3257223)), closes [#220](https://github.com/aws/jsii/issues/220) [#223](https://github.com/aws/jsii/issues/223) [awslabs/aws-cdk#680](https://github.com/awslabs/aws-cdk/issues/680)




<a name="0.7.4"></a>
## [0.7.4](https://github.com/aws/jsii/compare/v0.7.3...v0.7.4) (2018-09-10)




**Note:** Version bump only for package jsii-pacmak

<a name="0.7.3"></a>
## [0.7.3](https://github.com/aws/jsii/compare/v0.7.2...v0.7.3) (2018-09-06)




**Note:** Version bump only for package jsii-pacmak

<a name="0.7.2"></a>
## [0.7.2](https://github.com/aws/jsii/compare/v0.7.1...v0.7.2) (2018-09-06)


### Bug Fixes

* Missing types in JSII assembly, invalid Java code, confusing docs ([#208](https://github.com/aws/jsii/issues/208)) ([b37101f](https://github.com/aws/jsii/commit/b37101f)), closes [#175](https://github.com/aws/jsii/issues/175)


### Features

* **jsii:** Re-implemented jsii to support --watch and produce better error reporting ([#188](https://github.com/aws/jsii/issues/188)) ([76472be](https://github.com/aws/jsii/commit/76472be))




<a name="0.7.1"></a>
## [0.7.1](https://github.com/aws/jsii/compare/v0.7.0...v0.7.1) (2018-08-28)

### Bug Fixes

* **jsii-pacmak:** Output .NET build artifacts to `dist/dotnet/` instead of just `dist/` ([#192](https://github.com/aws/jsii/issues/192)) ([f25c8c4](https://github.com/aws/jsii/commit/f25c8c45ba3de62c05d5d115f8aad675f85a3f31))


<a name="0.7.0"></a>
# [0.7.0](https://github.com/aws/jsii/compare/v0.6.4...v0.7.0) (2018-08-21)


### Features

* **jsii:** Further normalize assembly outputs ([#177](https://github.com/aws/jsii/issues/177)) ([de3f062](https://github.com/aws/jsii/commit/de3f062)), closes [#60](https://github.com/aws/jsii/issues/60)




<a name="0.7.0"></a>
# [0.7.0](https://github.com/aws/jsii/compare/v0.6.4...v0.7.0) (2018-08-21)


### Features

* **jsii:** Further normalize assembly outputs ([#177](https://github.com/aws/jsii/issues/177)) ([de3f062](https://github.com/aws/jsii/commit/de3f062)), closes [#60](https://github.com/aws/jsii/issues/60)




<a name="0.6.4"></a>
## [0.6.4](https://github.com/aws/jsii/compare/v0.6.3...v0.6.4) (2018-08-08)

### Bug Fixes

* jsii-pacmak refered to private dependencies ([e61efc0](https://github.com/aws/jsii/commit/e61efc0))


<a name="0.6.3"></a>
## [0.6.3](https://github.com/aws/jsii/compare/v0.6.2...v0.6.3) (2018-08-08)

<a name="0.6.3"></a>
## [0.6.3](https://github.com/aws/jsii/compare/v0.6.2...v0.6.3) (2018-08-08)

### New features

* Produce .nupkg for .NET targets ([#160](https://github.com/aws/jsii/issues/160))
* Upgrade TypeScript to 3.0.1 ([#161](https://github.com/aws/jsii/issues/160))

<a name="0.6.2"></a>
## 0.6.2 (2018-08-07)


### Bug Fixes

* "Malformed enum value" when using [@scoped](https://github.com/scoped) packages ([#139](https://github.com/aws/jsii/issues/139)) ([4e70209](https://github.com/aws/jsii/commit/4e70209)), closes [#138](https://github.com/aws/jsii/issues/138)
