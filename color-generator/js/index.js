const colorContainer = document.getElementById('color-container');
const colorText = document.getElementById('color-text');
const colorButton = document.getElementById('color-button');
const variableArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'E', 'F'];
const checkColor = localStorage.getItem('color') ? localStorage.getItem('color') : '#FFFFFF';

let newColor;
let randomNumber;

colorText.innerText = checkColor;
colorContainer.style.backgroundColor = checkColor;

const random = () => {
    randomNumber = Math.floor( Math.random() * 15 );
}

colorButton.onclick = () => {
    newColor = ''
    for(let i = 0; i < 6; i++) {
        random();
        if ( randomNumber >= 15 ) {
            random();
        }
        newColor += variableArr[randomNumber];  
    }
    
    colorText.innerText = `#${newColor}`
    colorContainer.style.backgroundColor = `#${newColor}`

    localStorage.setItem('color', `#${newColor}`);
}