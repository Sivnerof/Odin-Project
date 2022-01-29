/*
    * 1. a <p> with red text that says “Hey I’m red!”
    * 2. an <h3> with blue text that says “I’m a blue h3!”
    * 3. a <div> with a black border and pink background color with the following elements inside of it:
    * 4.    another <h1> that says “I’m in a div”
    * 5.    a <p> that says “ME TOO!”
    * 6.    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


    parentNode.appendChild(childNode) appends childNode as the last child of parentNode
    parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode

    const container = document.querySelector('#container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';

    container.appendChild(content);

*/

const container = document.querySelector('#container');
const content = document.createElement('div');
const header1 = document.createElement('h1');
const header3 = document.createElement('h3');
const para = document.createElement('p');

content.setAttribute('style', 'background: pink; border: 2px solid black;');
header3.style.color = 'blue';
para.style.color = 'red';

header3.textContent = 'I\'m a Blue h3!';
para.textContent = 'Hey I\'m Red!';

container.appendChild(para);
container.appendChild(header3);
container.appendChild(content);
content.appendChild(header1);
content.appendChild(para);