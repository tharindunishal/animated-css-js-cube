// To rotate with mouse move
var mousePosX = 0,
    mousePosY = 0;
var rotateXDegrees = 0,
    rotateYDegrees = 0;

$(document).on("mousedown", function (e) {
    mousePosX = e.clientX;
    mousePosY = e.clientY;
    $(document).on("mousemove", mouseMoved);
});

$(document).on("mouseup", function () {
    $(document).off("mousemove", mouseMoved);
});

function mouseMoved(e) {
    var deltaX = e.pageX - mousePosX;
    var deltaY = e.pageY - mousePosY;

    mousePosX = e.pageX;
    mousePosY = e.pageY;

    rotateYDegrees -= deltaX * -0.1;
    rotateXDegrees += deltaY * -0.1;

    $("#cube").css("transform", "translateZ( -100px) rotateX( " + rotateXDegrees + "deg) rotateY(" + rotateYDegrees + "deg)");
}


// To rotate automatically
$(document).ready(function () {
    var xDegrees = 0;
    var yDegrees = 0;
    setInterval(() => {
        xDegrees += 0.1;
        yDegrees -= 0.1;
        $('#cube').css('transform', 'translateZ(-100px) rotateX(' + xDegrees + 'deg) rotateY(' + yDegrees + 'deg)');
    }, 10);
});