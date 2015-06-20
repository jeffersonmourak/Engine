(function() {

    function mapGenerator(map, objects) {
        this.map = map;

        this.objects = objects || [];

        this.blocks = [];

        this.init();
    }

    window["mapGenerator"] = mapGenerator;

    mapGenerator.prototype = {
        init: function() {
            var mapImage = new Image();

            mapImage.src = "assets/maps/" + this.map.file;

            var self = this;

            this.tracker = new tracking.ColorTracker(this.objectsToTrack());

            mapImage.onload = function() {
                self.mapImage = mapImage;
                self.generate();
            }

        },
        generate: function() {
            var self = this;
            this.tracker.on('track', function(event) {
                event.data.forEach(function(data) {

                    self.generateBlock(data);

                });
            });

            tracking.track(this.mapImage, this.tracker);
        },
        objectsToTrack: function() {
            var toTrack = [];
            for (var i in this.objects) {
                var object = this.objects[i];
                tracking.ColorTracker.registerColor(object.name, object.validator);
                toTrack.push(object.name);
            }
            return toTrack;
        },
        findObject: function(name){
        	for (var i in this.objects) {
        		var object = this.objects[i];
        		if(object.name == name){
        			return object;
        		}
        	}
        	return false;
        },
        generateBlock: function(data){
        	var object = this.findObject(data.color);
        	this.blocks.push(new patternObject(object,data));
        	console.log(this.blocks);
        }

    }

    function patternObject(object,data){
    	this.object = object;
    	this.y = data.y;
    	this.x = data.x;
    	this.width = data.width;
    	this.height = data.height;

    	this.init();
    }

    patternObject.prototype = {
    	init: function(){
    		
    	}
    }

}());


(function() {

    function mapPattern(name) {
        this.name = name;

        this.pattern = false;

        this.texture = "";

        this.collide = false;

    }

    window["mapPattern"] = mapPattern;

    mapPattern.prototype = {
        isPattern: function() {
            return this.pattern;
        },
        isACollider: function() {
            return this.collide;
        },
        validator: function() {}
    }

}());
