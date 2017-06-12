$(document).ready(function(){
    $( "body" ).delegate( "#loginBtn", "click", function newGame() {
        gl_name = document.getElementById("input_username").value;
        listGames();
        $('#login').load( 'blank.html');
    });

    $( "body" ).delegate( "#newGameBtn", "click", function() {
        createGame();
    });

    $( "body" ).delegate( "#backBtn", "click", function() {
        listGames();
    });

    $( "body" ).delegate( "#testBtn", "click", function includeBrowse() {
        $('#view').load( 'blank.html');
    });

    $( "body" ).delegate( "h1", "click", function includeBrowse() {
        $('#view').load( 'login.html');
    });
});

function join(key) {
    gl_game = key;

    firebase.database().ref('Game '+gl_game+'/Running').once('value').then(function(snapshot_running) {
        if(!snapshot_running.val().running) {
            firebase.database().ref('Game '+gl_game+'/Player').once('value').then(function(snapshot) {
                
                if(snapshot.val()["player 2"].name == '?'){
                    setPlayerName(2, gl_name);
                    setColor(9, 0, "green");
                    gl_player_index = 2;
                    set_listen_join();
                    createLobby();
                } else if(snapshot.val()["player 3"].name == '?'){
                    setPlayerName(3, gl_name);
                    setColor(0, 9, "yellow");
                    gl_player_index = 3;
                    set_listen_join();
                    createLobby();
                } else if(snapshot.val()["player 4"].name == '?'){
                    setPlayerName(4, gl_name);
                    setColor(9, 9, "blue");
                    gl_player_index = 4;
                    set_listen_join();
                    createLobby();
                } else {
                    alert("Game full!");
                }
            });
        }
        else {
            alert("Game is already running");
        }
    });
}

function createLobby() {
    $('#view').load('lobby.html', function(){
        firebase.database().ref('Game '+gl_game+'/Player').once('value').then(function(snapshot) {
            for( i = 1; i <= 4; ++i ) {
                var name = snapshot.val()['player '+i].name;
                var p, btn;
                if(name != '?') {
                    $('#Player'+i).attr('class', 'container border player');
                    p = $("<p style=\"display:inline;\">"+name+"</p>");
                    btn = $("<button id=\"p"+i+"ready\" onclick=\"ready_click("+i+")\" class=\"btn\" style=\"float:right;\">Ready</button>");
                    $('#Player'+i).append(p);
                    $('#Player'+i).append(btn);
                }
            }
            set_listen_ready();
        });
    });
}

function ready_click(number) {
    $('#p'+number+'ready').prop('disabled', true);
    inc_ready();
}

function listGames(){
    $( "#view" ).load( "browse.html #games", function(){
        var query = firebase.database().ref("/").orderByKey();
        query.once("value").then(function(snapshot) {
            var cnt_game = 1;
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                if (key != "Available" && key != "Highscore") {
                    if(!childSnapshot.val().Running.running) {
                        var host = childSnapshot.val().Player["player 1"].name;
                        var cnt = 0;
                        for(i=1;i<=4;++i) { if(childSnapshot.val().Player["player "+i].name != "?") { ++cnt; } }
                        var ind_space = key.indexOf(' ');
                        var number = key.substr(ind_space+1);
                        var $div = $("<div class=\"border container\"></div>");
                        $($div).attr('id', 'Game'+number);
                        $('#subGames').append($div);
                        var $name = $("<p style=\"display:inline;\">" + key.substr(0, 4) + " " + cnt_game + " - hosted by: " + host + "</p>");
                        ++cnt_game;
                        $('#Game'+number).append($name);
                        var $btn = $("<button class=\"btn\" style=\"float:right;\">Join Game</button>")
                        $($btn).attr('id', 'joinGameBtn' + number);
                        $($btn).attr('onclick', 'join('+ number + ')');
                        $('#Game' + number).append($btn);
                        var $count = $("<p style=\"float:right;\">"+cnt+"/4 Player</p>");
                        $('#Game' + number).append($count);
                        $('#subGames').append("<br>");
                    }
                }
            });
        });
    });
}