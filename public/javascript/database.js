var score1 = 0;
var score2 = 0;

function setColor (x, y, color) {
    firebase.database().ref('Game '+gl_game+'/Map/x'+x+'y'+y).update({
        color: color
    });
}

function getColor (x, y) {
    return firebase.database().ref('Game '+gl_game+'/Map/x'+x+'y'+y).once('value').then(function(snapshot) {
        return snapshot.val().color;
    });
}

function countScore(color, old_color) {
    if (color == "red") { 
        ++score1;
        document.getElementById("score1").innerHTML = score1;
        document.getElementById("score1_prefix").innerHTML = gl_player_array[0]+" (rot): ";
    }
    else if (color == "green") {
        ++score2;
        document.getElementById("score2").innerHTML = score2;
        document.getElementById("score2_prefix").innerHTML = gl_player_array[1]+" (grün): ";
    }
    if (old_color != "rgb(255, 255, 255)") { decScore(old_color); }
}

function decScore(old_color) {
    if (old_color == "rgb(255, 0, 0)") {  // red 
        --score1;
        document.getElementById("score1").innerHTML = score1;
    }
    else if (old_color == "rgb(0, 128, 0)") {  // green
        --score2;
        document.getElementById("score2").innerHTML = score2;
    }
}

function getAvailable () {
    return firebase.database().ref('Available').once('value').then(function(snapshot) {
        return snapshot.val().Index;
    });
}

function changeAvailable(value) {
    firebase.database().ref('Available').once('value').then(function(snapshot) {
        firebase.database().ref('Available').update({
            Index: snapshot.val().Index + value
        });
    });
    
}

function inc_ready() {
    firebase.database().ref('Game '+gl_game+'/Ready').once('value').then(function(snapshot) {
        firebase.database().ref('Game '+gl_game+'/Ready').update({
            ready: snapshot.val().ready + 1
        });
    });
}

function startTimer() {
    // Set the date we're counting down to
    var countDownDate = new Date().getTime()+1000*62;

    // Update the count down every 1 second
    var intervall = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for seconds
        var seconds = Math.floor((distance % (1000 * 61)) / 1000);

        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = seconds + "s ";

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(intervall);
            document.getElementById("timer").innerHTML = "";
            closeGame();
        }
    }, 1000);
}