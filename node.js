const node = (value=null, nextNode=null) => {
    const newValue = value;
    const newNextNode = nextNode;

    return { newValue, newNextNode }
}

export { node }