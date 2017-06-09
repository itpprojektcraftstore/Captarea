$(document).ready(function(){
    var GameNumber = 1;
    $( "body" ).delegate( "#newGameBtn", "click", function newGame() {
        var $div = $("<div class=\"border container\"></div>");
        $($div).attr('id', 'Game' + GameNumber);
        $('#subGames').append($div);
        var $name = $("<p style=\"display:inline;\">Game" + GameNumber + "</p>");
        $('#Game' + GameNumber).append($name);
        var $btn = $("<button class=\"btn\" style=\"float:right;\">Join Game</button>")
        $($btn).attr('id', 'joinGameBtn');
        $('#Game' + GameNumber).append($btn);
        var $count = $("<p style=\"float:right;\">X/Y Player</p>");
        $('#Game' + GameNumber).append($count);
        $('#subGames').append("<br>");
        GameNumber++;
    });

    $( "body" ).delegate( "#loginBtn", "click", function newGame() {
        $( "#view" ).load( "browse.html #games" );
        $('#login').load( 'blank.html');
    });

    $( "body" ).delegate( "#testBtn", "click", function includeBrowse() {
        $('#view').load( 'blank.html');
    });

    $( "body" ).delegate( "h1", "click", function includeBrowse() {
        $('#view').load( 'login.html');
    });

     $( "body" ).delegate( "#joinGameBtn", "click", function includeBrowse() {
        $('#view').load( 'lobby.html');
    });

    $( "body" ).delegate( "#p1ready", "click", function includeBrowse() {
        $('#view').load( 'gameplay_test.html');
    });

});