
function set_listen_ready() {
    var listen_ready = firebase.database().ref('Game '+gl_game+'/Ready');
    listen_ready.on('value', function(snapshot_ready) {
        var query = firebase.database().ref('Game '+gl_game+'/Player').orderByKey();
        query.once("value").then(function(snapshot_player) {
            gl_players = 1;
            if(snapshot_player.val()["player 2"].name != "?") { gl_players++; }
            if(snapshot_player.val()["player 3"].name != "?") { gl_players++; }
            if(snapshot_player.val()["player 4"].name != "?") { gl_players++; }
            
            if(snapshot_ready.val().ready == gl_players && gl_game_start == false) {
                var count = 3;
                function anim() {
                    if (count > 0) {
                        if (document.getElementById('countdown') !== null) {
                            document.getElementById('countdown').innerHTML=count;
                            count--;
                            setTimeout(anim, 1000);
                        }
                    }
                    else {
                        if (document.getElementById('countdown') !== null) {
                            document.getElementById('countdown').innerHTML='GO!';
                            setTimeout(anim, 1000);
                            startGame();
                        }
                    }
                }
                anim();
            }
        });
    });
}

function set_listen_join() {
    var listen_join = firebase.database().ref('Game '+gl_game+'/Player');
    listen_join.on('value', function(snapshot) {
        if(!gl_game_start && !gl_leave) {
            createLobby();
        }
    });
}

function set_listen_player(player) {
    if( player == 1) {
        var listen_p1 = firebase.database().ref('Game '+gl_game+'/Player/player 1');
        listen_p1.on('value', function(snapshot) {
            deletePlayerImg(1);
            document.getElementById('x'+snapshot.val().x+'y'+snapshot.val().y).innerHTML="<img src=\"/img/player1.gif\">";
        });
    }
    else if (player == 2) {
        var listen_p2 = firebase.database().ref('Game '+gl_game+'/Player/player 2');
        listen_p2.on('value', function(snapshot) {
            deletePlayerImg(2);
            document.getElementById('x'+snapshot.val().x+'y'+snapshot.val().y).innerHTML="<img src=\"/img/player2.gif\">";
        });
    }
    else if (player == 3) {
        var listen_p3 = firebase.database().ref('Game '+gl_game+'/Player/player 3');
        listen_p3.on('value', function(snapshot) {
            deletePlayerImg(3);
            document.getElementById('x'+snapshot.val().x+'y'+snapshot.val().y).innerHTML="<img src=\"/img/player3.gif\">";
        });
    }
    else if (player == 4) {
        var listen_p4 = firebase.database().ref('Game '+gl_game+'/Player/player 4');
        listen_p4.on('value', function(snapshot) {
            deletePlayerImg(4);
            document.getElementById('x'+snapshot.val().x+'y'+snapshot.val().y).innerHTML="<img src=\"/img/player4.gif\">";
        });
    }
}

function set_listen_map() {

/* ***** y0 ***** */

var listen_x0y0 = firebase.database().ref('Game '+gl_game+'/Map/x0y0');
listen_x0y0.on('value', function(snapshot) {
    getColor(0,0).then(function(color){
        countScore(color,$("#x0y0").css("backgroundColor"));
        $("#x0y0").css("backgroundColor", color);
    });
});

var listen_x1y0 = firebase.database().ref('Game '+gl_game+'/Map/x1y0');
listen_x1y0.on('value', function(snapshot) {
    getColor(1,0).then(function(color){
        countScore(color,$("#x1y0").css("backgroundColor"));
        $("#x1y0").css("backgroundColor", color);
    });
});

var listen_x2y0 = firebase.database().ref('Game '+gl_game+'/Map/x2y0');
listen_x2y0.on('value', function(snapshot) {
    getColor(2,0).then(function(color){
        countScore(color,$("#x2y0").css("backgroundColor"));
        $("#x2y0").css("backgroundColor", color);
    });
});

var listen_x3y0 = firebase.database().ref('Game '+gl_game+'/Map/x3y0');
listen_x3y0.on('value', function(snapshot) {
    getColor(3,0).then(function(color){
        countScore(color,$("#x3y0").css("backgroundColor"));
        $("#x3y0").css("backgroundColor", color);
    });
});

var listen_x4y0 = firebase.database().ref('Game '+gl_game+'/Map/x4y0');
listen_x4y0.on('value', function(snapshot) {
    getColor(4,0).then(function(color){
        countScore(color,$("#x4y0").css("backgroundColor"));
        $("#x4y0").css("backgroundColor", color);
    });
});

var listen_x5y0 = firebase.database().ref('Game '+gl_game+'/Map/x5y0');
listen_x5y0.on('value', function(snapshot) {
    getColor(5,0).then(function(color){
        countScore(color,$("#x5y0").css("backgroundColor"));
        $("#x5y0").css("backgroundColor", color);
    });
});

var listen_x6y0 = firebase.database().ref('Game '+gl_game+'/Map/x6y0');
listen_x6y0.on('value', function(snapshot) {
    getColor(6,0).then(function(color){
        countScore(color,$("#x6y0").css("backgroundColor"));
        $("#x6y0").css("backgroundColor", color);
    });
});

var listen_x7y0 = firebase.database().ref('Game '+gl_game+'/Map/x7y0');
listen_x7y0.on('value', function(snapshot) {
    getColor(7,0).then(function(color){
        countScore(color,$("#x7y0").css("backgroundColor"));
        $("#x7y0").css("backgroundColor", color);
    });
});

var listen_x8y0 = firebase.database().ref('Game '+gl_game+'/Map/x8y0');
listen_x8y0.on('value', function(snapshot) {
    getColor(8,0).then(function(color){
        countScore(color,$("#x8y0").css("backgroundColor"));
        $("#x8y0").css("backgroundColor", color);
    });
});

var listen_x9y0 = firebase.database().ref('Game '+gl_game+'/Map/x9y0');
listen_x9y0.on('value', function(snapshot) {
    getColor(9,0).then(function(color){
        countScore(color,$("#x9y0").css("backgroundColor"));
        $("#x9y0").css("backgroundColor", color);
    });
});

/* ***** y1 ***** */

var listen_x0y1 = firebase.database().ref('Game '+gl_game+'/Map/x0y1');
listen_x0y1.on('value', function(snapshot) {
    getColor(0,1).then(function(color){
        countScore(color,$("#x0y1").css("backgroundColor"));
        $("#x0y1").css("backgroundColor", color);
    });
});

var listen_x1y1 = firebase.database().ref('Game '+gl_game+'/Map/x1y1');
listen_x1y1.on('value', function(snapshot) {
    getColor(1,1).then(function(color){
        countScore(color,$("#x1y1").css("backgroundColor"));
        $("#x1y1").css("backgroundColor", color);
    });
});

var listen_x2y1 = firebase.database().ref('Game '+gl_game+'/Map/x2y1');
listen_x2y1.on('value', function(snapshot) {
    getColor(2,1).then(function(color){
        countScore(color,$("#x2y1").css("backgroundColor"));
        $("#x2y1").css("backgroundColor", color);
    });
});

var listen_x3y1 = firebase.database().ref('Game '+gl_game+'/Map/x3y1');
listen_x3y1.on('value', function(snapshot) {
    getColor(3,1).then(function(color){
        countScore(color,$("#x3y1").css("backgroundColor"));
        $("#x3y1").css("backgroundColor", color);
    });
});

var listen_x4y1 = firebase.database().ref('Game '+gl_game+'/Map/x4y1');
listen_x4y1.on('value', function(snapshot) {
    getColor(4,1).then(function(color){
        countScore(color,$("#x4y1").css("backgroundColor"));
        $("#x4y1").css("backgroundColor", color);
    });
});

var listen_x5y1 = firebase.database().ref('Game '+gl_game+'/Map/x5y1');
listen_x5y1.on('value', function(snapshot) {
    getColor(5,1).then(function(color){
        countScore(color,$("#x5y1").css("backgroundColor"));
        $("#x5y1").css("backgroundColor", color);
    });
});

var listen_x6y1 = firebase.database().ref('Game '+gl_game+'/Map/x6y1');
listen_x6y1.on('value', function(snapshot) {
    getColor(6,1).then(function(color){
        countScore(color,$("#x6y1").css("backgroundColor"));
        $("#x6y1").css("backgroundColor", color);
    });
});

var listen_x7y1 = firebase.database().ref('Game '+gl_game+'/Map/x7y1');
listen_x7y1.on('value', function(snapshot) {
    getColor(7,1).then(function(color){
        countScore(color,$("#x7y1").css("backgroundColor"));
        $("#x7y1").css("backgroundColor", color);
    });
});

var listen_x8y1 = firebase.database().ref('Game '+gl_game+'/Map/x8y1');
listen_x8y1.on('value', function(snapshot) {
    getColor(8,1).then(function(color){
        countScore(color,$("#x8y1").css("backgroundColor"));
        $("#x8y1").css("backgroundColor", color);
    });
});

var listen_x9y1 = firebase.database().ref('Game '+gl_game+'/Map/x9y1');
listen_x9y1.on('value', function(snapshot) {
    getColor(9,1).then(function(color){
        countScore(color,$("#x9y1").css("backgroundColor"));
        $("#x9y1").css("backgroundColor", color);
    });
});

/* ***** y2 ***** */

var listen_x0y2 = firebase.database().ref('Game '+gl_game+'/Map/x0y2');
listen_x0y2.on('value', function(snapshot) {
    getColor(0,2).then(function(color){
        countScore(color,$("#x0y2").css("backgroundColor"));
        $("#x0y2").css("backgroundColor", color);
    });
});

var listen_x1y2 = firebase.database().ref('Game '+gl_game+'/Map/x1y2');
listen_x1y2.on('value', function(snapshot) {
    getColor(1,2).then(function(color){
        countScore(color,$("#x1y2").css("backgroundColor"));
        $("#x1y2").css("backgroundColor", color);
    });
});

var listen_x2y2 = firebase.database().ref('Game '+gl_game+'/Map/x2y2');
listen_x2y2.on('value', function(snapshot) {
    getColor(2,2).then(function(color){
        countScore(color,$("#x2y2").css("backgroundColor"));
        $("#x2y2").css("backgroundColor", color);
    });
});

var listen_x3y2 = firebase.database().ref('Game '+gl_game+'/Map/x3y2');
listen_x3y2.on('value', function(snapshot) {
    getColor(3,2).then(function(color){
        countScore(color,$("#x3y2").css("backgroundColor"));
        $("#x3y2").css("backgroundColor", color);
    });
});

var listen_x4y2 = firebase.database().ref('Game '+gl_game+'/Map/x4y2');
listen_x4y2.on('value', function(snapshot) {
    getColor(4,2).then(function(color){
        countScore(color,$("#x4y2").css("backgroundColor"));
        $("#x4y2").css("backgroundColor", color);
    });
});

var listen_x5y2 = firebase.database().ref('Game '+gl_game+'/Map/x5y2');
listen_x5y2.on('value', function(snapshot) {
    getColor(5,2).then(function(color){
        countScore(color,$("#x5y2").css("backgroundColor"));
        $("#x5y2").css("backgroundColor", color);
    });
});

var listen_x6y2 = firebase.database().ref('Game '+gl_game+'/Map/x6y2');
listen_x6y2.on('value', function(snapshot) {
    getColor(6,2).then(function(color){
        countScore(color,$("#x6y2").css("backgroundColor"));
        $("#x6y2").css("backgroundColor", color);
    });
});

var listen_x7y2 = firebase.database().ref('Game '+gl_game+'/Map/x7y2');
listen_x7y2.on('value', function(snapshot) {
    getColor(7,2).then(function(color){
        countScore(color,$("#x7y2").css("backgroundColor"));
        $("#x7y2").css("backgroundColor", color);
    });
});

var listen_x8y2 = firebase.database().ref('Game '+gl_game+'/Map/x8y2');
listen_x8y2.on('value', function(snapshot) {
    getColor(8,2).then(function(color){
        countScore(color,$("#x8y2").css("backgroundColor"));
        $("#x8y2").css("backgroundColor", color);
    });
});

var listen_x9y2 = firebase.database().ref('Game '+gl_game+'/Map/x9y2');
listen_x9y2.on('value', function(snapshot) {
    getColor(9,2).then(function(color){
        countScore(color,$("#x9y2").css("backgroundColor"));
        $("#x9y2").css("backgroundColor", color);
    });
});

/* ***** y3 ***** */

var listen_x0y3 = firebase.database().ref('Game '+gl_game+'/Map/x0y3');
listen_x0y3.on('value', function(snapshot) {
    getColor(0,3).then(function(color){
        countScore(color,$("#x0y3").css("backgroundColor"));
        $("#x0y3").css("backgroundColor", color);
    });
});

var listen_x1y3 = firebase.database().ref('Game '+gl_game+'/Map/x1y3');
listen_x1y3.on('value', function(snapshot) {
    getColor(1,3).then(function(color){
        countScore(color,$("#x1y3").css("backgroundColor"));
        $("#x1y3").css("backgroundColor", color);
    });
});

var listen_x2y3 = firebase.database().ref('Game '+gl_game+'/Map/x2y3');
listen_x2y3.on('value', function(snapshot) {
    getColor(2,3).then(function(color){
        countScore(color,$("#x2y3").css("backgroundColor"));
        $("#x2y3").css("backgroundColor", color);
    });
});

var listen_x3y3 = firebase.database().ref('Game '+gl_game+'/Map/x3y3');
listen_x3y3.on('value', function(snapshot) {
    getColor(3,3).then(function(color){
        countScore(color,$("#x3y3").css("backgroundColor"));
        $("#x3y3").css("backgroundColor", color);
    });
});

var listen_x4y3 = firebase.database().ref('Game '+gl_game+'/Map/x4y3');
listen_x4y3.on('value', function(snapshot) {
    getColor(4,3).then(function(color){
        countScore(color,$("#x4y3").css("backgroundColor"));
        $("#x4y3").css("backgroundColor", color);
    });
});

var listen_x5y3 = firebase.database().ref('Game '+gl_game+'/Map/x5y3');
listen_x5y3.on('value', function(snapshot) {
    getColor(5,3).then(function(color){
        countScore(color,$("#x5y3").css("backgroundColor"));
        $("#x5y3").css("backgroundColor", color);
    });
});

var listen_x6y3 = firebase.database().ref('Game '+gl_game+'/Map/x6y3');
listen_x6y3.on('value', function(snapshot) {
    getColor(6,3).then(function(color){
        countScore(color,$("#x6y3").css("backgroundColor"));
        $("#x6y3").css("backgroundColor", color);
    });
});

var listen_x7y3 = firebase.database().ref('Game '+gl_game+'/Map/x7y3');
listen_x7y3.on('value', function(snapshot) {
    getColor(7,3).then(function(color){
        countScore(color,$("#x7y3").css("backgroundColor"));
        $("#x7y3").css("backgroundColor", color);
    });
});

var listen_x8y3 = firebase.database().ref('Game '+gl_game+'/Map/x8y3');
listen_x8y3.on('value', function(snapshot) {
    getColor(8,3).then(function(color){
        countScore(color,$("#x8y3").css("backgroundColor"));
        $("#x8y3").css("backgroundColor", color);
    });
});

var listen_x9y3 = firebase.database().ref('Game '+gl_game+'/Map/x9y3');
listen_x9y3.on('value', function(snapshot) {
    getColor(9,3).then(function(color){
        countScore(color,$("#x9y3").css("backgroundColor"));
        $("#x9y3").css("backgroundColor", color);
    });
});

/* ***** y4 ***** */

var listen_x0y4 = firebase.database().ref('Game '+gl_game+'/Map/x0y4');
listen_x0y4.on('value', function(snapshot) {
    getColor(0,4).then(function(color){
        countScore(color,$("#x0y4").css("backgroundColor"));
        $("#x0y4").css("backgroundColor", color);
    });
});

var listen_x1y4 = firebase.database().ref('Game '+gl_game+'/Map/x1y4');
listen_x1y4.on('value', function(snapshot) {
    getColor(1,4).then(function(color){
        countScore(color,$("#x1y4").css("backgroundColor"));
        $("#x1y4").css("backgroundColor", color);
    });
});

var listen_x2y4 = firebase.database().ref('Game '+gl_game+'/Map/x2y4');
listen_x2y4.on('value', function(snapshot) {
    getColor(2,4).then(function(color){
        countScore(color,$("#x2y4").css("backgroundColor"));
        $("#x2y4").css("backgroundColor", color);
    });
});

var listen_x3y4 = firebase.database().ref('Game '+gl_game+'/Map/x3y4');
listen_x3y4.on('value', function(snapshot) {
    getColor(3,4).then(function(color){
        countScore(color,$("#x3y4").css("backgroundColor"));
        $("#x3y4").css("backgroundColor", color);
    });
});

var listen_x4y4 = firebase.database().ref('Game '+gl_game+'/Map/x4y4');
listen_x4y4.on('value', function(snapshot) {
    getColor(4,4).then(function(color){
        countScore(color,$("#x4y4").css("backgroundColor"));
        $("#x4y4").css("backgroundColor", color);
    });
});

var listen_x5y4 = firebase.database().ref('Game '+gl_game+'/Map/x5y4');
listen_x5y4.on('value', function(snapshot) {
    getColor(5,4).then(function(color){
        countScore(color,$("#x5y4").css("backgroundColor"));
        $("#x5y4").css("backgroundColor", color);
    });
});

var listen_x6y4 = firebase.database().ref('Game '+gl_game+'/Map/x6y4');
listen_x6y4.on('value', function(snapshot) {
    getColor(6,4).then(function(color){
        countScore(color,$("#x6y4").css("backgroundColor"));
        $("#x6y4").css("backgroundColor", color);
    });
});

var listen_x7y4 = firebase.database().ref('Game '+gl_game+'/Map/x7y4');
listen_x7y4.on('value', function(snapshot) {
    getColor(7,4).then(function(color){
        countScore(color,$("#x7y4").css("backgroundColor"));
        $("#x7y4").css("backgroundColor", color);
    });
});

var listen_x8y4 = firebase.database().ref('Game '+gl_game+'/Map/x8y4');
listen_x8y4.on('value', function(snapshot) {
    getColor(8,4).then(function(color){
        countScore(color,$("#x8y4").css("backgroundColor"));
        $("#x8y4").css("backgroundColor", color);
    });
});

var listen_x9y4 = firebase.database().ref('Game '+gl_game+'/Map/x9y4');
listen_x9y4.on('value', function(snapshot) {
    getColor(9,4).then(function(color){
        countScore(color,$("#x9y4").css("backgroundColor"));
        $("#x9y4").css("backgroundColor", color);
    });
});

/* ***** y3 ***** */

var listen_x0y5 = firebase.database().ref('Game '+gl_game+'/Map/x0y5');
listen_x0y5.on('value', function(snapshot) {
    getColor(0,5).then(function(color){
        countScore(color,$("#x0y5").css("backgroundColor"));
        $("#x0y5").css("backgroundColor", color);
    });
});

var listen_x1y5 = firebase.database().ref('Game '+gl_game+'/Map/x1y5');
listen_x1y5.on('value', function(snapshot) {
    getColor(1,5).then(function(color){
        countScore(color,$("#x1y5").css("backgroundColor"));
        $("#x1y5").css("backgroundColor", color);
    });
});

var listen_x2y5 = firebase.database().ref('Game '+gl_game+'/Map/x2y5');
listen_x2y5.on('value', function(snapshot) {
    getColor(2,5).then(function(color){
        countScore(color,$("#x2y5").css("backgroundColor"));
        $("#x2y5").css("backgroundColor", color);
    });
});

var listen_x3y5 = firebase.database().ref('Game '+gl_game+'/Map/x3y5');
listen_x3y5.on('value', function(snapshot) {
    getColor(3,5).then(function(color){
        countScore(color,$("#x3y5").css("backgroundColor"));
        $("#x3y5").css("backgroundColor", color);
    });
});

var listen_x4y5 = firebase.database().ref('Game '+gl_game+'/Map/x4y5');
listen_x4y5.on('value', function(snapshot) {
    getColor(4,5).then(function(color){
        countScore(color,$("#x4y5").css("backgroundColor"));
        $("#x4y5").css("backgroundColor", color);
    });
});

var listen_x5y5 = firebase.database().ref('Game '+gl_game+'/Map/x5y5');
listen_x5y5.on('value', function(snapshot) {
    getColor(5,5).then(function(color){
        countScore(color,$("#x5y5").css("backgroundColor"));
        $("#x5y5").css("backgroundColor", color);
    });
});

var listen_x6y5 = firebase.database().ref('Game '+gl_game+'/Map/x6y5');
listen_x6y5.on('value', function(snapshot) {
    getColor(6,5).then(function(color){
        countScore(color,$("#x6y5").css("backgroundColor"));
        $("#x6y5").css("backgroundColor", color);
    });
});

var listen_x7y5 = firebase.database().ref('Game '+gl_game+'/Map/x7y5');
listen_x7y5.on('value', function(snapshot) {
    getColor(7,5).then(function(color){
        countScore(color,$("#x7y5").css("backgroundColor"));
        $("#x7y5").css("backgroundColor", color);
    });
});

var listen_x8y5 = firebase.database().ref('Game '+gl_game+'/Map/x8y5');
listen_x8y5.on('value', function(snapshot) {
    getColor(8,5).then(function(color){
        countScore(color,$("#x8y5").css("backgroundColor"));
        $("#x8y5").css("backgroundColor", color);
    });
});

var listen_x9y5 = firebase.database().ref('Game '+gl_game+'/Map/x9y5');
listen_x9y5.on('value', function(snapshot) {
    getColor(9,5).then(function(color){
        countScore(color,$("#x9y5").css("backgroundColor"));
        $("#x9y5").css("backgroundColor", color);
    });
});

/* ***** y6 ***** */

var listen_x0y6 = firebase.database().ref('Game '+gl_game+'/Map/x0y6');
listen_x0y6.on('value', function(snapshot) {
    getColor(0,6).then(function(color){
        countScore(color,$("#x0y6").css("backgroundColor"));
        $("#x0y6").css("backgroundColor", color);
    });
});

var listen_x1y6 = firebase.database().ref('Game '+gl_game+'/Map/x1y6');
listen_x1y6.on('value', function(snapshot) {
    getColor(1,6).then(function(color){
        countScore(color,$("#x1y6").css("backgroundColor"));
        $("#x1y6").css("backgroundColor", color);
    });
});

var listen_x2y6 = firebase.database().ref('Game '+gl_game+'/Map/x2y6');
listen_x2y6.on('value', function(snapshot) {
    getColor(2,6).then(function(color){
        countScore(color,$("#x2y6").css("backgroundColor"));
        $("#x2y6").css("backgroundColor", color);
    });
});

var listen_x3y6 = firebase.database().ref('Game '+gl_game+'/Map/x3y6');
listen_x3y6.on('value', function(snapshot) {
    getColor(3,6).then(function(color){
        countScore(color,$("#x3y6").css("backgroundColor"));
        $("#x3y6").css("backgroundColor", color);
    });
});

var listen_x4y6 = firebase.database().ref('Game '+gl_game+'/Map/x4y6');
listen_x4y6.on('value', function(snapshot) {
    getColor(4,6).then(function(color){
        countScore(color,$("#x4y6").css("backgroundColor"));
        $("#x4y6").css("backgroundColor", color);
    });
});

var listen_x5y6 = firebase.database().ref('Game '+gl_game+'/Map/x5y6');
listen_x5y6.on('value', function(snapshot) {
    getColor(5,6).then(function(color){
        countScore(color,$("#x5y6").css("backgroundColor"));
        $("#x5y6").css("backgroundColor", color);
    });
});

var listen_x6y6 = firebase.database().ref('Game '+gl_game+'/Map/x6y6');
listen_x6y6.on('value', function(snapshot) {
    getColor(6,6).then(function(color){
        countScore(color,$("#x6y6").css("backgroundColor"));
        $("#x6y6").css("backgroundColor", color);
    });
});

var listen_x7y6 = firebase.database().ref('Game '+gl_game+'/Map/x7y6');
listen_x7y6.on('value', function(snapshot) {
    getColor(7,6).then(function(color){
        countScore(color,$("#x7y6").css("backgroundColor"));
        $("#x7y6").css("backgroundColor", color);
    });
});

var listen_x8y6 = firebase.database().ref('Game '+gl_game+'/Map/x8y6');
listen_x8y6.on('value', function(snapshot) {
    getColor(8,6).then(function(color){
        countScore(color,$("#x8y6").css("backgroundColor"));
        $("#x8y6").css("backgroundColor", color);
    });
});

var listen_x9y6 = firebase.database().ref('Game '+gl_game+'/Map/x9y6');
listen_x9y6.on('value', function(snapshot) {
    getColor(9,6).then(function(color){
        countScore(color,$("#x9y6").css("backgroundColor"));
        $("#x9y6").css("backgroundColor", color);
    });
});

/* ***** y7 ***** */

var listen_x0y7 = firebase.database().ref('Game '+gl_game+'/Map/x0y7');
listen_x0y7.on('value', function(snapshot) {
    getColor(0,7).then(function(color){
        countScore(color,$("#x0y7").css("backgroundColor"));
        $("#x0y7").css("backgroundColor", color);
    });
});

var listen_x1y7 = firebase.database().ref('Game '+gl_game+'/Map/x1y7');
listen_x1y7.on('value', function(snapshot) {
    getColor(1,7).then(function(color){
        countScore(color,$("#x1y7").css("backgroundColor"));
        $("#x1y7").css("backgroundColor", color);
    });
});

var listen_x2y7 = firebase.database().ref('Game '+gl_game+'/Map/x2y7');
listen_x2y7.on('value', function(snapshot) {
    getColor(2,7).then(function(color){
        countScore(color,$("#x2y7").css("backgroundColor"));
        $("#x2y7").css("backgroundColor", color);
    });
});

var listen_x3y7 = firebase.database().ref('Game '+gl_game+'/Map/x3y7');
listen_x3y7.on('value', function(snapshot) {
    getColor(3,7).then(function(color){
        countScore(color,$("#x3y7").css("backgroundColor"));
        $("#x3y7").css("backgroundColor", color);
    });
});

var listen_x4y7 = firebase.database().ref('Game '+gl_game+'/Map/x4y7');
listen_x4y7.on('value', function(snapshot) {
    getColor(4,7).then(function(color){
        countScore(color,$("#x4y7").css("backgroundColor"));
        $("#x4y7").css("backgroundColor", color);
    });
});

var listen_x5y7 = firebase.database().ref('Game '+gl_game+'/Map/x5y7');
listen_x5y7.on('value', function(snapshot) {
    getColor(5,7).then(function(color){
        countScore(color,$("#x5y7").css("backgroundColor"));
        $("#x5y7").css("backgroundColor", color);
    });
});

var listen_x6y7 = firebase.database().ref('Game '+gl_game+'/Map/x6y7');
listen_x6y7.on('value', function(snapshot) {
    getColor(6,7).then(function(color){
        countScore(color,$("#x6y7").css("backgroundColor"));
        $("#x6y7").css("backgroundColor", color);
    });
});

var listen_x7y7 = firebase.database().ref('Game '+gl_game+'/Map/x7y7');
listen_x7y7.on('value', function(snapshot) {
    getColor(7,7).then(function(color){
        countScore(color,$("#x7y7").css("backgroundColor"));
        $("#x7y7").css("backgroundColor", color);
    });
});

var listen_x8y7 = firebase.database().ref('Game '+gl_game+'/Map/x8y7');
listen_x8y7.on('value', function(snapshot) {
    getColor(8,7).then(function(color){
        countScore(color,$("#x8y7").css("backgroundColor"));
        $("#x8y7").css("backgroundColor", color);
    });
});

var listen_x9y7 = firebase.database().ref('Game '+gl_game+'/Map/x9y7');
listen_x9y7.on('value', function(snapshot) {
    getColor(9,7).then(function(color){
        countScore(color,$("#x9y7").css("backgroundColor"));
        $("#x9y7").css("backgroundColor", color);
    });
});

/* ***** y8 ***** */

var listen_x0y8 = firebase.database().ref('Game '+gl_game+'/Map/x0y8');
listen_x0y8.on('value', function(snapshot) {
    getColor(0,8).then(function(color){
        countScore(color,$("#x0y8").css("backgroundColor"));
        $("#x0y8").css("backgroundColor", color);
    });
});

var listen_x1y8 = firebase.database().ref('Game '+gl_game+'/Map/x1y8');
listen_x1y8.on('value', function(snapshot) {
    getColor(1,8).then(function(color){
        countScore(color,$("#x1y8").css("backgroundColor"));
        $("#x1y8").css("backgroundColor", color);
    });
});

var listen_x2y8 = firebase.database().ref('Game '+gl_game+'/Map/x2y8');
listen_x2y8.on('value', function(snapshot) {
    getColor(2,8).then(function(color){
        countScore(color,$("#x2y8").css("backgroundColor"));
        $("#x2y8").css("backgroundColor", color);
    });
});

var listen_x3y8 = firebase.database().ref('Game '+gl_game+'/Map/x3y8');
listen_x3y8.on('value', function(snapshot) {
    getColor(3,8).then(function(color){
        countScore(color,$("#x3y8").css("backgroundColor"));
        $("#x3y8").css("backgroundColor", color);
    });
});

var listen_x4y8 = firebase.database().ref('Game '+gl_game+'/Map/x4y8');
listen_x4y8.on('value', function(snapshot) {
    getColor(4,8).then(function(color){
        countScore(color,$("#x4y8").css("backgroundColor"));
        $("#x4y8").css("backgroundColor", color);
    });
});

var listen_x5y8 = firebase.database().ref('Game '+gl_game+'/Map/x5y8');
listen_x5y8.on('value', function(snapshot) {
    getColor(5,8).then(function(color){
        countScore(color,$("#x5y8").css("backgroundColor"));
        $("#x5y8").css("backgroundColor", color);
    });
});

var listen_x6y8 = firebase.database().ref('Game '+gl_game+'/Map/x6y8');
listen_x6y8.on('value', function(snapshot) {
    getColor(6,8).then(function(color){
        countScore(color,$("#x6y8").css("backgroundColor"));
        $("#x6y8").css("backgroundColor", color);
    });
});

var listen_x7y8 = firebase.database().ref('Game '+gl_game+'/Map/x7y8');
listen_x7y8.on('value', function(snapshot) {
    getColor(7,8).then(function(color){
        countScore(color,$("#x7y8").css("backgroundColor"));
        $("#x7y8").css("backgroundColor", color);
    });
});

var listen_x8y8 = firebase.database().ref('Game '+gl_game+'/Map/x8y8');
listen_x8y8.on('value', function(snapshot) {
    getColor(8,8).then(function(color){
        countScore(color,$("#x8y8").css("backgroundColor"));
        $("#x8y8").css("backgroundColor", color);
    });
});

var listen_x9y8 = firebase.database().ref('Game '+gl_game+'/Map/x9y8');
listen_x9y8.on('value', function(snapshot) {
    getColor(9,8).then(function(color){
        countScore(color,$("#x9y8").css("backgroundColor"));
        $("#x9y8").css("backgroundColor", color);
    });
});

/* ***** y9 ***** */

var listen_x0y9 = firebase.database().ref('Game '+gl_game+'/Map/x0y9');
listen_x0y9.on('value', function(snapshot) {
    getColor(0,9).then(function(color){
        countScore(color,$("#x0y9").css("backgroundColor"));
        $("#x0y9").css("backgroundColor", color);
    });
});

var listen_x1y9 = firebase.database().ref('Game '+gl_game+'/Map/x1y9');
listen_x1y9.on('value', function(snapshot) {
    getColor(1,9).then(function(color){
        countScore(color,$("#x1y9").css("backgroundColor"));
        $("#x1y9").css("backgroundColor", color);
    });
});

var listen_x2y9 = firebase.database().ref('Game '+gl_game+'/Map/x2y9');
listen_x2y9.on('value', function(snapshot) {
    getColor(2,9).then(function(color){
        countScore(color,$("#x2y9").css("backgroundColor"));
        $("#x2y9").css("backgroundColor", color);
    });
});

var listen_x3y9 = firebase.database().ref('Game '+gl_game+'/Map/x3y9');
listen_x3y9.on('value', function(snapshot) {
    getColor(3,9).then(function(color){
        countScore(color,$("#x3y9").css("backgroundColor"));
        $("#x3y9").css("backgroundColor", color);
    });
});

var listen_x4y9 = firebase.database().ref('Game '+gl_game+'/Map/x4y9');
listen_x4y9.on('value', function(snapshot) {
    getColor(4,9).then(function(color){
        countScore(color,$("#x4y9").css("backgroundColor"));
        $("#x4y9").css("backgroundColor", color);
    });
});

var listen_x5y9 = firebase.database().ref('Game '+gl_game+'/Map/x5y9');
listen_x5y9.on('value', function(snapshot) {
    getColor(5,9).then(function(color){
        countScore(color,$("#x5y9").css("backgroundColor"));
        $("#x5y9").css("backgroundColor", color);
    });
});

var listen_x6y9 = firebase.database().ref('Game '+gl_game+'/Map/x6y9');
listen_x6y9.on('value', function(snapshot) {
    getColor(6,9).then(function(color){
        countScore(color,$("#x6y9").css("backgroundColor"));
        $("#x6y9").css("backgroundColor", color);
    });
});

var listen_x7y9 = firebase.database().ref('Game '+gl_game+'/Map/x7y9');
listen_x7y9.on('value', function(snapshot) {
    getColor(7,9).then(function(color){
        countScore(color,$("#x7y9").css("backgroundColor"));
        $("#x7y9").css("backgroundColor", color);
    });
});

var listen_x8y9 = firebase.database().ref('Game '+gl_game+'/Map/x8y9');
listen_x8y9.on('value', function(snapshot) {
    getColor(8,9).then(function(color){
        countScore(color,$("#x8y9").css("backgroundColor"));
        $("#x8y9").css("backgroundColor", color);
    });
});

var listen_x9y9 = firebase.database().ref('Game '+gl_game+'/Map/x9y9');
listen_x9y9.on('value', function(snapshot) {
    getColor(9,9).then(function(color){
        countScore(color,$("#x9y9").css("backgroundColor"));
        $("#x9y9").css("backgroundColor", color);
    });
});

}