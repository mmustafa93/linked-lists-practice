import { linkedList } from "./linkedList.js";

const myList = linkedList();

myList.append(10);
myList.append(20);
myList.append(30);
myList.prepend(5);

console.log(myList.getHead()); 