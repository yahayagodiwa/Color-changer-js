const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let hexColor = '#'
    for (i = 0; i < 6; i++){
        hexColor += hex[randomColor()]
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor
})

function randomColor() {
  return  Math.floor(Math.random() * hex.length)
}

