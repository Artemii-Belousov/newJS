// function foo(){
//     console.log(arguments);
// }

// foo(1,3,4,5,6);

// Example 2
// function recursion(x){
//     if(x <= 0 || isNaN(x)) return 'Задайте целое число больше 0';

//     if(x === 1) return '1';

//     return recursion(x -1) + ' ' + x;
// }

// console.log(recursion(10))


// Example 3

// let number;
// let attempts;

// function restGame(){
//     attempts = 0;
//     number = Math.floor(Math.random() * 10);

//     console.log(number)
// }

// function tryGuessNumber(){
//     const userAnswer = +prompt(`Введите число от 0 до 100`);

//     if(userAnswer === -1) return alert('Game over');

//     if(isNaN(userAnswer)){
//         alert('Необходимо ввести целое число.');
//         tryGuessNumber();
//         return;
//     }

//     attempts++;
//     if(userAnswer > number){
//         alert('Попробуйте ввести число меньше!');
//     } else if(userAnswer < number){
//         alert('Попробуйте ввести число больше!')
//     } else{
//         alert(`Поздравляем! Вы угадали число! Колличество попыток: ${attempts}`);

//         if(!confirm('Хотите сыграть еще раз?')) return alert('Gane over!');

//     }
//     tryGuessNumber();
// }

// restGame();
// tryGuessNumber();


//Example 4

// function resalt() {
//     let a = +prompt("Введите число 1: ");
//     let b = +prompt("Введите число 2: ");

//     if (a > 0 && b > 0) {
//         res = a + b
//     }
//     if (a < 0 && b < 0) {
//         res = a * b;
//     }
//     if(a > 0 && b < 0 || a < 0 && b > 0){
//         res = a - b;
//     }

//     console.log(res);
// }
// resalt();

// Example 5

// let number = Number(prompt("Введите число до 15!"));

// switch (number) {
//     case 1: return console.log('1');
//     case 2:
//         return console.log('2');
//     case 3:
//         return console.log('3');
//     case 4:
//         return console.log('4');
//     case 5:
//         return console.log('5');
//     case 6:
//         return console.log('6');

//     default:
//         'Введите число в диапазоте от 1 до 15!'
// }

//Example 6

// let a = +prompt('введите число 1: ')
// let b = + prompt('Введите чило 2: ')
// function getSum(a, b){
//  let res;
//  return console.log(`Сумма чисел равна: ${res = a + b}`);

// }

// function mult(a, b){
// return console.log(`Произведение чисел равно: ${res = a * b}`);
// }

// getSum(a, b);
// mult(a, b);


//Example 7
// let arg1 = +prompt('Введите число 1: ');
// let arg2 = +prompt("Введите число 2: ");
// let operation = prompt("Введите операцию")



// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case "сумма":
//         case "+":
//             return console.log(getSum(arg1, arg2))
//         case "разность":
//         case "-":
//             return console.log(getdiff(arg1, arg2));
//         case "произведение":
//         case "*":
//             return console.log(getMult(arg1, arg2))

//     }

//     function getSum(a, b) {
//         let res;
//         return console.log(`Сумма чисел равна: ${res = a + b}`);
//     }

//     function getdiff(a, b) {
//         let res;
//         return console.log(`Разноть чисел равна: ${res = a - b}`);
//     }

//     function getMult(a, b) {
//         return console.log(`Произведение чисел равна: ${res = a * b}`)
//     }
// }

// mathOperation(arg1, arg2, operation);

// Example 8

// let val = +prompt('Задайте число: ');
// let pow = +prompt('Задайте степень: ');

function power(val, pow){
    if(val < 0 || !Number.isInteger(val)) return alert('Введите число');

    if(val === 1) return '1';
   
    return (val != 1) ? val * power(val - 1) : 1;
   
}
console.log(power(6, 3));


// function getRes(a){
//     if (a == 1 ) return a;

//     else return a * getRes(a - 1);
    
// }

// console.log(getRes(5))
