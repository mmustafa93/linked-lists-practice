import { linkedList } from "./linkedList.js";

const myList = linkedList();

myList.append(10);
myList.append(20);

console.log(myList.at(11)); 