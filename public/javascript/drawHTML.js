$(document).ready(function(){
    $( "body" ).delegate( "#loginBtn", "click", function newGame() {
        gl_name = document.getElementById("input_username").value;
        listGames();
        $('#login').load( 'blank.html');
    });

    $( "body" ).delegate( "#newGameBtn", "click", function() {
        createGame();
        join(1);
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

    $( "body" ).delegate( ".joinbtn", "click", function (key, $(this).attr("value")) {
        join(key, $(this).attr("value"));
    });

    $( "body" ).delegate( ".rdybtn", "click", function includeBrowse() {
        $('#view').load( 'gameplay_test.html', function() {
            for(y = 0; y < 10; y++){
                for(x = 0; x < 10; x++){
                    var $div = $("<div></div>");
                    $($div).attr('class', 'field');
                    $($div).attr('id', 'x'+x+'y'+y);
                    $("#board").append($div);
                }
                $('#board').append("<br>");
            }
        });
    });
});

function join(key) {
    gl_game = key;
    $('#view').load('lobby.html');

    getPlayerName(2).then(function(name2) {
        getPlayerName(3).then(function(name3) {
            getPlayerName(4).then(function(name4) {
                if(name2 == '?'){
                    setPlayerName(2, gl_name);
                } else if(name3 == '?'){
                    setPlayerName(3, gl_name);
                } else if(name4 == '?'){
                    setPlayerName(4, gl_name);
                } else {
                    alert("Game full!");
                }
            });
        });
    });

}

function listGames(){
    $( "#view" ).load( "browse.html #games", function(){
        var query = firebase.database().ref("/").orderByKey();
        query.once("value").then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                if (key != "Available" && key != "Highscore") {
                    var host = childSnapshot.val().Player["player 1"].name;
                    var cnt = 0;
                    for(i=1;i<=4;++i) { if(childSnapshot.val().Player["player "+i].name != "?") { ++cnt; } }
                    var ind_space = key.indexOf(' ');
                    var number = key.substr(ind_space+1);
                    var $div = $("<div class=\"border container\"></div>");
                    $($div).attr('id', 'Game'+number);
                    $('#subGames').append($div);
                    var $name = $("<p style=\"display:inline;\">" + key + " hosted by: " + host + "</p>");
                    $('#Game'+number).append($name);
                    var $btn = $("<button class=\"btn\" style=\"float:right;\">Join Game</button>")
                    $($btn).attr('id', 'joinGameBtn' + number);
                    $($btn).attr('onclick', 'join('+ number + ')');
                    $('#Game' + number).append($btn);
                    var $count = $("<p style=\"float:right;\">"+cnt+"/4 Player</p>");
                    $('#Game' + number).append($count);
                    $('#subGames').append("<br>");
                }
            });
        });
    });
}