import { node } from "./node.js";

function linkedList(){
    let head = null;

    const append = (value) => {
        const newNode = node(value);

        if (!head){
            head = newNode;
        } else {
            let current = head;
            while (current.newNextNode){
                current = current.newNextNode;
            }
            current.newNextNode = newNode;
        }
    }
    
    const prepend = (value) => {
        const newNode = node(value);
        newNode.newNextNode = head;
        head = newNode;
    }

    const getHead = () => head;

    const size = () => {
        if (!head){
            return 0
        } 
        let count = 0;
        let current = head;
        while (current){
            count++;
            current = current.newNextNode;
        }
        return count
    }

    const firstNode = () => {
        if (!head) return null;
        return head.newValue;
    } 

    const lastNode = () => {
        if (!head) return null;
        let current = head;
        while (current.newNextNode){
            current = current.newNextNode
            }
        return current;
    }

    const at = (index) => {
        if (!head) return null;
        let current = head;
        let count = 0;
        while (current){
            if (count === index){
                return current
            };
            current = current.newNextNode;
            count++;
        }
        return null;
    }

    const pop = () => {
        if (!head) return null;
        if (head.newNextNode === null){
            head = null;
            return;
        };

        let current = head;

        while (current.newNextNode && current.newNextNode.newNextNode){
            current = current.newNextNode;
        }

        current.newNextNode = null;
    }

    const contains = (value) => {
        let current = head;
        while (current){
            if (current.newValue === value){
                return true;
            }
            current = current.newNextNode;
        }
        return false;
    }

    const find = (value) => {
        let current = head;
        let count = 0;
        while (current){
            if (current.newValue === value){
                return count;
            }
            count++
            current = current.newNextNode;
        }
        return null;
    }

    const toString = () => {
        let current = head;
        let string = "";
        while (current) {
            string += `( ${current.newValue} ) -> `;
            current = current.newNextNode;
        }
    
        string += "null";
        return string;
    }

    return { append, prepend, getHead, size, firstNode, lastNode, at, pop, contains, find, toString }
}

export { linkedList }