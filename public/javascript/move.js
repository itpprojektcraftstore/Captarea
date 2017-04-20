
function move (player, direction) {

    var player_color;
    if (player == 1) { player_color = "red"; }
    else if (player == 2) { player_color = "green"; }

    switch (direction) {
        case 'top':
            getPlayerPosition(player).then(function(pos){
                if (pos.y > 0) {
                    pos.y--;
                    setPlayerPosition_y(player, pos.y);
                    setColor(pos.x, pos.y, player_color);
                }
            });
            break;

        case 'bot':
                getPlayerPosition(player).then(function(pos){
                if (pos.y < 1) {
                    pos.y++;
                    setPlayerPosition_y(player, pos.y);
                    setColor(pos.x, pos.y, player_color);
                }
            });
            break;

        case 'left':
            getPlayerPosition(player).then(function(pos){
                if (pos.x > 0) {
                    pos.x--;
                    setPlayerPosition_x(player, pos.x);
                    setColor(pos.x, pos.y, player_color);
                }
            });
            break;

        case 'right':
            getPlayerPosition(player).then(function(pos){
                if (pos.x < 3) {
                    pos.x++;
                    setPlayerPosition_x(player, pos.x);
                    setColor(pos.x, pos.y, player_color);
                }
            });
            break;
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
}

function setPlayerPosition_y(player, new_y) {
    firebase.database().ref('Player/player '+player).update({
        y: new_y
    });
}

setPlayerPosition_x(1, 0);
setPlayerPosition_y(1, 0);
setPlayerPosition_x(2, 3);
setPlayerPosition_y(2, 0);