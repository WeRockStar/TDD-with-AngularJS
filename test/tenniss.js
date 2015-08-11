function TennisGames(){
  this.sA = 0;
  this.sB = 0;
  this.showScore = function(){
    var scoreText = ['Love' , "Fifteen" , "Thirty", "Forty"];
    if(this.sA == this.sB && this.sB != 0)
      return "Deuce - Deuce";
    return scoreText[sA] + " - " + scoreText[sB];
  }

  this.AHit = function(score){
    this.sA = score;
  }
  this.BHit = function(score){
    this.sB= score;
  }

}
