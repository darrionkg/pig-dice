//business logic
function Player(name,totalScore,roundScore) {
  this.name = name,
  this.totalScore = totalScore,
  this.roundScore = roundScore
}

function Game(players, turn) {
  this.players = [],
  this.turn = turn
  //this.currentId = 0;
}

// Game.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

Game.prototype.setPlayers = function(player1, player2) {
  this.players.push(player1);
  this.players.push(player2);
}

Game.prototype.rollDice = function(diceRoll){
  diceRoll = Math.floor(6*(Math.random()) + 1);
  return diceRoll;
  console.log(totalScore);
}

Game.prototype.addToRoundScore = function(roundScore,totalRoundScore) {
 totalRoundScore += roundScore;
 return totalRoundScore;
}

Game.prototype.checkRound = function(roundScore, totalRoundScore) {
  if(roundScore != 1) {
    totalRoundScore = this.addToRoundScore(roundScore,totalRoundScore);
    console.log(totalRoundScore);
  }else if(totalRoundScore >= 100){
    alert("you won!")
  }else {
    alert("you lost, you rolled 1")
  }
  return totalRoundScore;
}
// Game.prototype.setTurn = function() {
//   if(this.turn % 2 === 0) {
//     return this.players[0];
//   }
//   else {
//     return this.players[1];
//   }
// }






//User Interface
$(document).ready(function(){
  $("form#pigDice").submit(function(event){
    event.preventDefault();
    var firstPlayer = $("input#name1").val();
    var secondPlayer = $("input#name2").val();
    var totalScore = 0;
    var roundScore = 0;
    var totalRoundScore = 0;
    var turn = 0;
    //var newGame = new Game();
    var player1 = new Player(firstPlayer, totalScore, roundScore);
    var player2 = new Player(secondPlayer, totalScore, roundScore);
    var newGame = new Game(player1, player2);
    newGame.setPlayers(player1, player2);
  $("#rollButton").click(function(){
    roundScore = newGame.rollDice(roundScore);
    totalRoundScore = newGame.checkRound(roundScore, totalRoundScore);

    });
  });
});
