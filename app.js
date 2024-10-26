const colors = ["green", "red", "purple", "orange", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const colorText = document.querySelector('.color')

btn.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNum]
    
    colorText.textContent = colors[randomNum]
})