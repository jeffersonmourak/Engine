(function() {

	"use strict";

	function Game(options){

		if (Game.instance_) {
            return Game.instance_;
        }
        Game.instance_ = this;

		this.canvas = document.querySelector("#canvas").getContext("2d");
		this.canvasElement = document.querySelector("#canvas");

		this.width = options.width || 480;
		this.height = options.height || 320;

		this.FPS = 60;

		this.maps = maps;
		this.mapIndex = 0;

		this.mapCreator = new mapGenerator(this.maps[this.mapIndex],trackObjects);

		this.player = new Player();
		
		this.init();
	}

	window["Game"] = Game;

	Game.prototype = {
		init: function(){

			this.canvasElement.width = this.width;
			this.canvasElement.height = this.height;

			var self = this;
			setInterval(function(){

				self.update();
				self.draw();

			}, 1000/this.FPS);

		},
		update: function(){

		},
		draw: function(){
			this.player.draw();
		}
	}

}());