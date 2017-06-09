$(document).ready(function(){
    $( "body" ).delegate( "#loginBtn", "click", function newGame() {
        gl_name = document.getElementById("input_username").value;
        $( "#view" ).load( "browse.html #games", function(){
            var query = firebase.database().ref("/").orderByKey();
            query.once("value").then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var key = childSnapshot.key;
                    if (key != "Available" && key != "Highscore") {
                        var ind_space = key.indexOf(' ');
                        var number = key.substr(ind_space+1);
                        var $div = $("<div class=\"border container\"></div>");
                        $($div).attr('id', 'Game'+number);
                        $('#subGames').append($div);
                        var $name = $("<p style=\"display:inline;\">" + key + "</p>");
                        $('#Game'+number).append($name);
                        var $btn = $("<button class=\"btn\" style=\"float:right;\">Join Game</button>")
                        $($btn).attr('id', 'joinGameBtn' + number);
                        $('#Game' + number).append($btn);
                        var $count = $("<p style=\"float:right;\">X/Y Player</p>");
                        $('#Game' + number).append($count);
                        $('#subGames').append("<br>");
                    }
                });
            });
        });
        $('#login').load( 'blank.html');
    });

    $( "body" ).delegate( "#testBtn", "click", function includeBrowse() {
        $('#view').load( 'blank.html');
    });

    $( "body" ).delegate( "h1", "click", function includeBrowse() {
        $('#view').load( 'login.html');
    });

     $( "body" ).delegate( ".joinbtn", "click", function includeBrowse() {
        $('#view').load( 'lobby.html');
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