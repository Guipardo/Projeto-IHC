//Github: https://github.com/mcnitt/simple-jquery-drawing-app

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

//Reset on Click
$(".reset").click(function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	cPush();
});

//When clicking control list items
$(".controls").on("click", "li", function() {
    //deselect sibling elements
    $(this).siblings().removeClass("selected");
    //select clicked element
    $(this).addClass("selected");
    //cache current color here
    color = $(".selected").css("background-color");
    console.log("selected color = " + color);
});

// This will be defined on a TOUCH device such as iPad or Android, etc.
  var is_touch_device = 'ontouchstart' in document.documentElement;

  if (is_touch_device) {
    // create a drawer which tracks touch movements
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

    // create a function to pass touch events and coordinates to drawer
    function draw(event) {

      // get the touch coordinates.  Using the first touch in case of multi-touch
      var coors = {
        x: event.targetTouches[0].pageX,
        y: event.targetTouches[0].pageY
      };

      // Now we need to get the offset of the canvas location
      var obj = sigCanvas;

      if (obj.offsetParent) {
        // Every time we find a new object, we add its offsetLeft and offsetTop to curleft and curtop.
        do {
          coors.x -= obj.offsetLeft;
          coors.y -= obj.offsetTop;
        }
        // The while loop can be "while (obj = obj.offsetParent)" only, which does return null
        // when null is passed back, but that creates a warning in some editors (i.e. VS2010).
        while ((obj = obj.offsetParent) != null);
      }

      // pass the coordinates to the appropriate handler
      drawer[event.type](coors);
    }

    // attach the touchstart, touchmove, touchend event listeners.
    sigCanvas.addEventListener('touchstart', draw, false);
    sigCanvas.addEventListener('touchmove', draw, false);
    sigCanvas.addEventListener('touchend', draw, false);

    // prevent elastic scrolling
    sigCanvas.addEventListener('touchmove', function(event) {
      event.preventDefault();
    }, false);
		
  } else {

	//On mouse events on the canvas
	$canvas.mousedown(function(e) {
			lastEvent = e;
			mouseDown = true;

	}).mousemove(function(e) {
			if (mouseDown) {
					//Draw lines
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
			// cPush();
	}).mouseleave(function() {
			$canvas.mouseup();
			// cPush();
	});

}

// Log all brush strokes for the undo/redo buttons
// var cPushArray = new Array();
// var cStep = -1;
// var cDrawing = document.getElementById('canvas').getContext("2d");
	
// function cPush() {
//     cStep++;
//     if (cStep < cPushArray.length) { cPushArray.length = cStep; }
//     cPushArray.push(document.getElementById('canvas').toDataURL());
// }

// function cUndo() {
//     if (cStep > 0) {
//         cStep--;
//         var canvasPic = new Image();
//         canvasPic.src = cPushArray[cStep];
//         canvasPic.onload = function () { cDrawing.drawImage(canvasPic, 0, 0); }
//     }
// }

// function cRedo() {
//     if (cStep < cPushArray.length-1) {
//         cStep++;
//         var canvasPic = new Image();
//         canvasPic.src = cPushArray[cStep];
//         canvasPic.onload = function () { cDrawing.drawImage(canvasPic, 0, 0); }
//     }
// }