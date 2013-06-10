var stage = new Kinetic.Stage({
    container: 'container',
    width: 500,
    height: 500
});

var layer = new Kinetic.Layer();

var border = new Kinetic.Rect({
    x: 4,
    y: 4,
    width: 500-8,
    height: 500-8,
    stroke: 'black',
    strokeWidth: 4
});

// add the shape to the layer
layer.add(border);

// add the layer to the stage
stage.add(layer);

