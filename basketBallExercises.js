// ## Basketball Players

// Given an array of basketball players stored as JavaScript objects:


var players = [
    {
        name: 'Paul Millsap',
        position: 'PF',
        avgMinutesPlayed: 36,
        avgPoints: 16.4,
        avgRebounds: 9.4,
        starter: true
    },
    {
        name: 'Jeff Teague',
        position: 'PG',
        avgMinutesPlayed: 28.6,
        avgPoints: 15.6,
        avgRebounds: 1.9,
        starter: true
    },
    {
        name: 'Al Horford',
        position: 'C',
        avgMinutesPlayed: 32,
        avgPoints: 13.2,
        avgRebounds: 6.8,
        starter: true
    },
    {
        name: 'Kent Bazemore',
        position: 'SF',
        avgMinutesPlayed: 31.8,
        avgPoints: 12,
        avgRebounds: 6.6,
        starter: true
    },
    {
        name: 'Kyle Korver',
        position: 'SG',
        avgMinutesPlayed: 32.4,
        avgPoints: 11.2,
        avgRebounds: 4.9,
        starter: true
    },
    {
        name: 'Dennis Schroder',
        position: 'PG',
        avgMinutesPlayed: 18.3,
        avgPoints: 10.7,
        avgRebounds: 1.8,
        starter: false
    },
    {
        name: 'Kris Humphries',
        position: 'PF',
        avgMinutesPlayed: 14.7,
        avgPoints: 9.7,
        avgRebounds: 5.7,
        starter: false
    },
    {
        name: 'Mike Scott',
        position: 'PF',
        avgMinutesPlayed: 17.6,
        avgPoints: 7.0,
        avgRebounds: 3.6,
        starter: false
    },
    {
        name: 'Thabo Sefolosha',
        position: 'SF',
        avgMinutesPlayed: 18.9,
        avgPoints: 4.8,
        avgRebounds: 3.9,
        starter: false
    },
    {
        name: 'Mike Muscala',
        position: 'PF',
        avgMinutesPlayed: 7.4,
        avgPoints: 2.7,
        avgRebounds: 1.9,
        starter: false
    },
    {
        name: 'Tim Hardaway Jr.',
        position: 'SG',
        avgMinutesPlayed: 9.7,
        avgPoints: 2.2,
        avgRebounds: 1.0,
        starter: false
    },
    {
        name: 'Lamar Patterson',
        position: 'SG',
        avgMinutesPlayed: 5.0,
        avgPoints: 1.5,
        avgRebounds: 1.3,
        starter: false
    },
    {
        name: 'Kirk Hinrich',
        position: 'SG',
        avgMinutesPlayed: 4.5,
        avgPoints: 0.8,
        avgRebounds: 0.7,
        starter: false
    }
];

//EXAMPLE:
// var avgOfAvgMinutes = 0;
// for (i = 0; i < players.length; i++) {
//     avgOfAvgMinutes += players[i].avgMinutesPlayed;
//     console.log(players[i].avgMinutesPlayed);
// }
// avgOfAvgMinutes / players.length;

// * Print the average playing time of the players. IS THERE SYNTAX FOR DOING THIS WITH A REUSABLE FUNCTION, OR DOES THE SYNTAX NEED TO BE SPECIFIC AND POINT TO EXACT KEYS?
function averagePlayTime(players) {
    var avgMins = 0;
    var totalAvg = 0;
    for (i = 0; i < players.length; i++) {
        avgMins += players[i].avgMinutesPlayed;
    }
    totalAvg = avgMins / players.length;
    return totalAvg;
}

console.log(averagePlayTime(players));

// * Print the average playing time of the starters.
function averageStarterPlayTime(players) {
    var avgMins = 0;
    var totalAvg = 0;
    var numStarters = 0;
    for (i = 0; i < players.length; i++) {
        if (players[i].starter) {
            numStarters ++
            avgMins += players[i].avgMinutesPlayed;
        }
    }
    totalAvg = avgMins / numStarters;
    return totalAvg;
}

console.log(averageStarterPlayTime(players));

// * Print the average playing time of the bench players.
function averageBenchPlayTime(players) {
    var avgMins = 0;
    var totalAvg = 0;
    var numOnBench = 0;
    for (i = 0; i < players.length; i++) {
        if (!players[i].starter) {
            numOnBench++
            avgMins += players[i].avgMinutesPlayed;
        }
    }
    totalAvg = avgMins / numOnBench;
    return totalAvg;
}

console.log(averageBenchPlayTime(players));

// * Create an array of the names of each player.
function getName(players) {
    var playerNames = []
    for (var i = 0; i < players.length; i++) {
        playerNames.push(players[i].name)
    }
    return playerNames
}

console.log(getName(players));

// * Create an array of the names of the players who average more than 10 points per game.
function getNamesOfBigScorers(players) {
    var scorerNames = []
    for (var i = 0; i < players.length; i++) {
        if (players[i].avgPoints > 10) {
            scorerNames.push(players[i].name)
        }
    }
    return scorerNames
}

console.log(getNamesOfBigScorers(players));

// * Create an array of the names of the players who average more than 5 rebounds per game.
function getRebounders(players) {
    var reboundNames = []
    for (var i = 0; i < players.length; i++) {
        if (players[i].avgRebounds > 5) {
            reboundNames.push(players[i].name)
        }
    }
    return reboundNames
}

console.log(getRebounders(players));

// * Who is the player with the most points per minute played ? Write a program to find that out.
function biggestScorer(players) {
    var bestPlayer = [];
    var currentPlayer = [];
    bestPlayer[0] = players[0];
    currentPlayer[0] = players[1];
    bestPlayer[0].pointsPerMinute = players[0].avgPoints / players[0].avgMinutesPlayed
    for (var i = 0; i < players.length; i++) {
        currentPlayer[0] = players[i]
        currentPlayer[0].pointsPerMinute =  players[i].avgPoints / players[i].avgMinsPlayed
        if (currentPlayer[0].pointsPerMinute > bestPlayer[0].pointsPerMinute) {
            bestPlayer[0] = currentPlayer[0];
        }

    }return bestPlayer[0].name
}
console.log(biggestScorer(players))

// * Based on this data, what is the average points score for the team as a whole ?
// ^^ I don't really understand this question! ^^