console.log("Hello World!");

// Loading other modules within the main script
requirejs(["./helper/util"], function(util) {
    widget.body.innerHTML = "Redacted!";
});