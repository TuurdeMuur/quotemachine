import './style.css';
import { devineLog } from './js/utility/helpers';
import data from './assets/data/quotes.json';
let quoteData = data.quotes;
let newQuotes= '';

devineLog('Hey, ik ben een JS file');
const arr = [1, 2, 3];

const ES6Stuff = () => devineLog('Ik kan ES6 stuff aan', ...arr);
ES6Stuff();

const init = () => {
  console.log(quoteData);
  const $button = document.querySelector('.div__button');
  $button.addEventListener('click', function(){
    const $getQuote = document.querySelector('.div__input').value;
    if ($getQuote !== '' || $getQuote !== null) {
      newQuotes = $getQuote;
      showNewQuotes();
    }
  });
  showQuotes();
};


const showQuotes = () => {
  const $ul = document.querySelector('.list__quote');
  //create li
  quoteData.forEach(quote => {
    const $li = document.createElement('li');
    $li.innerHTML += `${quote.quote}<span class="quote__text--author"> -${quote.author}</span>`;
    $li.classList.add('quote__text');
    $ul.appendChild($li);
  });
};

const showNewQuotes = () => {
  const $ul = document.querySelector('.list__quote');
  if (newQuotes !== '' || newQuotes !== null){
    const $li = document.createElement('li');
    $li.innerHTML += `${newQuotes}`;
    $li.classList.add('quote__text');
    $ul.appendChild($li);
  }
}

init();
