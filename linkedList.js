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

    return { append, prepend, getHead }
}

export { linkedList }