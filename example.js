// Define a namespace for your library to avoid conflicts with other code
var MyLibrary = MyLibrary || {};

// Define a function that displays a message on the page
MyLibrary.showMessage = function(message) {
  var el = document.createElement('div');
  el.innerHTML = message;
  document.body.appendChild(el);
};
