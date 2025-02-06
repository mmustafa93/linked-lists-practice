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

    return { append, prepend, getHead, size, firstNode }
}

export { linkedList }