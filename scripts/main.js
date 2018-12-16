// var admin, name;
// name = 'Василий';
// admin = name;
// alert (admin);

// var earth = 'Земля';
// var userName = 'Петя';
// alert ('message' / 0);
	
// function isIntager(num) {
// 	return (num ^ 0) == num;
// };

// alert (isIntager(num));

// alert( 'Первый кролик!' );
// alert( 'Второй кролик!' );
// alert( 'Третий кролик!' );

// var num = 5.5, num2 = ( num ^ 0 );
// if ( num == num2 ) {
// 	alert ( true )
// } else {
// 	alert ( false )
// };

// function isIntager(num) {
// 	return (num ^ 0) === num;
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