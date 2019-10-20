'use strict';


// function foo() {
//   /* error Use the global form of 'use strict'. */
//   return 'use strict';
// }

// foo();

// let admin, name;
// name = 'Василий';
// admin = name;
// alert (admin);

// var earth = 'Земля';
// var userName = 'Петя';
// alert ('message' / 0);

// function isIntager(num) {
// return (num ^ 0) == num;
// };

// alert (isIntager(num));

// alert( 'Первый кролик!' );
// alert( 'Второй кролик!' );
// alert( 'Третий кролик!' );

// const num = 5.5;
// const num2 = (num ^ 0);
// if (num === num2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// function isIntager(num) {
//  return (num ^ 0) === num;
// }
// alert ( isIntager(1.2) );

// var name = prompt('Введите Ваше имя', 'Имя');
// alert('Ваше ' + 'имя ' + name);
// var years = prompt('Сколько вам лет?', 100);
// alert('Вам ' + years + ' лет!')

// var age = prompt('Your age?', '');
// var message = (age < 0) ? 'Wrong age' :
// (age < 10) ? 'Hello baby!' :
// (age < 18) ? 'Hello!' :
// (age < 100) ? 'You are welkom' :
// 'Wrong age';
// alert(message);

// function isPositive(age) {
// (age > 0) ? alert ('Your age is ' + age) : alert ('Please input correct age');
// };
// alert ( isPositive(age) ); //Show the age of the user

/* Проверка возраста */
// if (age < 0) {
// message = 'Wrong age';
// } else if (age < 10) {
// message = 'Hello baby!';
// } else {
// message = 'Good by!';
// }
// alert(message)

/* Имя - проверка и вывод */
// var name = prompt('What is your name?', '');
// var checkName = (name != 'null') ? 'Your name is ' + name : 'Please input your name';
// alert (checkName);

// /* Официальное название JS - проверка и вывод */
// var jsOfficialName = prompt('What\'s the official name of Java Script?', '');
// var verifJsName = (jsOfficialName == 'ECMAScript') ?
// 'You are right!' : 'Don\'t know? It\'s ECMAScript';
// alert (verifJsName);

// /* Официальное название JS - проверка и вывод - v.2 */
// var jsOfficialName = prompt('Name of JS?', '');
// if (jsOfficialName == 'ECMAScript') {
// alert('You are right!')
// } else {
// alert('You dont know? ECMAScript')
// }

/* проверка знака числа */
// var number = prompt('Введите положительное или отрицательное число', '0');
// // var sign = +number;
// if (+number > 0) {
// 	alert (1)
// } else if (+number < 0) {
// 	alert (-1)
// } else {
// 	alert (0)
// }; //alert( '2' > 0 ); сравнивается как 2 > 0

/* проверка логина */
// var userName, password;
// userName = prompt('Enter login:', '');

// if (userName == null) {
// 	alert('Entrance canceled')
// } else if (userName !== 'admin') {
// 	alert('You can not enter')
// } else {
// 	password = prompt('Your password?')
// };

// if (password == null) {
// 	alert('Entrance canceled')
// } else if (password == 'Черный Властелин') {
// 	alert('You are welkom!');
// } else {
// 	alert('You can not enter')
// };

/* тренировка написания if через ? */
// var result = (a + b < 4) ? 'Not much' : 'Many';
// alert(result);

// /* тренировка написания if через ? v.2*/
// var message = (login == 'Вася') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' : '';

// /* условие if для проверки того факта, что переменная age находится между 14 и 90 включительно */
// var age = prompt('How old are you?', '');
// if (age >= 14 && age <= 90) {
// 	alert('Вы совершеннолетний')
// } else {
// 	alert('Вы или молод или уже слишком стар')
// };

/* условие if для проверки того факта, что age НЕ находится между 14 и 90 включительно */
// if (!(age >= 14 && age <= 90)) //вариант с !

// var age = prompt('How old are you?', '');
// if (age < 14 || age > 90) {
// 	alert('Вы или молод или уже слишком стар')
// } else {
// 	alert('Вам между 14 и 90 лет')
// }

// var i;

// for (i = 0; i < 3; i++) {
//   alert( i );
// }


// for (var i = 0; i < 5; i++)
// 	alert( i ); //0 - 4

// for (var i = 0; i < 5; ++i)
// 	alert( i ); //0-4

/* Выведите чётные числа */
// for (var n = 2; n <= 10; n++) {
// 	if (n % 2 == 0) continue;
// 	alert(n);
// }

/* Замените for на while */
// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }

// var i = 0;
// while (i < 3) {
// 	alert( "номер " + i + "!" );
// 	i++
// }

/* Повторять цикл, пока ввод неверен */
// do {
// 	var i = prompt('Введите число больше 20', '');
// }
// while (i <= 20 && i != null);

/* Вывести простые числа от 2 до 10 */
/* =========================================== */

// var num = prompt('Введите число', '0');
// switch(num) {
// 	case '0': alert('Вы ввели 0')
// 	break;
// 	case '1': alert('Вы ввели 1')
// 	break;
// 	case '2':
// 	case '3':
// 	case '4':
// 	alert('Вы ввели 2, 3 or 4')
// 	break;
// 	case 5: alert('Неизвестно')
// 	break;
// 	default: alert('Неизвестное значение: ' + num)
// }

/* Напишите "if", аналогичный "switch" */
// var browser = prompt('Enter your browser', '');
// if (browser == 'IE') {
// 	alert('О, да у вас IE!')
// } else if (browser == 'Chrome'
// 	|| browser == 'Firefox'
// 	|| browser == 'Safari'
// 	|| browser == 'Opera') {
// 	alert( 'Да, и эти браузеры мы поддерживаем' );
// } else {
// 	alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

// switch (browser) {
// 	case 'IE': alert('О, да у вас IE!');
// 	break;
// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera': alert( 'Да, и эти браузеры мы поддерживаем' );
// 	break;
// 	default: alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

/* Переписать if'ы в switch */
// var num = +prompt('enter number', '');
// switch (num) {
// 	case 0: alert(0);
// 	break;

// 	case 1: alert(1);
// 	break;

// 	case 2:
// 	case 3: alert('2,3');
// 	break;
// }

// function showMessage() {
// 	var message = 'Hello!';
// 	alert(message);
// }

// showMessage();
// alert(message); //выдаст ошибку

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// var age = prompt('Ваш возраст?');

// if (checkAge(age)) {
//   alert( 'Доступ разрешен' );
// } else {
//   alert( 'В доступе отказано' );
// }

// function doNothing() { /* пусто */ }

// alert( doNothing() ); // undefined

/* Перепишите функцию, используя оператор '?' или '||' */
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge2(age) {
// 	return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge3(age) {
// 	return (age > 18) || confirm('Родители разрешили?');
// }

/*Функция min*/
// function min(a, b) {
// 	return (a < b) ? a : b;
// }

// alert(min(-2, 1));
/*=======================Ex 5.1=====================*/
// var admin, name;
// name = 'Vasyl';
// admin = name;
// alert(admin);

/*=======================Ex 6.1=====================*/
// var planet = 'Earth';
// var userName = 'Petya';


/*=======================My Test Site //Firefox=====================*/
// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute ('src','images/firefox2.png');
//     } else {
//       myImage.setAttribute ('src','images/firefox-icon.png');
//     }
// }

// var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';


// function setUserName() {
//     var myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.innerHTML  = 'Mozilla is cool, ' + myName;
//   }

//   if(!localStorage.getItem('name')) {
//     setUserName();
//   } else {
//     var storedName = localStorage.getItem('name');
//     myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
//   }

//   myButton.onclick = function() {
//     setUserName();
//   }
/*=======================END - My Test Site //Firefox=====================*/

/*=======================Exercises=====================*/

// var button = document.querySelector('button');

// button.onclick = function() {
//   var name = prompt('Как вас зовут?');
//   alert('Привет, ' + name + ', рады тебя видеть!');
// };

// var dog = { name: 'Ramiro', breed: 'Deutch Ovcharka' };

// var btn = document.querySelector('button');
// var txt = document.querySelector('p');

// btn.addEventListener('click', updateBtn);

// function updateBtn() {
//   if (btn.textContent === 'Start machine') {
//     btn.textContent = 'Stop machine';
//     txt.textContent = 'The machine has started!';
//   } else {
//     btn.textContent = 'Start machine';
//     txt.textContent = 'The machine id stopped.';
//   }
// };


/*======Filtering greeting messages======*/
// var list = document.querySelector('.output ul');
// list.innerHTML = '';
// var greetings = ['Happy Birthday!',
//                  'Merry Christmas my love',
//                  'A happy Christmas to all the family',
//                  'You\'re all I want for Christmas',
//                  'Get well soon'];

// for (var i = 0; i < greetings.length; i++) {
//   var input = greetings[i];
//   // Your conditional test needs to go inside the parentheses
//   // in the line below, replacing what's currently there
//   if (greetings[i].indexOf('Christmas') !== -1) {
//     var listItem = document.createElement('li');
//     listItem.textContent = input;
//     list.appendChild(listItem);
//   }
// };
/*======END Filtering greeting messages======*/

/*======Fixing capitalization======*/
// var list = document.querySelector('.output ul');
// list.innerHTML = '';
// var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

// for (var i = 0; i < cities.length; i++) {
//   var input = cities[i];
//   // write your code just below here
//   var lowCase = input.toLowerCase();
//   var result = lowCase.replace(lowCase[0], lowCase[0].toUpperCase());
//   var listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// };
/*======END Fixing capitalization======*/

/*======Making new strings from old parts======*/

// var list = document.querySelector('.output ul');
// list.innerHTML = '';
// var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield',
//                 'HRKyr43d4d56d3hy;Kharkiv International Airport'];

// for (var i = 0; i < stations.length; i++) {
//   var input = stations[i];
//   // write your code just below here
//   var abbreviation = input.slice(0,3);
//   var numberOfSemicol = input.indexOf(';');
//   var text = input.slice(numberOfSemicol + 1);
//   var result = abbreviation + ': ' + text;

//   var listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }
/*======END Making new strings from old parts======*/

// var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// var random = ['kro', 555, ['chy', 'pa', 'ka']];
// random[2][0][1][2];

/*===Arrays===*/
/*=======================Ex 1=====================*/
// var random = [1, 2, 3, 4, 5, 6, 7, ['a', 'b', 'c']];

// for (var i = 0; i < random.length; i++) {
//     console.log(random[i]);
// };

/*=======================Ex 2=====================*/
// var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// var stArray = myData.split(',');

// stArray.length;
// stArray[stArray.length - 1];

// var myNewString = stArray.join(';'); //delimiter is different (various)

// var mySecondString = stArray.toString(); //delimiter is ',' only

/*==========Printing those products==========*/
// var list = document.querySelector('.output ul');
// var totalBox = document.querySelector('.output p');
// var total = 0;
// list.innerHTML = '';
// totalBox.textContent = '';

// //number 1 - do an array
// var products = ['Underpants:6.99',
//                 'Socks:5.99',
//                 'T-shirt:14.99',
//                 'Trousers:31.99',
//                 'Shoes:23.99'];

// for (var i = 0; i < products.length; i++) {
//   // number 2 - change the condition to array's length
//   // number 3
//   var productsSeparate = products[i].split(':');
//   var price = +productsSeparate[1];
//   // number 4
//   total += price;
//   // number 5
//   itemText = productsSeparate[0] + ' - ' + '$' + price;

//   var listItem = document.createElement('li');
//   listItem.textContent = itemText;
//   list.appendChild(listItem);
// }
// totalBox.textContent = 'Total: $' + total.toFixed(2);
/*======= END Printing those products=======*/

/*==========Top 5 searches==========*/
// var list = document.querySelector('.output ul');
// var searchInput = document.querySelector('.output input');
// var searchBtn = document.querySelector('.output button');
// list.innerHTML = '';
// var myHistory = [];

// searchBtn.onclick = function() {
//   // we will only allow a term to be entered if the search input isn't empty
//     if ((searchInput.value !== '')&&(searchInput.value !== myHistory[0])&&(searchInput.value !== myHistory[1])&&(searchInput.value !== myHistory[2])&&(searchInput.value !== myHistory[3])&&(searchInput.value !== myHistory[4])) {
//       // number 1
//       myHistory.unshift(searchInput.value);
//       // empty the list so that we don't display duplicate entries
//       // the display is regenerated every time a search term is entered.
//       list.innerHTML = '';

//       // loop through the array, and display all the search terms in the list
//       for (var i = 0; i < myHistory.length; i++) {
//         itemText = myHistory[i];
//         var listItem = document.createElement('li');
//         listItem.textContent = itemText;
//         list.appendChild(listItem);
//       }

//       // If the array length is 5 or more, remove the oldest search term
//       if (myHistory.length >= 5) {
//         // number 2
//         myHistory.pop();
//       }

//       // empty the search input and focus it, ready for the next term to be entered
//       searchInput.value = '';
//       searchInput.focus();
//     }

// }
/*==========END Top 5 searches==========*/

/*==========Silly story generator==========*/
// var customName = document.getElementById('customname');
// var randomize = document.querySelector('.randomize');
// var story = document.querySelector('.story');

// function randomValueFromArray(array){
//   return array[Math.floor(Math.random()*array.length)];
// }

// var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
// var insertX = ['Willy the Goblin',
//                 'Big Daddy',
//                 'Father Christmas'];
// var insertY = ['the soup kitchen',
//                 'Disneyland',
//                 'the White House'];
// var insertZ = ['spontaneously combusted',
//                 'melted into a puddle on the sidewalk',
//                 'turned into a slug and crawled away'];

// //EVENT LISTENER AND PARTIAL FUNCTION DEFINITION:
// randomize.addEventListener('click', result);

// function result() {
//   var newStory = storyText;
//   var xItem = randomValueFromArray(insertX);
//   var yItem = randomValueFromArray(insertY);
//   var zItem = randomValueFromArray(insertZ);

//   newStory = newStory.replace(':insertx:', xItem);
//   newStory = newStory.replace(':insertx:', xItem);
//   newStory = newStory.replace(':inserty:', yItem);
//   newStory = newStory.replace(':insertz:', zItem);

//   if(customName.value !== '') {
//     var name = customName.value;
//     newStory = newStory.replace('Bob', name);
//   }

//   if(document.getElementById("uk").checked) {
//     var weight = Math.round(21,4286) + ' stone';
//     var temperature =  Math.round(34,4444) + ' centigrade';
//     newStory = newStory.replace('300 pounds', weight);
//     newStory = newStory.replace('94 fahrenheit', temperature);
//   }

//   story.textContent = newStory;
//   story.style.visibility = 'visible';
// }
/*==========END Silly story generator==========*/

/*==========Silly story generator Rus==========*/
// var customName = document.getElementById('customname');
// var randomize = document.querySelector('.randomize');
// var story = document.querySelector('.story');

// function randomValueFromArray(array){
//   return array[Math.floor(Math.random()*array.length)];
// }

// var storyText = 'Было холодно, 94 градуса по Фаренгейту! И так, :insertx: гулял по округе... Когда он подошел к :inserty:, он остановился и смотрел в ужасе несколько мгновений, и вдруг :insertz:. Боб все это видел, но не удивился - :insertx: весил 300 фунтов, и это был жаркий день.';

// var insertX = ['Чудной зверек',
//                 'Вредный хорек',
//                 'Голодный хищник'];
// var insertY = ['ресторану суши',
//                 'памятнику Вороне',
//                 'Порошенко'];
// var insertZ = ['спонтанно загорелся',
//                 'растаял в луже на тротуаре',
//                 'превратился в слизняка и уполз'];

// //EVENT LISTENER AND PARTIAL FUNCTION DEFINITION:
// randomize.addEventListener('click', result);

// function result() {
//   var newStory = storyText;
//   var xItem = randomValueFromArray(insertX);
//   var yItem = randomValueFromArray(insertY);
//   var zItem = randomValueFromArray(insertZ);

//   newStory = newStory.replace(':insertx:', xItem);
//   newStory = newStory.replace(':insertx:', xItem);
//   newStory = newStory.replace(':inserty:', yItem);
//   newStory = newStory.replace(':insertz:', zItem);

//   if(customName.value !== '') {
//     var name = customName.value;
//     newStory = newStory.replace('Боб', name);
//   }

//   if(document.getElementById("uk").checked) {
//     var weight = Math.round(136,078) + ' килограмм';
//     var temperature =  Math.round(34,4444) + ' градуса Цельсия';
//     newStory = newStory.replace('300 фунтов', weight);
//     newStory = newStory.replace('94 градуса по Фаренгейту', temperature);
//   }

//   story.textContent = newStory;
//   story.style.visibility = 'visible';
// }
/*==========END Silly story generator==========*/

/*==========Exercise children's helping==========*/
// var help = false;
// var fee = 5;

// if (help === true) {
//     var result = fee + 5;
// };
// console.log(result);
/*==========END Exercise==========*/

/*==========Exercise children's helping v.2==========*/
// var help = false;
// var fee = 5;

// if (help) {
//     var result = fee + 5;
// };
// console.log(result);
/*==========END Exercise==========*/

/*==========Exercise==========*/
// var select = document.querySelector('select');
// var para = document.querySelector('p');

// select.addEventListener('change', setWeather);

// function setWeather() {
//     var choice = select.value;

//     if (choice === 'sunny') {
//         if (temperature < 86) {
//             para.textContent = 'Сейчас ' + temperature + ' градусов по фаренгейту — хорошо и солнечно. Идите на пляж, или в парк, и купите мороженое.';
//         } else if (temperature >= 86) {
//             para.textContent = 'Сейчас ' + temperature + ' градусов по фаренгейту — Жара! Если вы хотите выйти на улицу, обязательно используйте солнцезащитный крем.';
//         }
//     } else if (choice === 'rainy') {
//         para.textContent = 'Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.'
//     } else if (choice === 'snowing') {
//         para.textContent = 'Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.'
//     } else if (choice === 'overcast') {
//         para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.'
//     } else {
//         para.textContent = ''
//     }
// };
/*==========END Exercise==========*/

/*==========Exercise==========*/
// module.exports = function (hours, minutes) {
//   if ((hours < 0 || hours > 23) || (minutes < 0 || minutes > 59)) {
//     return false
//   } else {
//     return true
//   }
// }
/*==========END Exercise==========*/

/*==========Exercise==========*/
// var select = document.querySelector('select');
// var para = document.querySelector('p');

// select.addEventListener('change', setWeather);

// function setWeather() {
//     var choice = select.value;

//     switch (choice) {
//       case 'sunny':
//         para.textContent = 'Сегодня хорошо и солнечно. Наденьте шорты! Идите на пляж или в парк, и купите мороженое.';
//         break;
//       case 'rainy':
//         para.textContent = 'На улице дождь. Возьмите плащ и зонт, и не гуляйте слишком долго';
//         break;
//       case 'snowing':
//         para.textContent = 'Идет снег - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
//         break;
//       case 'overcast':
//         para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
//         break;
//       default:
//         para.textContent = '';
//     }
// };
/*==========END Exercise==========*/

/*==========Тернарный оператор==========*/
// var select = document.querySelector('select');
// var html = document.querySelector('html');
// document.body.style.padding = '10px';

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select.onchange = function() {
//   ( select.value === 'black' ) ? update('black','white') : update('white','black');
// }
/*==========END Тернарный оператор==========*/

// выводит все простые числа из интервала от 2 до 10

// nextNum:
// for (i = 1; i <= 10; i++) {
//   for (n = 2; n < i; n++) {
//     if (i % n == 0) {
//       continue nextNum;
//     }
//   }
//   console.log(i);
// }


// The loop below uses continue to output only odd values

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue
//   }
//   alert (i);
// }
// "" + 1 + 0 //'10' +
// "" - 1 + 0 //-1 +
// true + false //1 +
// 6 / "3" //2 +
// "2" * "3" //6
// 4 + 5 + "px" //'45px' -(9px)
// "$" + 4 + 5 //'$45' +
// "4" - 2 //2 +
// "4px" - 2 //2 -(NaN)
// 7 / 0 //NaN -(Infinity)
// "  -9\n" + 5 //'  -9\n5' +
// "  -9\n" - 5 //-14 +
// 5 && 2 //2 +
// 2 && 5 //5 +
// 5 || 0 //5 +
// 0 || 5 //5 +
// null + 1 //1 +
// undefined + 1 //1 -(NaN)
// null == "\n0\n" //true -(false)
// +null == +"\n0\n" //true +
// for (i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     num = 'foobar'
//   } else if (i % 3 == 0) {
//     num = 'foo'
//   } else if (i % 5 == 0) {
//     num = 'bar'
//   } else {
//     num = i
//   };
//   alert(num);
// }


// "" + 1 + 0 // '10'
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // '45px' > '9px'
// "$" + 4 + 5 // '$45'
// "4" - 2 // 2
// "4px" - 2 // NaN
// 7 / 0 // Infinity
// "  -9  " + 5 // '  -9  5'
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN


// При помощи цикла for выведите чётные числа от 2 до 10

// for (i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert(i)
//   }
// }

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }

// var i = 0;
// while (i < 3) {
//   alert( "номер " + i + "!" );
//   i++;
// }

// Повторять цикл, пока ввод неверен

// var num = +prompt('Enter number grater than 100', '');

// while (num <= 100) {
//   if (num == 0) {
//     break
//   } else {
//     num = +prompt('Number you entered less than 100, enter another one', '');
//   }
// }


// var num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num != null);


// Создайте код, который выводит все простые числа из интервала от 2 до 10
// P.S. Код также должен легко модифицироваться для любых других интервалов.

// loop:
// for (let n = 2; n <= 10; n++) {
//   for (let i = 2; i < n; i++) {
//     if ((n % i) == 0) {
//       continue loop;
//     }
//   }
//   console.log (n);
// }

//Exercise
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// if (browser === 'Edge') {
//   alert( "You've got the Edge!" );
// } else if (browser === 'Chrome' 
//         || browser === 'Firefox' 
//         || browser === 'Safari' 
//         || browser === 'Opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// };


// Exercise 2:
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }


// switch (a) {
//   case 0:
//     alert(0);
//     break;

//   case 1:
//     alert(1);
//     break;

//   case 2:
//   case 3:
//     alert('2,3');
//     break;
// }


/* === functions === */
//rewrite the function:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }

// //using ? operator:
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Do you have yuor parents permission to access this page?');
// };

// //using || operator
// function checkAge(age) {
//   return (age > 18) || confirm('Do you have yuor parents permission to access this page?');
// };


/* === Function min(a, b) === */
//Write a function min(a,b) which returns the least of two numbers a and b.

// function getMin(a, b) {
//   return (a < b) ? a : b;
// }


//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// *In this task the function should support only natural values of n: integers up from 1

//Power -5 is not supported, use an integer greater than 0
// let num, power;

// do {
//   num = prompt('Enter a number', '1');
//   if (num === null) break;
// }
// while (!isNum(+num));

// do {
//   power = prompt('Enter a power (natural number up from 0)', '1');
//   if (power === null) break;
// }
// while (!isNum(+power) || (power <= 0));

// if (num && power) {
//   alert(`${num} in power ${power} is ${getPow(num, power)}`);
// }


// function isNum(val) {
//   return Number(val) === val;
// };

// function getPow(a, n) {
//   let pow = a;
//   for (let i = 1; i <= n; i++) {
//     pow *= a;
//   }
//   return pow;
// };


// Replace Function Expressions with arrow functions in the code
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

//* decision *
// ask(
// "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );


// const name = 'Samsung Galaxy';
// const query = 'sAms';

// function has(str, part) {
//   str = str.toUpperCase();
//   part = part.toUpperCase();

//   return str.includes(part);
// }


// //=========================

// const word = 'samsung is gnusmas';

// function up3FirstAndLast(str) {
//   return 
// }

// up3FirstAndLast(word) === 'SAMsung is gnusMAS'


// startsWith – true/false если строка начинается с подстроки
// endsWith – true/false если строка заканчивается подстрокой


/* === Ex: Uppercast the first character === */
// function firstLetterToUpper (str) {
//   let result = str.trimStart();
//   if(!result) return '';

//   const toUpper = result[0].toUpperCase();
//   result = toUpper + result.slice(1);
//   return result;
// }


/* === Ex: Check for spam === */
// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
// The function must be case-insensitive
// function checkSpam(str) {
//   let result = str.toUpperCase();
//   return (result.includes('VIAGRA') 
//         || result.includes('XXX'));
// }


/* === Ex: Truncate the text === */
// Create a function truncate(str, maxlength) that checks the length of the str and, 
// if it exceeds maxlength – replaces the end of str with the ellipsis character "…", 
// to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string.
// function truncate(str, maxLength) {
//   let result = str;

//   if (result.length < maxLength) {
//     return result;
//   }
//   result = str.slice(0, maxLength - 1) + "\u2026";
//   return result;
// }

//v.2
// function truncate(str, maxLength) {
//   return (str.length < maxLength) ? str :
//                                   str.slice(0, maxLength - 1) + "\u2026";
// }


/* === Ex: Extract the money === */
// function extractCurrencyValue(str) {
//   //использование регулярного выражения (решение нашел в интернете)
//   let currency = parseInt(str.replace(/\D+/g,""));
//   return currency;
// }

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// var admin, name;
// name = 'Василий';
// admin = name;
// alert (admin);

// var earth = 'Земля';
// var userName = 'Петя';
// alert ('message' / 0);

// function isIntager(num) {
// return (num ^ 0) == num;
// };

// alert (isIntager(num));

// alert( 'Первый кролик!' );
// alert( 'Второй кролик!' );
// alert( 'Третий кролик!' );

// var num = 5.5, num2 = ( num ^ 0 );
// if ( num == num2 ) {
// alert ( true )
// } else {
// alert ( false )
// };

// function isIntager(num) {
// return (num ^ 0) === num;
// }
// alert ( isIntager(1.2) );

// var name = prompt('Введите Ваше имя', 'Имя');
// alert('Ваше ' + 'имя ' + name);
// var years = prompt('Сколько вам лет?', 100);
// alert('Вам ' + years + ' лет!')

// var age = prompt('Your age?', '');
// var message = (age < 0) ? 'Wrong age' :
// (age < 10) ? 'Hello baby!' :
// (age < 18) ? 'Hello!' : 
// (age < 100) ? 'You are welkom' : 
// 'Wrong age';
// alert(message);

// function isPositive(age) {
// 	(age > 0) ? alert ('Your age is ' + age) : alert ('Please input correct age');
// };
// alert ( isPositive(age) ); //Show the age of the user

/* Проверка возраста */
// if (age < 0) {
// 	message = 'Wrong age';
// } else if (age < 10) {
// 	message = 'Hello baby!';
// } else {
// 	message = 'Good by!';
// }
// alert(message)

/* Имя - проверка и вывод */
// var name = prompt('What is your name?', '');
// var checkName = (name != 'null') ? 'Your name is ' + name : 'Please input your name';
// alert (checkName);

// /* Официальное название JS - проверка и вывод */
// var jsOfficialName = prompt('What\'s the official name of Java Script?', '');
// var verifJsName = (jsOfficialName == 'ECMAScript') ? 'You are right!' : 'Don\'t know? It\'s ECMAScript';
// alert (verifJsName);

// /* Официальное название JS - проверка и вывод - v.2 */
// var jsOfficialName = prompt('Name of JS?', '');
// if (jsOfficialName == 'ECMAScript') {
// 	alert('You are right!')
// } else {
// 	alert('You dont know? ECMAScript')
// }

/* проверка знака числа */
// var number = prompt('Введите положительное или отрицательное число', '0');
// // var sign = +number;
// if (+number > 0) {
// 	alert (1)
// } else if (+number < 0) {
// 	alert (-1)
// } else {
// 	alert (0)
// }; //alert( '2' > 0 ); сравнивается как 2 > 0

/* проверка логина */
// var userName, password;
// userName = prompt('Enter login:', '');

// if (userName == null) {
// 	alert('Entrance canceled')
// } else if (userName !== 'admin') {
// 	alert('You can not enter')
// } else {
// 	password = prompt('Your password?')
// };

// if (password == null) {
// 	alert('Entrance canceled')
// } else if (password == 'Черный Властелин') {
// 	alert('You are welkom!');
// } else {
// 	alert('You can not enter')
// };

/* тренировка написания if через ? */
// var result = (a + b < 4) ? 'Not much' : 'Many';
// alert(result);
	
// /* тренировка написания if через ? v.2*/
// var message = (login == 'Вася') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' : '';

// /* условие if для проверки того факта, что переменная age находится между 14 и 90 включительно */
// var age = prompt('How old are you?', '');
// if (age >= 14 && age <= 90) {
// 	alert('Вы совершеннолетний')
// } else {
// 	alert('Вы или молод или уже слишком стар')
// };

/* условие if для проверки того факта, что age НЕ находится между 14 и 90 включительно */
// if (!(age >= 14 && age <= 90)) //вариант с !

// var age = prompt('How old are you?', '');
// if (age < 14 || age > 90) {
// 	alert('Вы или молод или уже слишком стар')
// } else {
// 	alert('Вам между 14 и 90 лет')
// }

// var i;

// for (i = 0; i < 3; i++) {
//   alert( i );
// }


// for (var i = 0; i < 5; i++)
// 	alert( i ); //0 - 4

// for (var i = 0; i < 5; ++i)
// 	alert( i ); //0-4

/* Выведите чётные числа */
// for (var n = 2; n <= 10; n++) {
// 	if (n % 2 == 0) continue;
// 	alert(n);
// }

/* Замените for на while */
// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }

// var i = 0;
// while (i < 3) {
// 	alert( "номер " + i + "!" );
// 	i++
// }

/* Повторять цикл, пока ввод неверен */
// do {
// 	var i = prompt('Введите число больше 20', '');
// }
// while (i <= 20 && i != null);

/* Вывести простые числа от 2 до 10 */
/*===========================================*/

// var num = prompt('Введите число', '0');
// switch(num) {
// 	case '0': alert('Вы ввели 0')
// 	break;
// 	case '1': alert('Вы ввели 1')
// 	break;
// 	case '2':
// 	case '3':
// 	case '4':
// 	alert('Вы ввели 2, 3 or 4')
// 	break;
// 	case 5: alert('Неизвестно')
// 	break;
// 	default: alert('Неизвестное значение: ' + num)
// }

/*Напишите "if", аналогичный "switch"*/
// var browser = prompt('Enter your browser', '');
// if (browser == 'IE') {
// 	alert('О, да у вас IE!')
// } else if (browser == 'Chrome' 
// 	|| browser == 'Firefox' 
// 	|| browser == 'Safari' 
// 	|| browser == 'Opera') {
// 	alert( 'Да, и эти браузеры мы поддерживаем' );
// } else {
// 	alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

// switch (browser) {
// 	case 'IE': alert('О, да у вас IE!');
// 	break;
// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera': alert( 'Да, и эти браузеры мы поддерживаем' );
// 	break;
// 	default: alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

/*Переписать if'ы в switch*/
// var num = +prompt('enter number', '');
// switch (num) {
// 	case 0: alert(0);
// 	break;

// 	case 1: alert(1);
// 	break;

// 	case 2:
// 	case 3: alert('2,3');
// 	break;
// }

// function showMessage() {
// 	var message = 'Hello!';
// 	alert(message);
// }

// showMessage();
// alert(message); //выдаст ошибку

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// var age = prompt('Ваш возраст?');

// if (checkAge(age)) {
//   alert( 'Доступ разрешен' );
// } else {
//   alert( 'В доступе отказано' );
// }

// function doNothing() { /* пусто */ }

// alert( doNothing() ); // undefined

/*Перепишите функцию, используя оператор '?' или '||'*/
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge2(age) {
// 	return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge3(age) {
// 	return (age > 18) || confirm('Родители разрешили?');
// }

/*Функция min*/
// function min(a, b) {
// 	return (a < b) ? a : b;
// }

// alert(min(-2, 1));
/*=======================Ex 5.1=====================*/
// var admin, name;
// name = 'Vasyl';
// admin = name;
// alert(admin);

/*=======================Ex 6.1=====================*/
// var planet = 'Earth';
// var userName = 'Petya';


/*=======================My Test Site //Firefox=====================*/
// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute ('src','images/firefox2.png');
//     } else {
//       myImage.setAttribute ('src','images/firefox-icon.png');
//     }
// }

// var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';


// function setUserName() {
//     var myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.innerHTML  = 'Mozilla is cool, ' + myName;
//   }

//   if(!localStorage.getItem('name')) {
//     setUserName();
//   } else {
//     var storedName = localStorage.getItem('name');
//     myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
//   }

//   myButton.onclick = function() {
//     setUserName();
//   }
  /*=======================END - My Test Site //Firefox=====================*/

  /*=======================Exercises=====================*/

// var button = document.querySelector('button');

// button.onclick = function() {
//   var name = prompt('Как вас зовут?');
//   alert('Привет, ' + name + ', рады тебя видеть!');
// };

// var dog = { name: 'Ramiro', breed: 'Deutch Ovcharka' };

// var btn = document.querySelector('button');
// var txt = document.querySelector('p');

// btn.addEventListener('click', updateBtn);

// function updateBtn() {
//   if (btn.textContent === 'Start machine') {
//     btn.textContent = 'Stop machine';
//     txt.textContent = 'The machine has started!';
//   } else {
//     btn.textContent = 'Start machine';
//     txt.textContent = 'The machine id stopped.';
//   }
// };


/*======Filtering greeting messages======*/
// var list = document.querySelector('.output ul');
// list.innerHTML = '';
// var greetings = ['Happy Birthday!',
//                  'Merry Christmas my love',
//                  'A happy Christmas to all the family',
//                  'You\'re all I want for Christmas',
//                  'Get well soon'];

// for (var i = 0; i < greetings.length; i++) {
//   var input = greetings[i];
//   // Your conditional test needs to go inside the parentheses
//   // in the line below, replacing what's currently there
//   if (greetings[i].indexOf('Christmas') !== -1) {
//     var listItem = document.createElement('li');
//     listItem.textContent = input;
//     list.appendChild(listItem);
//   }
// };
/*======END Filtering greeting messages======*/

/*======Fixing capitalization======*/
// var list = document.querySelector('.output ul');
// list.innerHTML = '';
// var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

// for (var i = 0; i < cities.length; i++) {
//   var input = cities[i];
//   // write your code just below here
//   var lowCase = input.toLowerCase();
//   var result = lowCase.replace(lowCase[0], lowCase[0].toUpperCase());
//   var listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// };
/*======END Fixing capitalization======*/

/*======Making new strings from old parts======*/

// var list = document.querySelector('.output ul');
// list.innerHTML = '';
// var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield',
//                 'HRKyr43d4d56d3hy;Kharkiv International Airport'];

// for (var i = 0; i < stations.length; i++) {
//   var input = stations[i];
//   // write your code just below here
//   var abbreviation = input.slice(0,3);
//   var numberOfSemicol = input.indexOf(';');
//   var text = input.slice(numberOfSemicol + 1);
//   var result = abbreviation + ': ' + text;

//   var listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }
/*======END Making new strings from old parts======*/

// var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// var random = ['kro', 555, ['chy', 'pa', 'ka']];
// random[2][0][1][2];

/*===Arrays===*/
/*=======================Ex 1=====================*/
// var random = [1, 2, 3, 4, 5, 6, 7, ['a', 'b', 'c']];

// for (var i = 0; i < random.length; i++) {
//     console.log(random[i]);
// };

/*=======================Ex 2=====================*/
// var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// var stArray = myData.split(',');

// stArray.length;
// stArray[stArray.length - 1];

// var myNewString = stArray.join(';'); //delimiter is different (various)

// var mySecondString = stArray.toString(); //delimiter is ',' only

/*==========Printing those products==========*/
// var list = document.querySelector('.output ul');
// var totalBox = document.querySelector('.output p');
// var total = 0;
// list.innerHTML = '';
// totalBox.textContent = '';

// //number 1 - do an array
// var products = ['Underpants:6.99',
//                 'Socks:5.99',
//                 'T-shirt:14.99',
//                 'Trousers:31.99',
//                 'Shoes:23.99'];

// for (var i = 0; i < products.length; i++) {
//   // number 2 - change the condition to array's length
//   // number 3
//   var productsSeparate = products[i].split(':');
//   var price = +productsSeparate[1];
//   // number 4
//   total += price;
//   // number 5
//   itemText = productsSeparate[0] + ' - ' + '$' + price;
  
//   var listItem = document.createElement('li');
//   listItem.textContent = itemText;
//   list.appendChild(listItem);
// }
// totalBox.textContent = 'Total: $' + total.toFixed(2);
/*======= END Printing those products=======*/

/*==========Top 5 searches==========*/
// var list = document.querySelector('.output ul');
// var searchInput = document.querySelector('.output input');
// var searchBtn = document.querySelector('.output button');
// list.innerHTML = '';
// var myHistory = [];

// searchBtn.onclick = function() {
//   // we will only allow a term to be entered if the search input isn't empty
//     if ((searchInput.value !== '')&&(searchInput.value !== myHistory[0])&&(searchInput.value !== myHistory[1])&&(searchInput.value !== myHistory[2])&&(searchInput.value !== myHistory[3])&&(searchInput.value !== myHistory[4])) {
//       // number 1
//       myHistory.unshift(searchInput.value);
//       // empty the list so that we don't display duplicate entries
//       // the display is regenerated every time a search term is entered.
//       list.innerHTML = '';

//       // loop through the array, and display all the search terms in the list
//       for (var i = 0; i < myHistory.length; i++) {
//         itemText = myHistory[i];
//         var listItem = document.createElement('li');
//         listItem.textContent = itemText;
//         list.appendChild(listItem);
//       }

//       // If the array length is 5 or more, remove the oldest search term
//       if (myHistory.length >= 5) {
//         // number 2
//         myHistory.pop();
//       }

//       // empty the search input and focus it, ready for the next term to be entered
//       searchInput.value = '';
//       searchInput.focus();
//     }
  
// }
/*==========END Top 5 searches==========*/

/*==========Silly story generator==========*/
// var customName = document.getElementById('customname');
// var randomize = document.querySelector('.randomize');
// var story = document.querySelector('.story');

// function randomValueFromArray(array){
//   return array[Math.floor(Math.random()*array.length)];
// }

// var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
// var insertX = ['Willy the Goblin',
//                 'Big Daddy',
//                 'Father Christmas'];
// var insertY = ['the soup kitchen',
//                 'Disneyland',
//                 'the White House'];
// var insertZ = ['spontaneously combusted',
//                 'melted into a puddle on the sidewalk',
//                 'turned into a slug and crawled away'];

// //EVENT LISTENER AND PARTIAL FUNCTION DEFINITION:
// randomize.addEventListener('click', result);

// function result() {
//   var newStory = storyText;
//   var xItem = randomValueFromArray(insertX);
//   var yItem = randomValueFromArray(insertY);
//   var zItem = randomValueFromArray(insertZ);
  
//   newStory = newStory.replace(':insertx:', xItem);
//   newStory = newStory.replace(':insertx:', xItem);
//   newStory = newStory.replace(':inserty:', yItem);
//   newStory = newStory.replace(':insertz:', zItem);

//   if(customName.value !== '') {
//     var name = customName.value;
//     newStory = newStory.replace('Bob', name);
//   }

//   if(document.getElementById("uk").checked) {
//     var weight = Math.round(21,4286) + ' stone';
//     var temperature =  Math.round(34,4444) + ' centigrade';
//     newStory = newStory.replace('300 pounds', weight);
//     newStory = newStory.replace('94 fahrenheit', temperature);
//   }

//   story.textContent = newStory;
//   story.style.visibility = 'visible';
// }
/* ==========END Silly story generator========== */

/* ==========Silly story generator Rus========== */
// var customName = document.getElementById('customname');
// var randomize = document.querySelector('.randomize');
// var story = document.querySelector('.story');

// function randomValueFromArray(array){
//   return array[Math.floor(Math.random()*array.length)];
// }

// var storyText = 'Было холодно, 94 градуса по Фаренгейту! И так, :insertx: гулял по округе... Когда он подошел к :inserty:, он остановился и смотрел в ужасе несколько мгновений, и вдруг :insertz:. Боб все это видел, но не удивился - :insertx: весил 300 фунтов, и это был жаркий день.';

// var insertX = ['Чудной зверек',
//                 'Вредный хорек',
//                 'Голодный хищник'];
// var insertY = ['ресторану суши',
//                 'памятнику Вороне',
//                 'Порошенко'];
// var insertZ = ['спонтанно загорелся',
//                 'растаял в луже на тротуаре',
//                 'превратился в слизняка и уполз'];

// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION:
// randomize.addEventListener('click', result);

// function result() {
//   var newStory = storyText;
//   var xItem = randomValueFromArray(insertX);
//   var yItem = randomValueFromArray(insertY);
//   var zItem = randomValueFromArray(insertZ);

//   newStory = newStory.replace(':insertx:', xItem);
//   newStory = newStory.replace(':insertx:', xItem);
//   newStory = newStory.replace(':inserty:', yItem);
//   newStory = newStory.replace(':insertz:', zItem);

//   if(customName.value !== '') {
//     var name = customName.value;
//     newStory = newStory.replace('Боб', name);
//   }

//   if(document.getElementById("uk").checked) {
//     var weight = Math.round(136.078) + ' килограмм';
//     var temperature =  Math.round(34.4444) + ' градуса Цельсия';
//     newStory = newStory.replace('300 фунтов', weight);
//     newStory = newStory.replace('94 градуса по Фаренгейту', temperature);
//   }

//   story.textContent = newStory;
//   story.style.visibility = 'visible';
// }
/* ==========END Silly story generator========== */

// var animal = {
//   jumps: null
// };
// var rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal;

// alert(rabbit.jumps); // ? (1)

// delete rabbit.jumps;

// alert(rabbit.jumps); // ? (2)

// delete animal.jumps;

// alert(rabbit.jumps); // ? (3)

/* ========== */

// const div = {
//   className: ' open  menu    open   ',
// };

// function addClass(element, word) {
//   const classes = element.className.split(' ')
//     .filter(cls => cls.length > 0)
//   ;

//   if (classes.includes(word)) {
//     return;
//   }

//   classes.push(word);

//   element.className = classes.join(' ');
// }

// function unique(arr) {
//   let result = [];

//   nextInput:
//     for (let i = 0; i < arr.length; i++) {
//       let str = arr[i]; // для каждого элемента
//       for (let j = 0; j < result.length; j++) { // ищем, был ли он уже?
//         if (result[j] == str) continue nextInput; // если да, то следующий
//       }
//       result.push(str);
//     }

//   return result;
// }

// addClass(div, 'new');
// console.log(div.className); // 'menu open new'

// addClass(div, 'open');
// console.log(div.className); // 'menu open new'

// addClass(div, 'me');
// console.log(div.className); // 'menu open new me'

// unique(div.className);
// console.log(div.className);

/* ========== */

// const wasBornAfter1700 = function(person) {
//   return person.born > 1700;
// };

// console.log(
//   people
//     .filter(wasBornAfter1700)
//     // 1712 Misha Hrynko
// );


// [].__proto__.reduce = function(callback, currentValue) {
//   // this == arr

//   for (let i = 0; i < this.length; i++) {
//     // currentValue1 = callback(currentValue, this[i], i, this);
//     // currentValue2 = callback(currentValue1, this[i], i, this);
//     // currentValue3 = callback(currentValue2, this[i], i, this);
//     // currentValue = callback(currentValue3, this[i], i, this);
//     currentValue = callback(currentValue, this[i], i, this);
//   }
  
//   return currentValue;
// };




// const people = [
//   {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
//   {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
//   {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
//   {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
//   {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
//   {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
//   {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
//   {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
//   {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
//   {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
//   {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
//   {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
//   {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
//   {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
//   {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
//   {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//   {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
//   {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
//   {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
//   {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
//   {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
//   {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
//   {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
//   {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
//   {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
//   {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//   {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
//   {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
//   {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
//   {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
//   {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
//   {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
//   {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
//   {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
//   {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
//   {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//   {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
//   {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
//   {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
// ];


// const createBornAfterFilter = function() {
//   return people.born > 100;
// };

// const wasBornAfter1800 = createBornAfterFilter(1800);

// const wasBornAfter1700 = function(person) {
//   return person.born > 1700;
// };

// console.log(
//   people
//     .filter(wasBornAfter1800)
//     .map(person => person.born)
// );



/*
 * Возвращает средний возраст мужчин в массиве
 * Если передан `century` то только живших в указанном столетии
 * беря их год смерти, деля его на 100 и округляя: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */

// const people = [
//   {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
//   {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
//   {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
//   {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
//   {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
//   {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
//   {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
//   {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
//   {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
//   {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
//   {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
//   {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
//   {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
//   {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
//   {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
//   {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//   {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
//   {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
//   {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
//   {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
//   {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
//   {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
//   {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
//   {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
//   {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
//   {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//   {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
//   {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
//   {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
//   {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
//   {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
//   {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
//   {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
//   {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
//   {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
//   {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//   {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
//   {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
//   {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
// ];

// function calculateMenAverageAge(people, century) {
//   let averageAge;
//   let age;


//   let arrAgeOfPerson = people
//   .filter(person => person.sex === 'm')
//   .map( person => +person.died - +person.born );

//   // for (let age of arrAgeOfPerson) {
//   //   age += arrAgeOfPerson;
//   //   averageAge = arrAgeOfPerson / arrAgeOfPerson.lenght; //нету индекса в переборе for (?7662)
//   // }

//   // for (let i = 0; i < arrAgeOfPerson.length; i++) {
//   //   age += arrAgeOfPerson[i];
//   //   console.log(age);
//   // }

//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   age = reducer() //

//   averageAge = age / arrAgeOfPerson.lenght;
  
  
//   return averageAge;
// }


// console.log(
//   calculateMenAverageAge(people)
// );
// console.table(
//   calculateMenAverageAge(people)
// );


