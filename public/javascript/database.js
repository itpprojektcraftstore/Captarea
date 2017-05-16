var score1 = 0;
var score2 = 0;

function setColor (x, y, color) {
    firebase.database().ref('Game '+game+'/Map/x'+x+'y'+y).update({
        color: color
    });
}

function getColor (x, y) {
    return firebase.database().ref('Game '+game+'/Map/x'+x+'y'+y).once('value').then(function(snapshot) {
        return snapshot.val().color;
    });
}

function countScore(color, old_color) {
    if (color == "red") { 
        ++score1;
        document.getElementById("score1").innerHTML = score1;
    }
    else if (color == "green") {
        ++score2;
        document.getElementById("score2").innerHTML = score2;
    }
    if (old_color != "rgb(255, 255, 255)") { decScore(old_color); }
}

function decScore(old_color) {
    if (old_color == "rgb(255, 0, 0)") {  // red 
        --score1;
        document.getElementById("score1").innerHTML = score1;
    }
    else if (old_color == "rgb(0, 128, 0)") {  // green
        --score2;
        document.getElementById("score2").innerHTML = score2;
    }
}

function createGame() {
    var start_x, start_y;
    players = 2;
    game = 1;

    // write player in database
    for (i = 0; i < players || i < 4; ++i) {
        if (i == 0) { start_x = 0; start_y = 0; }
        else if (i == 1) { start_x = 9; start_y = 0; }
        else if (i == 2) { start_x = 0; start_y = 9; }
        else if (i == 3) { start_x = 9; start_y = 9; }
        firebase.database().ref('Game '+game+'/Player/player '+(i+1)).set({
            x: start_x,
            y: start_y,
            name: player[i]
        });
    }

    // write map in database
    for (y = 0; y < 10; ++y) {
        for (x = 0; x < 10; ++x) {
            firebase.database().ref('Game '+game+'/Map/x'+x+'y'+y).set({
                color: "white"
            });
        }
    }

    //write ready in database
    firebase.database().ref('Game '+game+'/Ready').set({
        ready: false
    });

    set_listen_var();
}