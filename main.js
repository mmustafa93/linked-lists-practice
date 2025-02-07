import { linkedList } from "./linkedList.js";

const myList = linkedList();

myList.append(10);
myList.append(20);
myList.append(30);

myList.insertAt(101, 1)
console.log(myList.toString()); 