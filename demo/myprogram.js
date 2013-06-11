var stage = new Kinetic.Stage({
    container: 'container',
    width: 600,
    height: 600
});

var layer = new Kinetic.Layer();

var border = new Kinetic.Rect({
    x: 2,
    y: 2,
    width: 600-6,
    height: 600-6,
    stroke: 'black',
    strokeWidth: 4
});

// The first line of our board, can you add the rest?
var line_one = new Kinetic.Line({
      points: [[200, 0], [200, 600-2]],
      stroke: 'black',
      strokeWidth: 4
});

// add the border to the layer
layer.add(border);

// add the first line
layer.add(line_one);

// add the layer to the stage
stage.add(layer);

//setting up the socket connection
var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
