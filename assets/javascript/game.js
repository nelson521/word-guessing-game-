var gameArr = ['daria', 'gargoyles', 'doug', 'batman', 'xmen', 'arthur', 'spiderman', 'superman'];

var firstKey = document.getElementById('startGame');
document.onkeydown = function(event) {
  firstKey.textContent = event.key;
}