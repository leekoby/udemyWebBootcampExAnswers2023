// WRITE YOUR CODE IN HERE:
const container = document.querySelector('#container');
for (let i = 0; i < 100; i++) {
    const btn = document.createElement('button');
    btn.innerHTML = "Hey!";
    container.appendChild(btn);
}