import { Node } from "./Node";

export class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      const currentHead = this.head;
      this.head = newNode;
      newNode.next = currentHead;
    }
  }

  addToTail(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentTail = this.head;

      while (currentTail !== null) {
        this.head = newNode;
        currentTail = currentTail.next;
      }
      currentTail.next = newNode;
    }
  }

  removeHead() {
    if (this.head === null) {
      return null;
    } else {
      const removed = this.head.value;
      this.head = next;
      return removed;
    }
  }

  removeTail() {
    if (this.head === null) {
      return null;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
  }

  addByIndex(index, value) {
    if (index < 0) return;

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (current !== null && currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (currentIndex !== index) return;

    previous.next = newNode;
    newNode.next = current;
  }
}
