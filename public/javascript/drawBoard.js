$(document).ready(function(){
    for(y = 0; y < 10; y++){
        for(x = 0; x < 10; x++){
            var $div = $("<div></div>");
            $($div).attr('class', 'field');
            $($div).attr('id', 'x'+x+'y'+y);
            $("#board").append($div);
        }
        $('#board').append("<br>");
    }

    createGame();

    setPlayerPosition_x(1, 0);
    setPlayerPosition_y(1, 0);
    setPlayerPosition_x(2, 9);
    setPlayerPosition_y(2, 0);

    setColor(0,0,"red");
    setColor(9,0,"green");
});