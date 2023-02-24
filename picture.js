// Define a namespace for your library to avoid conflicts with other code
var MyLibrary = MyLibrary || {};

// Define a function that displays a message on the page
MyLibrary.showPicture = function(imageName) {
        var img = document.getElementById(imageName);
        img.src = "https://static.boredpanda.com/blog/wp-content/uploads/2014/01/animal-children-photography-elena-shumilova-2.jpg";
};
