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
  },

  create: function() {
    this.background = this.add.tileSprite(0,0,320,568,'background');
    this.background.autoScroll(-50,50);
    this.background.scale.set(1);
  },

  update: function() {
  }

};
