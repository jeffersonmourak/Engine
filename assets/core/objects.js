var maps = [{
    name: "Level 1",
    file: "map_1.png"
}];

function Player(canvas) {
    this.active = true;
    this.canvas = Game.instance_.canvas;

    this.color = "#a0a";

    this.x = 200;
    this.y = 60;
    this.width = 32;
    this.height = 32;

    this.physics = false;
}

Player.prototype = {
    draw: function() {
        this.canvas.fillStyle = this.color;
        this.canvas.fillRect(this.x, this.y, this.width, this.height);
    }
}



var ground = new mapPattern("Ground");
ground.pattern = true;
ground.texture = "http://noobtuts.com/content/unity/2d-angry-birds-game/ground.png";
ground.validator = function(r, g, b) {
    if (r == 255 && b == 0 && g == 0) {
        return true;
    }

    return false;
}

var trackObjects = [ground];