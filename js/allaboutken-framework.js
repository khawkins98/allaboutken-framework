$(document).foundation();

if (typeof console == "undefined" || typeof console.log == "undefined") {
  var console = { log: function() {} };
  window.console = { log: function() {} };
}

console.log(''+
'\n%c                    --------------------------------- '+
'\n                    |                               | '+
'\n                    |   Thanks for having a         | '+
'\n                    |   look around.                | '+
'\n                    |                               | '+
'\n                    |   Viewer beware, this site    | '+
'\n                    |   is mostly a playground, and | '+
'\n            %cHELLO!%c  |   may break at any time!      | '+
'\n         %c(^ _ ^)%c    |                               | '+
'\n                    --------------------------------- '+
'\n                      ',
'\n                      ',
'\n   You can ask me questions if you like           ',
'\n                      ',
'\n   Here are some ideas:                   ',
'\n                      ',
'\n     questions.name                 ',
'\n                      ',
'\n                      ',
'\n                      ',
'\n                      ',
'\n                      ',
'\n                      ',
'\n                      ',
'\n                      ',
'color:#7759c3', 'color:#2970ad', 'color: #7759c3', 'color:#2970ad', 'color: #7759c3');

//var questions = new Object();
//questions['name'] = 'Ken Hawkins';

// to do: save values to local storage

console.log('You can do a few things:');
console.log('Type: `hi` and tell me your name, I\'ll rememeber.')

var hi = function(message) {
  console.log('Hi ' + message);  

  return blank();
};

hi.toString = function() {
  hi(prompt("What's your name?"));

  return " ";
};
