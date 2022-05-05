console.log("Hello World!");

// Loading other modules within the main script
requirejs(["helper/util"], function(util) {
    console.log("Loaded!");
});