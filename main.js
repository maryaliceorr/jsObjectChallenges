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
    holderOneChallenge.innerHTML += "<h3>" + "Challenge 1: " + playerTAndN1[0] + "</h3>";
} else if (playerTAndN2[1] === winningScore) {
    holderOneChallenge.innerHTML += "<h3>" + "Challenge 1: " + playerTAndN2[0] + "</h3>";
} else {holderOneChallenge.innerHTML += "<h3>" + "Challenge 1: " + playerTAndN3[0] + "</h3>";
};
    
// Challenge #2 Find how many times did a team from a given country win the Champions League

var winnerList = [
    {season: '1999-2000', team: 'Real Madrid', country: 'Spain'},
    {season: '2000-2001', team: 'Bayern Munich', country: 'Germany'},
    {season: '2001-2002', team: 'Real Madrid', country: 'Spain'},
    {season: '2002-2003', team: 'Milan', country: 'Italy'},
    {season: '2003-2004', team: 'Porto', country: 'Portugal'},
    {season: '2004-2005', team: 'Liverpool', country: 'England'},
    {season: '2005-2006', team: 'Barcelona', country: 'Spain'},
    {season: '2006-2007', team: 'Milan', country: 'Italy'},
    {season: '2007-2008', team: 'Manchester United', country: 'England'},
    {season: '2008-2009', team: 'Barcelona', country: 'Spain'},
    {season: '2009-2010', team: 'Internazionale', country: 'Italy'},
    {season: '2010-2011', team: 'Barcelona', country: 'Spain'},
    {season: '2011-2012', team: 'Chelsea', country: 'England'},
    {season: '2012-2013', team: 'Bayern Munich', country: 'Germany'},
    {season: '2013-2014', team: 'Real Madrid', country: 'Spain'},
    {season: '2014-2015', team: 'Barcelona', country: 'Spain'},
    {season: '2015-2016', team: 'Real Madrid', country: 'Spain'},
    {season: '2016-2017', team: 'Real Madrid', country: 'Spain'}
];

var country = "Spain";

var winContainer = [];

var holderTwoChallenge = document.getElementById("challenge2");

for (var i=0; i<winnerList.length; i++) {
    if (winnerList[i].country === country) {
    winContainer.push(1);
    } else {
        console.log("didn't work");
    }
};

holderTwoChallenge.innerHTML = "<h3>" + "Challenge 2: " + winContainer.length + "</h3>";