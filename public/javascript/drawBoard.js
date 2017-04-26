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
});