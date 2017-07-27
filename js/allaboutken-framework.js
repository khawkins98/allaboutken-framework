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

var questions = new Object();
questions['name'] = 'Ken Hawkins';