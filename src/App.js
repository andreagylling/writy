import React from 'react';
import './App.css';
import logo from './logo.svg'


function countVowels(input) {
  let char;
  let count = 0;
  const vowels = /[aeiou]/;
  for (char of input) {
    if (vowels.test(char)) {
      count += 1;
    }
  }
  document.querySelector('.vowels').innerHTML = count + ' vowel(s)';
  count = 0;
}


function countWords(input) {
  const words = input.split(' ');
  document.querySelector('.words').innerHTML = words.length + ' word(s)';
}

function countChars(input) {
  let chars = input.replace(/\s/g, '').split('');
  document.querySelector('.characters').innerHTML = chars.length + ' character(s)';
}

function startCounting() {
  let userInput = document.getElementById('input').value;
  countVowels(userInput);
  countChars(userInput);
  countWords(userInput);
}


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="header-info">Enter you text below and writy will count how many words, characters and vowels are in your text - just ask her to 'Count it!' below!</h3>
      </header>
      <form className="form">
        <textarea className="textarea" id="input" type="text" />
        <input className="submit-btn" type="button" value="Count it!" onClick={startCounting} />
      </form>
      <div className="results">
        <p className="vowels"></p>
        <p className="words"></p>
        <p className="characters"></p>
      </div>
    </div>
  );
}



