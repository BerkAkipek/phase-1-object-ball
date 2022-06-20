function gameObject(){
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ["Black", "White"],
            players: {
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 29,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
                "Alan Anderson": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Reggie Evans": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "Brook Lopez": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Mason Plumlee": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 10
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ["Turquoise", "Purple"],
            players: {
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 7,
                    blocks: 23,
                    slamDunks: 15
                },
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 10
                }
            }
        }
    }
}


function numPointsScored(player){
    data = gameObject();
    if (player in data.home.players){
        return data.home.players[player].points;
    } else if (player in data.away.players){
        return data.away.players[player].points;
    } else {
        return 0;
    }
}


const shoeSize = (player) => {
    data = gameObject();
    if (player in data.home.players){
        return data.home.players[player].shoe;
    } else if (player in data.away.players){
        return data.away.players[player].shoe;
    } else {
        return 0;
    }
}


function teamColors(teamName){
    data = gameObject();
    if (teamName === data.home.teamName){
        return data.home.colors;
    } else if (teamName === data.away.teamName){
        return data.away.colors;
    } else {
        return 0;
    }
}


const teamNames = () => {
    data = gameObject();
    return [data.home.teamName, data.away.teamName];
}


const playerNumbers = (teamName) => {
    const data = gameObject();
    const rslt = [];
    if (teamName === data.home.teamName){
        for (let player in data.home.players){
            rslt.push(data.home.players[player].number);
        }
    } else if (teamName === data.away.teamName){
        for (let player in data.away.players){
            rslt.push(data.away.players[player].number);
        }
    } else {
        return 0;
    }
    return rslt;
}


function playerStats(player){
    data = gameObject();
    if (player in data.home.players){
        return data.home.players[player];
    } else if (player in data.away.players){
        return data.away.players[player];
    } else {
        return 0;
    }
}


function bigShoeRebounds(){
    data = gameObject();
    let bigShoe = 0;
    let playerName;

    for (let player in data.home.players){
        if (data.home.players[player].shoe > bigShoe){
            bigShoe = data.home.players[player].shoe;
            playerName = player;
        }
    }
    for (let player in data.away.players){
        if (data.away.players[player].shoe > bigShoe){
            bigShoe = data.away.players[player].shoe;
            playerName = player;
        }
    }
    if (playerName in data.home.players){
        return data.home.players[playerName].rebounds;
    } else if (playerName in data.away.players){
        return data.away.players[playerName].rebounds;
    }
}


function mostPointsScored(){
    data = gameObject();
    let mostPoints = 0;
    let playerName;
    for (let player in data.home.players){
        if (data.home.players[player].points > mostPoints){
            bigShoe = data.home.players[player].points;
            playerName = player;
        }
    }
    for (let player in data.away.players){
        if (data.away.players[player].points > mostPoints){
            bigShoe = data.away.players[player].points;
            playerName = player;
        }
    }
    return playerName;
}


function winningTeam(){
    data = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    for (let player in data.home.players){
        homePoints += data.home.players[player].points;
    }
    for (let player in data.away.players){
        awayPoints += data.away.players[player].points;
    }
    if (homePoints > awayPoints){
        return data.home.teamName;
    }
    return data.away.teamName;
}


function playerWithLongestName(){
    data = gameObject();
    let longestName = '';
    for (let player in data.home.players){
        if (player.length > longestName.length){
            longestName = player;
        }
    }
    for (let player in data.away.players){
        if (player.length > longestName.length){
            longestName = player;
        }
    }
    return longestName;
}


function doesLongNameStealATon(){
    data = gameObject();
    let longestName = '';
    let steals = 0;
    let mostStealer = '';
    for (let player in data.home.players){
        if (player.length > longestName.length){
            longestName = player;
        }
    }
    for (let player in data.away.players){
        if (player.length > longestName.length){
            longestName = player;
        }
    }
    for (let player in data.home.players){
        if (player.steals > steals){
            mostStealer = player;
        }
    }
    for (let player in data.away.players){
        if (player.steals > steals){
            mostStealer = player;
        }
    }
    if (longestName === mostStealer) {
        return true;
    } else {
        return false;
    }
}

