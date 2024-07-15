// Write your code here!

const main = document.getElementById('main')
main.remove()

const newHeader = document.createElement('h1')
// newHeader.id = 'victory'
newHeader.setAttribute('id', 'victory')
// newHeader.innerHTML = `<h1 id="victory">Ndoria is the champion</h1>`;
newHeader.textContent = 'Ndoria is the champion'