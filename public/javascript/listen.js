var listen_x0y0 = firebase.database().ref('Map/x0y0');
listen_x0y0.on('value', function(snapshot) {
    getColor(0,0).then(function(color){
        $("#x0y0").css("backgroundColor", color);
    });
});

var listen_x1y0 = firebase.database().ref('Map/x1y0');
listen_x1y0.on('value', function(snapshot) {
    getColor(1,0).then(function(color){
        $("#x1y0").css("backgroundColor", color);
    });
});

var listen_x2y0 = firebase.database().ref('Map/x2y0');
listen_x2y0.on('value', function(snapshot) {
    getColor(2,0).then(function(color){
        $("#x2y0").css("backgroundColor", color);
    });
});

var listen_x3y0 = firebase.database().ref('Map/x3y0');
listen_x3y0.on('value', function(snapshot) {
    getColor(3,0).then(function(color){
        $("#x3y0").css("backgroundColor", color);
    });
});

var listen_x0y1 = firebase.database().ref('Map/x0y1');
listen_x0y1.on('value', function(snapshot) {
    getColor(0,1).then(function(color){
        $("#x0y1").css("backgroundColor", color);
    });
});

var listen_x1y1 = firebase.database().ref('Map/x1y1');
listen_x1y1.on('value', function(snapshot) {
    getColor(1,1).then(function(color){
        $("#x1y1").css("backgroundColor", color);
    });
});

var listen_x2y1 = firebase.database().ref('Map/x2y1');
listen_x2y1.on('value', function(snapshot) {
    getColor(2,1).then(function(color){
        $("#x2y1").css("backgroundColor", color);
    });
});

var listen_x3y1 = firebase.database().ref('Map/x3y1');
listen_x3y1.on('value', function(snapshot) {
    getColor(3,1).then(function(color){
        $("#x3y1").css("backgroundColor", color);
    });
});