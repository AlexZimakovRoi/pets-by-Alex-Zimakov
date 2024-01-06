const passModel = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    letter: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    symbol: ['!', '@', '_', '-'],
    upCase: [true, false],
}
const generateButton = document.getElementById('main-button');
const lenInput = document.getElementById('len-input');
const passInput = document.getElementById('pass-input');
let lenPass = 10;

lenInput.oninput = () => {
    lenPass = Number( lenInput.value )
}

const randomPass = () => {
    let selectModel = Math.floor( Math.random() * 4 );
    let selectCase = Math.floor( Math.random() * 2 );
    if (selectModel == 0) {
        randomPass();
    }
    switch (selectModel) {
        case 1:
            passInput.value += passModel.numbers[ Math.floor( Math.random() * passModel.numbers.length ) ]
            break;
        case 2:
            if ( selectCase == 1 ) {
                passInput.value += passModel.letter[ Math.floor( Math.random() * passModel.letter.length ) ]
            } else {
                passInput.value += passModel.letter[ Math.floor( Math.random() * passModel.letter.length ) ].toLowerCase();
            }
            break;
        case 3:
            passInput.value += passModel.symbol[ Math.floor( Math.random() * passModel.symbol.length ) ]
            break;
    }
}

const randomPassFirstNumber = () => {
    let selectModel = Math.floor( Math.random() * 3 );
    let selectCase = Math.floor( Math.random() * 2 );
    if (selectModel == 0) {
        randomPassFirstNumber();
    }
    switch (selectModel) {
        case 1:
            passInput.value += passModel.numbers[ Math.floor( Math.random() * passModel.numbers.length ) ]
            break;
        case 2:
            if ( selectCase == 1 ) {
                passInput.value += passModel.letter[ Math.floor( Math.random() * passModel.letter.length ) ]
            } else {
                passInput.value += passModel.letter[ Math.floor( Math.random() * passModel.letter.length ) ].toLowerCase();
            }
            break;
    }
}

generateButton.onclick = () => {
    passInput.value = ''
    for ( let i = 0; i < lenPass; i++ ) {
        if (i == 0) {
            randomPassFirstNumber();
        } else {
            randomPass();
        }
    }
}