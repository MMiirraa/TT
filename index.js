// alert( 2 > 1 );
// alert(2 == 1);
// alert(2 != 1);

// let result = 5 > 4;
// alert(result);

// alert('2' > 1);
// alert('01' == 1);
// alert('2' > '12')

// let companyName = prompt('какое "Официальное" название JS?','');
// if(companyName == 'ECMAScript'){
//     alert('Верно')
// }else{
//     alert('Не знаете? ECMAScript!')
// }

// let value = prompt('Введите число: ', '')
// if(value > 0){
//     alert('1')
// }else if(value < 0){
//     alert('-1')
// }else{
//     alert('0')
// }

// let result;
// let a = 1;
// let b = 2;

// (a + b < 4) ? result ='Мало' : result ='Много';
// console.log(result)

// let sum = 0;
// while (true) {
//     let value = +prompt("input number", "");
//     if (!value) break;
//     sum += value;
// }
// alert('Сумма: ' + sum);

// out: for (let i = 0; i < 3; i++){
//     for(let j = 0; j < 3; j++){
//         let input = prompt(`Значение на координатах (${i}, ${j})`, '');
//         if (!input) break out;
//     }
// }
// alert('Готово')

// for (let i = 2; i <= 10; i++){
//     if( i % 2 == 0){
//     alert(i);
//     }
// }

// for (let i=0; i<3; i++){
//     alert(`number ${i}!`);
// }

// let i = 0;
// while(i<3){
// alert(`number ${i}!`);
// i++;
// }

// let number;
// do{
//     number = prompt('Введите число бльше 100.', 0)
// }while(number < 100 && number);

// function checkAge(age){
//     return (age > 18) || confirm('Родители разрешили?')
// }

// function min (a,b){
//     if(a<b){
//         return alert(`min(${a}, ${b}) == ${a}`)
//     } else if(a>b){
//         return alert(`min(${a}, ${b}) == ${b}`)
//     } else{
//         return alert(`min(${a}, ${b}) одинаковие`)
//     }
// }
// let a = prompt('введите число а', '')
// let b = prompt('введите число b', '')
// min(a,b);

// function pow(x,n){
//     let result = x;
//     for (i=1; i<n; i++){
//         result *= x;
//     }
//     return result;
// };
// let x = prompt('введите возводимое число в стеень х', '');
// let n = prompt('введите число на котоое возводите n', '');

// alert(pow(x,n));

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//----------------------------------------OBJECKT------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };
// alert( bag[fruit] );

// let user = {};
// user.name = 'John';
// user.surname = 'smith';
// user.name = 'Pete';
// delete user.name;

// function isEmpty(schedule){
//     for (key in schedule){
//         return false;
//     }
//     return true;
// }

// let schedule = {};
// alert( isEmpty(schedule) );
// schedule['8:30'] = 'get up';
// alert( isEmpty(schedule) )

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }

// let sum = 0;
// for (key in salaries){
//     sum += salaries[key]
// }

// alert(sum);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// function multiplyNumeric(menu){
//    for (let key in menu){
//        if (typeof menu[key] == 'number'){
//             // menu[key] *= 2;
//             menu[key] = menu[key]*2
//        }
//    }
// }
//   multiplyNumeric(menu);





// function readNumber() {
//     let x;
//     do{
//       x = prompt('Введите число', '')
//     }while(!isFinite(x));
//     if (x === '' || x === null){ return null };
//     return (+x);
// };
// alert(`Ваше число ${readNumber()}`);

// function random(min, max){
//     return min + Math.random() * (max - min);
// }
// alert( random( 4, 8));


// function ucFirst(str) {
//     if(!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// }; 
// // alert( ucFirst("вася") );
// console.log(ucFirst("гоша"))

// function checkSpam(str){
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx')
// };

// alert(checkSpam('buy ViAgRA now'))
// alert(checkSpam('free xxxxx'))
// alert(checkSpam("innocent rabbit"))

// function truncate(str, maxlength){
//     if( str.length > maxlength){
//         return str.slice(0, maxlength - 1) + '…';
//     } return str;
// }
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// function extractCurrencyValue(str){
//     return +str.slice(1)
// }
// alert( extractCurrencyValue('$120') === 120 );

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');

styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles);
styles.shift();
styles.unshift('Рэп', 'Рэги')
