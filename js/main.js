// first homework

let int = 0;
int = prompt('Каким является число?')

if (int % 2 === 0) {
    console.log('Чётное число')
} else {
    console.log('Нечётное число')
}

// second homework

let userName = prompt('Введите свое имя').toLowerCase().trim();

if (userName[0] === 'b' && userName.length % 2 === 0) {
    console.log('Welcome')
} else {
    console.log('Sorry')
}
