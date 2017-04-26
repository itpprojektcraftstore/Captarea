var timestamp_start = new Date();

document.onkeydown = function(event) {
    if (event.keyCode == 65) { if(checkTime()) { move(1,'left'); } }
    if (event.keyCode == 87) { if(checkTime()) { move(1,'up'); } }
    if (event.keyCode == 68) { if(checkTime()) { move(1,'right'); } }
    if (event.keyCode == 83) { if(checkTime()) { move(1,'down'); } }
    if (event.keyCode == 37) { if(checkTime()) { move(2,'left'); } }
    if (event.keyCode == 38) { if(checkTime()) { move(2,'up'); } }
    if (event.keyCode == 39) { if(checkTime()) { move(2,'right'); } }
    if (event.keyCode == 40) { if(checkTime()) { move(2,'down'); } }
}

function move (player, direction) {

    var player_color;
    if (player == 1) { player_color = "red"; }
    else if (player == 2) { player_color = "green"; }

    switch (direction) {
        case 'up':
            getPlayerPosition(player).then(function(pos){
                if ((pos.y > 0) && checkColission(direction, pos.x, pos.y)) {
                    delPlayerIndicator(pos.x, pos.y);
                    pos.y--;
                    setPlayerPosition_y(player, pos.y);
                    setColor(pos.x, pos.y, player_color);
                }
            });
            break;

        case 'down':
                getPlayerPosition(player).then(function(pos){
                if ((pos.y < 9) && checkColission(direction, pos.x, pos.y)) {
                    delPlayerIndicator(pos.x, pos.y);
                    pos.y++;
                    setPlayerPosition_y(player, pos.y);
                    setColor(pos.x, pos.y, player_color);
                }
            });
            break;

        case 'left':
            getPlayerPosition(player).then(function(pos){
                if ((pos.x > 0) && checkColission(direction, pos.x, pos.y)) {
                    delPlayerIndicator(pos.x, pos.y);
                    pos.x--;
                    setPlayerPosition_x(player, pos.x);
                    setColor(pos.x, pos.y, player_color);
                }
            });
            break;

        case 'right':
            getPlayerPosition(player).then(function(pos){
                if ((pos.x < 9) && checkColission(direction, pos.x, pos.y)) {
                    delPlayerIndicator(pos.x, pos.y);
                    pos.x++;
                    setPlayerPosition_x(player, pos.x);
                    setColor(pos.x, pos.y, player_color);
                }
            });
            break;
    }
}

function checkColission(direction, x, y) {
    if (direction == "up") { --y; }
    else if (direction == "down") { ++y; }
    else if (direction == "left") { --x; }
    else if (direction == "right") { ++x; }
    if (document.getElementById('x'+x+'y'+y).innerHTML == "") {
        return true;
    }
    else {
        return false;
    }
}

function checkTime() {
    var timestamp_end = new Date();
    if ((timestamp_end - timestamp_start) > 700) {
        timestamp_start = new Date();
        return true;
    }
    else {
        return false;
    }
}

function getPlayerPosition (player) {
    return firebase.database().ref('Player/player '+player).once('value').then(function(snapshot) {
        var position = {
            x : snapshot.val().x,
            y : snapshot.val().y
        };
        return position;
    });
}

function setPlayerPosition_x(player, new_x) {
    firebase.database().ref('Player/player '+player).update({
        x: new_x
    });
    //Place player indicator
    firebase.database().ref('Player/player '+player).once('value').then(function(snapshot) {
        var x = snapshot.val().x;
        var y = snapshot.val().y;
        document.getElementById('x'+x+'y'+y).innerHTML="<img src=\"/img/player"+player+".gif\">";
    });
}

function setPlayerPosition_y(player, new_y) {
    firebase.database().ref('Player/player '+player).update({
        y: new_y
    });
    //Place player indicator
    firebase.database().ref('Player/player '+player).once('value').then(function(snapshot) {
        var x = snapshot.val().x;
        var y = snapshot.val().y;
        document.getElementById('x'+x+'y'+y).innerHTML="<img src=\"/img/player"+player+".gif\">";
    });
}

function delPlayerIndicator(x, y){
    document.getElementById('x'+x+'y'+y).innerHTML="";
}

setPlayerPosition_x(1, 0);
setPlayerPosition_y(1, 0);
setPlayerPosition_x(2, 9);
setPlayerPosition_y(2, 0);