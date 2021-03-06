/**
 * Annotation Factory
 *
 * Goal: allows HTML style boolean attributes.
 */
function booleanFieldValueFactory() {
  return function booleanFieldValueMetadata(target: any, key: string): void {
    const defaultValue = target[key];
    const localKey = `__md_private_symbol_${key}`;
    target[localKey] = defaultValue;

    Object.defineProperty(target, key, {
      get() { return (<any>this)[localKey]; },
      set(value: boolean) {
        (<any>this)[localKey] = value !== null && `${value}` !== 'false';
      }
    });
  }
}

export { booleanFieldValueFactory as BooleanFieldValue };
