$(document).ready(function(){
    $('#newGameBtn').click(function newGame(){
        var $div = $("<div class=\"border container\"></div>");
        $($div).attr('id', 'Game' + 'GameNumber');
        $('#games').append($div);
        var $name = $("<p style=\"display:inline;\">Game" + 'GameNumber' + "</p>");
        $('#Game' + 'GameNumber').append($name);
        var $btn = $("<button class=\"btn\" style=\"float:right;\">Join Game</button>")
        $('#Game' + 'GameNumber').append($btn);
        var $count = $("<p style=\"float:right;\">X/Y Player</p>");
        $('#Game' + 'GameNumber').append($count);
        $('#games').append("<br>");
    });
});