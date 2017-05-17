function createGame() {
    getAvailable().then(function(available){
        gl_game = available;
        //write ready in database
        firebase.database().ref('Game '+gl_game+'/Ready').set({
            ready: 0
        });
        set_listen_ready();
        inc_ready();
    });
}

function startGame() {
    var start_x, start_y, player_color;
    gl_players = 2;
    gl_player_index = 1;
    gl_game_start = true;

    // write map in database
    for (y = 0; y < 10; ++y) {
        for (x = 0; x < 10; ++x) {
            firebase.database().ref('Game '+gl_game+'/Map/x'+x+'y'+y).set({
                color: "white"
            });
        }
    }

    // write player in database, set start colors & player images 
    for (i = 0; i < gl_players; ++i) {
        if (i == 0) { start_x = 0; start_y = 0; player_color = "red";}
        else if (i == 1) { start_x = 9; start_y = 0; player_color = "green";}
        else if (i == 2) { start_x = 0; start_y = 9; player_color = "black";}
        else if (i == 3) { start_x = 9; start_y = 9; player_color = "black";}
        firebase.database().ref('Game '+gl_game+'/Player/player '+(i+1)).set({
            x: start_x,
            y: start_y,
            name: gl_player_array[i]
        });
        document.getElementById('x'+start_x+'y'+start_y).innerHTML="<img src=\"/img/player"+(i+1)+".gif\">";
        setColor(start_x, start_y, player_color);
    }
    
    for (i = 1; i <= gl_players; ++i) {
        set_listen_player(i);
    }
    set_listen_map();
    
    startTimer();
}

function closeGame() {
    if(document.getElementById("score1").innerHTML > document.getElementById("score2").innerHTML) {
        alert("Player 1 wins");
    }
    else if (document.getElementById("score1").innerHTML < document.getElementById("score2").innerHTML) {
        alert("Player 2 wins");
    }
    else {
        alert("draw");
    }
    
}