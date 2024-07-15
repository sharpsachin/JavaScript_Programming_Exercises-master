// A function to display player information

var player1;
var player2;
var player;
var showPlayerInfo;

player1 = {
    name: "sachu",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "liam",
    place: "The Old Library",
    health: 40
};

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    playerPlace(player);
    playerHealth(player);
    console.log("------------------------------");
    console.log("");
};
const playerPlace=function (player){
    console.log(player.name+ " is in: "+player.place);
}
const playerHealth=(player)=>{
    console.log(player.name+" is in "+player.health);
}

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();



/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */