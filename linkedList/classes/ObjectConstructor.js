export class ObjectConstructor {
  constructor(elements = {}) {
    this.elements = { ...elements };
  }

  getKey(key) {
    return this.elements[key];
  }

  getObject() {
    return { ...this.elements };
  }

  getKeys() {
    return Object.keys(this.elements);
  }

  getValues() {
    return Object.values(this.elements);
  }

  setKey(key, value) {
    return (this.elements[key] = value);
  }

  delete() {
    this.elements = {};
  }
}
