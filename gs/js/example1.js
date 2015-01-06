window.addEventListener("load",function() { // Wait for the window to finish loading
 
var Q = window.Q = Quintus()                // Create a new engine instance
    .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI") // Load any needed modules
    .setup("myGame")                        // Bind Quintus to the canvas with ID "myGame"
    .controls()                             // Add in default controls (keyboard, buttons)
    .touch();                               // Add in touch support (for the UI)
     
    /*
    ... Actual game code goes here ...
    */
     
    Q.Class.extend("MyClass", {
       init: function() { console.log("MyClass instance created"); },
       doIt: function() { alert("Doin it!"); } 
    });
     
    var myInstance = new Q.MyClass(); // MyClass instance created
     
    myInstance.doIt(); // Doin it!
     
    console.log(myInstance.className); // 'MyClass'
    console.log(myInstance instanceof Q.Class); // true
    console.log(myInstance instanceof Q.MyClass); // true
});


