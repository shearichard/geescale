window.addEventListener("load",function() { // Wait for the window to finish loading
 
var Q = window.Q = Quintus()                // Create a new engine instance
    .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI") // Load any needed modules
    .setup("myGame")                        // Bind Quintus to the canvas with ID "myGame"
    .controls()                             // Add in default controls (keyboard, buttons)
    .touch();                               // Add in touch support (for the UI)
     
    /*
    ... Actual game code goes here ...
    */
    Q.Sprite.extend("Ball",{
      init:function(p) {
        this._super(p,{
          asset: "ball.png",
          x: 0, 
          y: 30,
          vx: 50,
          vy: -400
        }); 
      },

      step: function(dt) {
        this.p.vy += dt * 9.8;

        this.p.x += this.p.vx * dt;
        this.p.y += this.p.vy * dt;
      }
    });

    Q.load(["ball.png"],function() {
      var ball = new Q.Ball();
      Q.gameLoop(function(dt) {
        ball.update(dt);
        Q.clear();
        ball.render(Q.ctx);
      });
    });
     
    /*
    Q.Class.extend("MyClass", {
       init: function() { console.log("MyClass instance created"); },
       doIt: function() { alert("Doin it!"); } 
    });
     
    var myInstance = new Q.MyClass(); // MyClass instance created
     
    myInstance.doIt(); // Doin it!
     
    console.log(myInstance.className); // 'MyClass'
    console.log(myInstance instanceof Q.Class); // true
    console.log(myInstance instanceof Q.MyClass); // true
    */
});


