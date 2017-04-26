
function setColor (x, y, color) {
    firebase.database().ref('Map/x'+x+'y'+y).update({
        color: color
    });
}

function getColor (x, y) {
    return firebase.database().ref('Map/x'+x+'y'+y).once('value').then(function(snapshot) {
        return snapshot.val().color;
    });
}

for (var y = 0; y < 10; ++y) {
    for (var x = 0; x < 10; ++x) {
        setColor(x,y,"white");
    }
}
setColor(0,0,"red");
setColor(9,0,"green");