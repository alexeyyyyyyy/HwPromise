function createInfoElement(content, li) {
    const element = document.createElement('li');
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}

function createInfoElement1(content, h3) {
    const element = document.createElement('h3');
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;

}