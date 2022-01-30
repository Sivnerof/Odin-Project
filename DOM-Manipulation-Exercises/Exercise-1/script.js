const container = document.querySelector('#container');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const h3 = document.createElement('h3');
const para1 = document.createElement('p');
const para2 = document.createElement('p');

para1.style.color = 'red';
h3.style.color = 'blue';
div.setAttribute('style', 'background: pink; border: 3px solid black;');

h1.textContent = 'I\'m In A Div';
h3.textContent = 'I\'m A Blue h3';
para1.textContent = 'Hey I\'m Red!';
para2.textContent = 'Me too!';

div.appendChild(h1);
div.appendChild(para2);
container.appendChild(para1);
container.appendChild(h3);
container.appendChild(div);