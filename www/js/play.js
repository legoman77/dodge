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
    this.player = this.add.sprite(100,100,'player',5);
    this.player.scale.set(1);
    this.player.animations.add('eyes');
    this.player.animations.play('eyes',2,true);
  },

  update: function() {
  }

};
