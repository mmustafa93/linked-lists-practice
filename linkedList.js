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

    const getHead = () => head;

    return { append, getHead }
}

export { linkedList }