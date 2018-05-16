var color = $(".selected").css("background-color");
var $canvas = $("canvas");

var weight = 5;
function choose(choice){
    weight = choice;
}

var sigCanvas = document.getElementById("canvas");
var context = sigCanvas.getContext("2d");
var lastEvent;
var mouseDown = false;


$(".reset").click(function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	cPush();
});

$(".controls").on("click", "li", function() {

    $(this).siblings().removeClass("selected");

    $(this).addClass("selected");

    color = $(".selected").css("background-color");
    console.log("selected color = " + color);
});

  var is_touch_device = 'ontouchstart' in document.documentElement;

  if (is_touch_device) {

    var drawer = {
      isDrawing: false,
      touchstart: function(coors) {
        context.beginPath();
        context.moveTo(coors.x, coors.y);
        this.isDrawing = true;
      },
      touchmove: function(coors) {
        if (this.isDrawing) {
          context.lineTo(coors.x, coors.y);
					context.strokeStyle = color;
					context.lineWidth= weight;
					context.shadowBlur= 2;
					context.lineCap="round";
					context.lineJoin="round";
					context.shadowColor= color;
          context.stroke();
        }
      },
      touchend: function(coors) {
        if (this.isDrawing) {
          this.touchmove(coors);
          this.isDrawing = false;
        }
      }
    };

    function draw(event) {


      var coors = {
        x: event.targetTouches[0].pageX,
        y: event.targetTouches[0].pageY
      };

      var obj = sigCanvas;

      if (obj.offsetParent) {

        do {
          coors.x -= obj.offsetLeft;
          coors.y -= obj.offsetTop;
        }

        while ((obj = obj.offsetParent) != null);
      }

      drawer[event.type](coors);
    }

    sigCanvas.addEventListener('touchstart', draw, false);
    sigCanvas.addEventListener('touchmove', draw, false);
    sigCanvas.addEventListener('touchend', draw, false);


    sigCanvas.addEventListener('touchmove', function(event) {
      event.preventDefault();
    }, false);

  } else {

	$canvas.mousedown(function(e) {
			lastEvent = e;
			mouseDown = true;

	}).mousemove(function(e) {
			if (mouseDown) {

					context.beginPath();
					context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
					context.lineTo(e.offsetX, e.offsetY);
					context.strokeStyle = color;
					context.lineWidth= weight;
					context.shadowBlur= 2;
					context.lineCap="round";
					context.lineJoin="round";
					context.shadowColor= color;
					context.stroke();
					lastEvent = e;
			}
	}).mouseup(function() {
			mouseDown = false;

	}).mouseleave(function() {
			$canvas.mouseup();

	});

}
