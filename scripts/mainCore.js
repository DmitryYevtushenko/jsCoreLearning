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

var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather()
