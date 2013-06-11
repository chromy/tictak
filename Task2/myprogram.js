var stage = new Kinetic.Stage({
    container: 'container',
    width: 600,
    height: 600
});

var layer = new Kinetic.Layer();

var border = new Kinetic.Rect({
    x: 2,
    y: 2,
    width: 600-4,
    height: 600-4,
    stroke: 'black',
    strokeWidth: 4
});

// Draw the grid
var line_one = new Kinetic.Line({
      points: [[200, 0], [200, 600]],
      stroke: 'black',
      strokeWidth: 4
});

var line_two = new Kinetic.Line({
      points: [[400, 0], [400, 600]],
      stroke: 'black',
      strokeWidth: 4
});

var line_three = new Kinetic.Line({
      points: [[0, 200], [600, 200]],
      stroke: 'black',
      strokeWidth: 4
});

var line_four = new Kinetic.Line({
      points: [[0, 400], [600, 400]],
      stroke: 'black',
      strokeWidth: 4
});

//I have drawn one half of the X, can you complete it and draw the circle in the next box circle?

var cross = new Kinetic.Line({
      points: [[20, 20], [180, 180]],
      stroke: 'black',
      strokeWidth: 4
});

var nought = new Kinetic.Circle({
        x: 0, //what should this value be?
        y: 0, //what should this value be?
        radius: 75,
        stroke: 'black',
        strokeWidth: 4
      });


// add the border to the layer
layer.add(border);

// add the lines
layer.add(line_one);
layer.add(line_two);
layer.add(line_three);
layer.add(line_four);

//add the X and O
layer.add(cross);

//dont forget to add the O!


// add the layer to the stage
stage.add(layer);

