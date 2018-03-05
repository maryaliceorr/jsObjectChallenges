console.log("hello");


//Challenge #1 Wheel of Fortune

var players = [{
    name: "Bob",
    scores: [10, 65]
},
{
    name: "Bill",
    scores: [90, 5]
},
{
    name: "Charlie",
    scores: [40, 55]
}];

var holderOneChallenge = document.getElementById("challenge1");

var playerTotals = [];

var playerNames = [];

for (var i=0; i<players.length; i++) {
    playerTotals.push(players[i].scores[0] + players[i].scores[1]);
};
for (var i=0; i<players.length; i++) {
    playerNames.push(players[i].name);
};

var playerTAndN1 = [];
playerTAndN1[0] = playerNames[0];
playerTAndN1[1] = playerTotals[0];

var playerTAndN2 = [];
playerTAndN2[0] = playerNames[1];
playerTAndN2[1] = playerTotals[1];

var playerTAndN3 = [];
playerTAndN3[0] = playerNames[2];
playerTAndN3[1] = playerTotals[2];

var winningScore = Math.max.apply(null, playerTotals);


if (playerTAndN1[1] === winningScore) {
    holderOneChallenge.innerHTML += "<h3>" + playerTAndN1[0] + "</h3>";
} else if (playerTAndN2[1] === winningScore) {
    holderOneChallenge.innerHTML += "<h3>" + playerTAndN2[0] + "</h3>";
} else {holderOneChallenge.innerHTML += "<h3>" + playerTAndN3[0] + "</h3>";
};
    






