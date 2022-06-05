// Write your code here!
const element = document.getElementById('main');

element.remove();

let newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory');

newHeader.innerHTML =`Calvin is the champion`;