
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

setColor(0,0,"red");
setColor(1,0,"white");
setColor(2,0,"white");
setColor(3,0,"green");
setColor(0,1,"white");
setColor(1,1,"white");
setColor(2,1,"white");
setColor(3,1,"white");