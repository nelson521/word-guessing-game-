// The words 
var words = ['daria', 'gargoyles', 'doug', 'batman', 'xmen', 'arthur', 'spiderman', 'superman', 'ironman', 'rugrats', 'beetlejuice', 'ducktales', 'talespin', 'catdog', 'pokemon'];
// guesses that are okay
var okGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


document.onkeyup = function (event) {
  var pressed = event.key;
  document.getElementById("wins");
  var winSpan = document.getElementById("wins");
  winSpan.textContent = "0";
  var cWord = document.getElementById('currentWord');
  // current word loop 
for (var i =0; i < words[0].length;i++) {
  // document.getElementById("currentWord");
  // make the word random
  var word = Math.random()
  
  
  var node = document.createElement('span');
  var textNode = document.createTextNode('_');
  node.appendChild(textNode);
  cWord.appendChild(node);
}
// number of guesses 
var numGuess = document.getElementById('numOfGuess');
numGuess.textContent = '14';

}
  
