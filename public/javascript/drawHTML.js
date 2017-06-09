$(document).ready(function(){
    var GameNumber = 1;
    $( "body" ).delegate( "#newGameBtn", "click", function newGame() {
        createGame();
        var $div = $("<div class=\"border container\"></div>");
        $($div).attr('id', 'Game' + GameNumber);
        $('#subGames').append($div);
        var $name = $("<p style=\"display:inline;\">Game" + GameNumber + "</p>");
        $('#Game' + GameNumber).append($name);
        var $btn = $("<button class=\"btn joinbtn\" style=\"float:right;\">Join Game</button>")
        $($btn).attr('id', 'joinGameBtn' + GameNumber);
        $('#Game' + GameNumber).append($btn);
        var $count = $("<p style=\"float:right;\">X/Y Player</p>");
        $('#Game' + GameNumber).append($count);
        $('#subGames').append("<br>");
        GameNumber++;
        
    });

    $( "body" ).delegate( "#loginBtn", "click", function newGame() {
        gl_name = document.getElementById("input_username").value;
        $( "#view" ).load( "browse.html #games" );
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