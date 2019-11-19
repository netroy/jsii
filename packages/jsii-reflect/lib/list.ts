import { TypeSystem } from "./type-system";
import { Assembly } from "./assembly";
import { ReferenceType } from "./reference-type";
import { EnumType } from "./enum";
import { Type } from "./type";
import { OptionalValue } from "./optional-value";
import { Parameter } from "./parameter";
import { describeStability } from "./tree";

export interface TypeSystemListOptions {
  /**
   * Show all entity types (supersedes other options)
   * @default false
   */
  showAll?: boolean;

  /**
   * Show type members (methods, properties)
   * @default false
   */
  members?: boolean;

  /**
   * Show dependencies
   * @default false
   */
  dependencies?: boolean;

  /**
   * Show inheritance information (base classes, interfaces)
   * @default false
   */
  inheritance?: boolean;

  /**
   * Show types
   * @default false
   */
  types?: boolean;

  /**
   * Show method signatures.
   * @default false
   */
  signatures?: boolean;

  /**
   * Show stabilities
   *
   * @default false
   */
  stabilities?: boolean;
}

export function listTypeSystemElements(ts: TypeSystem, options: TypeSystemListOptions) {
  ts.assemblies.forEach(listAssembly);

  function listAssembly(ass: Assembly) {
    ass.classes.forEach(listRefType);
    ass.interfaces.forEach(listRefType);
    ass.enums.forEach(listEnum);
  }

  function listRefType(type: ReferenceType) {
    const typeName = type.isClassType() ? 'class' :
                     type.isDataType() ? 'struct' :
                     'interface';

    display(typeName, type, undefined, [
      isAbstract(type) ? 'abstract' : '',
      describeStability(type, options),
    ]);

    const struct = type.isDataType();

    for (const prop of type.ownProperties) {
      display('property', type, `${prop.name}: ${renderOptVal(prop)}`, [
        prop.abstract && !struct ? 'abstract' : '',
        prop.const ? 'const': '',
        prop.immutable ? 'immutable' : '',
        prop.overrides ? `overrides ${prop.overrides.fqn}` : '',
        prop.protected ? 'protected' : '',
        prop.static ? 'static' : '',
        describeStability(type, options),
      ]);
    }

    for (const meth of type.ownMethods) {
      display('method', type, `${meth.name}(${renderParams(meth.parameters)}): ${renderOptVal(meth.returns)}`, [
        meth.abstract && !struct ? 'abstract' : '',
        meth.overrides ? `overrides ${meth.overrides.fqn}` : '',
        meth.protected ? 'protected' : '',
        meth.static ? 'static' : '',
        describeStability(type, options),
      ]);
    }
  }

  function renderParams(parameters: Parameter[]) {
    // Only show types
    return parameters.map(renderOptVal).join(',');
  }

  function listEnum(enm: EnumType) {
    display('enum', enm, undefined, [
      describeStability(enm, options),
    ]);
    for (const mem of enm.members) {
      display('enummember', enm, mem.name, [
        describeStability(mem, options),
      ]);
    }
  }

  function isAbstract(type: ReferenceType) {
    if (type.isClassType()) { return type.abstract; }
    if (type.isDataType()) { return false; }
    return true;
  }

  function renderOptVal(ov: OptionalValue) {
    return ov.type.toString() + (ov.optional ? '?' : '');
  }

  function display(kind: string, containingType: Type, memberName?: string, attributes?: string[]) {
    const fullName = containingType.fqn + (memberName ? '#' + memberName : '');
    attributes = (attributes || []).filter(a => a);
    const attrs = attributes.length > 0 ? `(${attributes})` : '';
    console.log(kind, fullName, attrs);
  }
}