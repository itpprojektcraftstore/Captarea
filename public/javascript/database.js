
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

for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 2; j++) {
        setColor(i,j,"white");
    }
}