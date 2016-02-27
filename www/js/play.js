// State: DogeDodge.Play

'use strict'

var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    console.log("%c~~~ Booting the DogeDodge ~~~\n Compliments of Skilstak", "color:#fdf6e3");
  },

  preload: function () {
    this.load.image('background','assets/GameBackground.png',320,568);
    this.load.spritesheet('player','assets/Guy.Who.Dodges.Stuff.png',40,71,2);
  },

  create: function() {
    this.background = this.add.tileSprite(0,0,320,568,'background');
    this.background.autoScroll(-50,50);
    this.background.scale.set(1);
    this.background.smoothed = false;
    this.dodger = this.add.sprite(100,100,'player',5);
    this.dodger.anchor.set(0.5,0.5);
    this.dodger.smoothed = false;
    this.dodger.animations.add('eyes');
    this.dodger.animations.play('eyes',2,true);
    
    // movement keys
    this.cursors = game.input.keyboard.createCursorKeys();
  },

  update: function() {
    if (this.cursors.left.isDown) {
      this.dodger.x -= 10;
    }
    if (this.cursors.right.isDown) {
    this.dodger.x += 10;
    }
  }

};
