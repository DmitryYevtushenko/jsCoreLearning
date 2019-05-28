'use strict';

function camelize(str) {
  return str
  .split('-')
  .map(
    (word, index) => index === 0 ? word :
    word[0].toUpperCase() + word.slice(1)
  )
  .join('');
}



console.log(
  camelize("background-color"), //== 'backgroundColor';
  camelize("list-style-image"), //== 'listStyleImage';
  camelize("-webkit-transition") //== 'WebkitTransition';
);






// camelize("background-color");
// camelize("-webkit-transition");