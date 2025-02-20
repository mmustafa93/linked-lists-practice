# Linked Lists Practice

This project implements a simple **Linked List** data structure in JavaScript, focusing on basic operations such as appending, prepending, inserting, and removing nodes. The implementation is divided into modular files for better code organization.

## Folder Structure
```
linked-lists-practice
├── linkedList.js  # Linked List implementation
├── main.js        # Example usage of the Linked List
├── node.js        # Node implementation for the Linked List
└── README.md      # Project documentation
```

## Features
- **append(value)**: Adds a node with the specified value at the end of the list.
- **prepend(value)**: Adds a node with the specified value at the beginning of the list.
- **getHead()**: Returns the head node of the list.
- **size()**: Returns the total number of nodes in the list.
- **firstNode()**: Returns the value of the first node.
- **lastNode()**: Returns the value of the last node.
- **at(index)**: Returns the node at the specified index.
- **pop()**: Removes the last node of the list.
- **contains(value)**: Checks if a node with the specified value exists in the list.
- **find(value)**: Returns the index of the node containing the specified value.
- **toString()**: Returns a string representation of the list.
- **insertAt(value, index)**: Inserts a node with the specified value at the given index.
- **removeAt(index)**: Removes the node at the specified index.

## Example Usage
```javascript
import { linkedList } from "./linkedList.js";

const myList = linkedList();

myList.append(10);
myList.append(20);
myList.append(30);

myList.insertAt(101, 1);
myList.removeAt(0);
console.log(myList.toString()); // Output: ( 101 ) -> ( 20 ) -> ( 30 ) -> null
```

## Installation
1. Clone the repository:
```sh
git clone git@github.com:mmustafa93/linked-lists-practice.git
cd linked-lists-practice
```

2. Run the example code:
```sh
node main.js
```

## Contribution
Feel free to open issues or submit pull requests if you find any bugs or want to contribute!

## License
This project is licensed under the MIT License.