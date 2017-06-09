function createGame() {
    var start_x, start_y;
    getAvailable().then(function(available){
        gl_game = available;
        //write ready in database
        firebase.database().ref('Game '+gl_game+'/Ready').set({
            ready: 0
        }).then(function(){
            inc_ready();
            gl_is_admin = true;
            //if (gl_is_admin) { set_listen_ready(); }
        
            changeAvailable(1);
            
            for (i = 0; i < 4; ++i) {
                if (i == 0) { start_x = 0; start_y = 0;}
                else if (i == 1) { start_x = 9; start_y = 0;}
                else if (i == 2) { start_x = 0; start_y = 9;}
                else if (i == 3) { start_x = 9; start_y = 9;}
                firebase.database().ref('Game '+gl_game+'/Player/player '+(i+1)).set({
                    x: start_x,
                    y: start_y,
                    name: '?'
                }).then(function(){  console.log("!"); });
            }
        });
    });
}

function startGame() {
    console.log("start");
    var start_x, start_y, player_color;
    setPlayerName(1, "PLAYER1");
    setPlayerName(2, "PLAYER2");

    // write map in database
    for (y = 0; y < 10; ++y) {
        for (x = 0; x < 10; ++x) {
            firebase.database().ref('Game '+gl_game+'/Map/x'+x+'y'+y).set({
                color: "white"
            });
        }
    }

    // write player in database, set start colors & player images 
    getPlayerName(1).then(function(name1) {
         getPlayerName(2).then(function(name2) {
              getPlayerName(3).then(function(name3) {
                   getPlayerName(4).then(function(name4) {
                       var check = true;
                       check = initPlayer(name1, 1, check);
                       check = initPlayer(name2, 2, check);
                       check = initPlayer(name3, 3, check);
                       check = initPlayer(name4, 4, check);

                       for (i = 1; i <= gl_players; ++i) {
                           set_listen_player(i);
                       }
                       set_listen_map();
                       startTimer();
                   });
              });
         });
    });
}

function initPlayer(name, index, check) {

            if(name == "?") {
                if (check) { gl_players = index-1; }
                return false;
            }
            else {
                gl_player_array[index-1] = name;
                if (index == 1) { start_x = 0; start_y = 0; player_color = "red";}
                else if (index == 2) { start_x = 9; start_y = 0; player_color = "green";}
                else if (index == 3) { start_x = 0; start_y = 9; player_color = "blue";}
                else if (index == 4) { start_x = 9; start_y = 9; player_color = "yellow";}
                document.getElementById('x'+start_x+'y'+start_y).innerHTML="<img src=\"/img/player"+i+".gif\">";
                setColor(start_x, start_y, player_color);
                return true;
            }
}

function getPlayerName(index) {
    return firebase.database().ref('Game '+gl_game+'/Player/player '+index).once('value').then(function(snapshot) {
        return snapshot.val().name;
    });
}

function closeGame() {
    var score1, score2, score3, score4;

    for (i = 1; i <= gl_players; ++i) {
        if (i == 1) { score1 = parseInt(document.getElementById("score1").innerHTML); }
        else if (i == 2) { score2 = parseInt(document.getElementById("score2").innerHTML); }
        else if (i == 3) { sscore3 = parseInt(document.getElementById("score3").innerHTML); }
        else if (i == 4) { score4 = parseInt(document.getElementById("score4").innerHTML); }
    }

    switch(gl_players) {

        case 2:
            if (score1 > score2) { alert(gl_player_array[0]+" wins"); }
            else if (score2 > score1) { alert(gl_player_array[1]+" wins"); }
            else { alert("draw"); }
            break;

        case 3:
            if (score1 > score2 && score1 > score3) { alert(gl_player_array[0]+" wins"); }
            else if (score2 > score1 && score2 > score3) { alert(gl_player_array[1]+" wins"); }
            else if (score3 > score1 && score3 > score2) { alert(gl_player_array[2]+" wins"); }
            else { alert("draw"); }
            break;

        case 4:
            if (score1 > score2 && score1 > score3 && score1 > score4) { alert(gl_player_array[0]+" wins"); }
            else if (score2 > score1 && score2 > score3 && score2 > score4) { alert(gl_player_array[1]+" wins"); }
            else if (score3 > score1 && score3 > score2 && score3 > score4) { alert(gl_player_array[2]+" wins"); }
            else if (score4 > score1 && score4 > score2 && score4 > score3) { alert(gl_player_array[3]+" wins"); }
            else { alert("draw"); }
            break;
    }
}