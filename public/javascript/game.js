function createGame() {
    getAvailable().then(function(available){
        game = available;
        //write ready in database
        firebase.database().ref('Game '+game+'/Ready').set({
            ready: 0
        });
        set_listen_ready();
        inc_ready();
    });
}

function startGame() {
    var start_x, start_y, player_color;
    players = 2;
    game = 1;
    game_start = true;

    // write map in database
    for (y = 0; y < 10; ++y) {
        for (x = 0; x < 10; ++x) {
            firebase.database().ref('Game '+game+'/Map/x'+x+'y'+y).set({
                color: "white"
            });
        }
    }

    // write player in database
    for (i = 0; i < players && i < 4; ++i) {
        if (i == 0) { start_x = 0; start_y = 0; player_color = "red";}
        else if (i == 1) { start_x = 9; start_y = 0; player_color = "green";}
        else if (i == 2) { start_x = 0; start_y = 9; player_color = "black";}
        else if (i == 3) { start_x = 9; start_y = 9; player_color = "black";}
        firebase.database().ref('Game '+game+'/Player/player '+(i+1)).set({
            x: start_x,
            y: start_y,
            name: player[i]
        });
        document.getElementById('x'+start_x+'y'+start_y).innerHTML="<img src=\"/img/player"+(i+1)+".gif\">";
        setColor(start_x, start_y, player_color);
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