import { Node } from "./classes/Node";
import { ObjectConstructor } from "./classes/ObjectConstructor";
import "./style.css";

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);

n1.next = n2;
n2.next = n3;

const object = new ObjectConstructor({ a: 1, b: 2 });
console.log(object.getObject());
