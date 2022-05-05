console.log("Hello World!");

// Loading other modules within the main script
requirejs(["https://rimberse.github.io/Widget/helper/util"], function(util) {
    widget.body.innerHTML = "Redacted!";
});