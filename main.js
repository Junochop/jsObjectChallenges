//Challenge #1
var players = [
    { name: "Bob", scores: [10, 65] },
    { name: "Bill", scores: [10, 75] }, 
    { name: "Charlie", scores: [4, 35] }
]; // Displays "Bill"
var players2 = [
    { name: "Bob", scores: [15, 20] },
    { name: "Bill", scores: [10, 15] },
    { name: "Charlie", scores: [90, 10] }
]; // Displays "Charlie"

var finalScore1 = players[0].scores[0] + players[0].scores[1];
var finalScore2 = players[1].scores[0] + players[1].scores[1];
var finalScore3 = players[2].scores[0] + players[2].scores[1];

var domStringCh1 = document.getElementById("challenge1");

if (finalScore1 < 100 && finalScore1 >= finalScore2 && finalScore1 >= finalScore2){
    domStringCh1.innerHTML = players[0].name;
} else if (finalScore2 < 100 && finalScore2 >= finalScore1 && finalScore2 >= finalScore3){
    domStringCh1.innerHTML = players[1].name;
} else if(finalScore3 < 100 && finalScore3 > finalScore1 && finalScore3 > finalScore2) {
    domStringCh1.innerHTML = players[2].name;
} else {
    domStringCh1.innerHTML = "false";
}



    // for(var i = 0; i < players.length; i++){
    //     var finalScore = players[i].scores[0] + players[i].scores[1];
    //     console.log(players[i].name, finalScore);
    //     //sort
        
    // }

    //Challege 2
    