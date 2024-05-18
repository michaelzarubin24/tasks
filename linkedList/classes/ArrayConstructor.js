export class ArrayConstructor {
  constructor(...elements) {
    this.elements = [...elements];
  }

  filter() {
    return this.elements.filter();
  }

  ascendingSort() {
    return this.elements.sort();
  }

  descendingSort() {
    return this.elements.sort((a, b) => b - a);
  }

  push(...items) {
    this.elements.push(...items);
    return this.elements.length;
  }

  pop() {
    return this.elements.pop();
  }

  toArray() {
    return [...this.elements];
  }
}
