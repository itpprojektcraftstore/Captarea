function createGame() {
    var start_x, start_y, name;
    getAvailable().then(function(available){
        gl_game = available;
        gl_player_index = 1;
        
        //write ready in database
        firebase.database().ref('Game '+gl_game+'/Ready').set({
            ready: 0
        }).then(function(){

            firebase.database().ref('Game '+gl_game+'/Running').set({
                running: 0
            })

            changeAvailable(1);

            // write map in database
            for (y = 0; y < 10; ++y) {
                for (x = 0; x < 10; ++x) {
                    firebase.database().ref('Game '+gl_game+'/Map/x'+x+'y'+y).set({
                        color: "white"
                    });
                }
            }

            setColor(0, 0, "red");
            
            start_x = 0; start_y = 0; name = gl_name;
            firebase.database().ref('Game '+gl_game+'/Player/player 1').set({
                x: start_x,
                y: start_y,
                name: name,
                ready: 0
            }).then(function(){
                start_x = 9; start_y = 0; name = '?'
                firebase.database().ref('Game '+gl_game+'/Player/player 2').set({
                    x: start_x,
                    y: start_y,
                    name: name,
                    ready: 0
                }).then(function(){
                     start_x = 0; start_y = 9;
                     firebase.database().ref('Game '+gl_game+'/Player/player 3').set({
                        x: start_x,
                        y: start_y,
                        name: name,
                        ready: 0
                    }).then(function(){
                          start_x = 9; start_y = 9;
                          firebase.database().ref('Game '+gl_game+'/Player/player 4').set({
                            x: start_x,
                            y: start_y,
                            name: name,
                            ready: 0
                        }).then(function(){
                            set_listen_join();
                            createLobby();
                        });
                    });
                });
            });
        });
    });
}

function startGame() {

    if(gl_player_index == 1) {
        firebase.database().ref('Game '+gl_game+'/Running').update({
            running: 1
        });
    }
    $('#view').load( 'gameplay_test.html', function() {

        // draw board
        for(y = 0; y < 10; y++){
            for(x = 0; x < 10; x++){
                var $div = $("<div></div>");
                $($div).attr('class', 'field');
                $($div).attr('id', 'x'+x+'y'+y);
                $("#board").append($div);
            }
            $('#board').append("<br>");
        }

        $("#score"+gl_player_index).css("font-weight", "bold");
        $("#score"+gl_player_index+"_prefix").css("font-weight", "bold");

        // init local stuff
        var query = firebase.database().ref('Game '+gl_game+'/Player').orderByKey();
        query.once("value").then(function(snapshot) {
            var check = true;
            check = initPlayer(snapshot.val()["player 1"].name, 1, check);
            check = initPlayer(snapshot.val()["player 2"].name, 2, check);
            check = initPlayer(snapshot.val()["player 3"].name, 3, check);
            check = initPlayer(snapshot.val()["player 4"].name, 4, check);

            set_listen_map();
            startTimer();
            gl_game_start = true;
        });
    });
}

function initPlayer(name, index, check) {
    var start_x, start_y, player_color;
    
    if(name == "?") {
        if (check) { gl_players = index-1; }
        return false;
    }
    else {
        gl_player_array[index-1] = name;
        if (index == 1) { start_x = 0; start_y = 0; }
        else if (index == 2) { start_x = 9; start_y = 0; }
        else if (index == 3) { start_x = 0; start_y = 9; }
        else if (index == 4) { start_x = 9; start_y = 9; }
        document.getElementById('x'+start_x+'y'+start_y).innerHTML="<img src=\"/img/player"+index+".gif\">";
        set_listen_player(index);
        return true;
    }
}

function getPlayerName(index) {
    return firebase.database().ref('Game '+gl_game+'/Player/player '+index).once('value').then(function(snapshot) {
        return snapshot.val().name;
    });
}

function closeGame() {
    console.log(gl_game_start);
    if(gl_game_start) {

        gl_game_start = false;
        var score1, score2, score3, score4;

        for (i = 1; i <= gl_players; ++i) {
            if (i == 1) { score1 = parseInt(document.getElementById("score1").innerHTML); }
            else if (i == 2) { score2 = parseInt(document.getElementById("score2").innerHTML); }
            else if (i == 3) { score3 = parseInt(document.getElementById("score3").innerHTML); }
            else if (i == 4) { score4 = parseInt(document.getElementById("score4").innerHTML); }
        }

        switch(gl_players) {

            case 2:
                if (score1 > score2) { console.log(gl_player_array[0]+" wins"); 
                document.getElementById('winner').innerHTML=gl_player_array[0]+" wins!"; }
                else if (score2 > score1) { console.log(gl_player_array[1]+" wins");
                document.getElementById('winner').innerHTML=gl_player_array[1]+" wins!"; }
                else { console.log("draw"); 
                document.getElementById('winner').innerHTML="Draw";}
                break;

            case 3:
                if (score1 > score2 && score1 > score3) { console.log(gl_player_array[0]+" wins");
                document.getElementById('winner').innerHTML=gl_player_array[0]+" wins!"; }
                else if (score2 > score1 && score2 > score3) { console.log(gl_player_array[1]+" wins");
                document.getElementById('winner').innerHTML=gl_player_array[1]+" wins!"; }
                else if (score3 > score1 && score3 > score2) { console.log(gl_player_array[2]+" wins");
                document.getElementById('winner').innerHTML=gl_player_array[2]+" wins!"; }
                else { console.log("draw"); 
                document.getElementById('winner').innerHTML="Draw";}
                break;

            case 4:
                if (score1 > score2 && score1 > score3 && score1 > score4) { console.log(gl_player_array[0]+" wins");
                document.getElementById('winner').innerHTML=gl_player_array[0]+" wins!"; }
                else if (score2 > score1 && score2 > score3 && score2 > score4) { console.log(gl_player_array[1]+" wins");
                document.getElementById('winner').innerHTML=gl_player_array[1]+" wins!"; }
                else if (score3 > score1 && score3 > score2 && score3 > score4) { console.log(gl_player_array[2]+" wins");
                document.getElementById('winner').innerHTML=gl_player_array[2]+" wins!"; }
                else if (score4 > score1 && score4 > score2 && score4 > score3) { console.log(gl_player_array[3]+" wins");
                document.getElementById('winner').innerHTML=gl_player_array[3]+" wins!"; }
                else { console.log("draw");
                document.getElementById('winner').innerHTML="Draw"; }
                break;

            default:
                console.log(gl_player_array[0]+" wins");
                document.getElementById('winner').innerHTML=gl_player_array[0]+" wins!";
        }

        setTimeout(function(){ 
            listGames(); 
        }, 3000);

        //reset();
        //createLobby();
    }
}

function reset() {
    score1 = 0;
    score2 = 0;
    score3 = 0;
    score4 = 0;
    var gl_game = 0;
    var gl_players = 1;
    var gl_player_array = [" ", " ", " ", " "];
    var gl_player_index = 0;
}