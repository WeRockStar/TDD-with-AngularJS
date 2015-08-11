describe("Tennis" , function(){
  var game;
  //init new obj
  beforeEach(function(){

  });
  it("Start Game Tenniss Love - Love" , function(){
    var game = TennisGames();
    expect(showScore()).toEqual("Love - Love");
  });
  it("15 - 0 A Win" , function(){
    var game = TennisGames();
    AHit(1);
    expect(showScore()).toEqual("Fifteen - Love");
  });
  it("30 - 0 A Win" , function(){
    var game = TennisGames();
    AHit(2);
    expect(showScore()).toEqual("Thirty - Love");
  });
  it("40 - 0 A Win" , function(){
    var game = TennisGames();
    AHit(3);
    expect(showScore()).toEqual("Forty - Love");
  });
  it("40 - 15 A Win" , function(){
    var game = TennisGames();
    AHit(3);
    BHit(1);
    expect(showScore()).toEqual("Forty - Fifteen");
  });

  it("40 - 30 A Win" , function(){
    var game = TennisGames();
    AHit(3);
    BHit(2);
    expect(showScore()).toEqual("Forty - Thirty");
  });

  it("40 - 40 Deuce" , function(){
    var game = TennisGames();
    AHit(3);
    BHit(3);
    expect(showScore()).toEqual("Deuce - Deuce");
  });

  //Clear obj
  afterEach(function(){

  });
});
