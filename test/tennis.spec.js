describe("Tennnis Games" , function(){
  it("Start Game should return Love - Love" , function (){
  expect(Tennis(0 , 0)).toEqual("Love - Love");
  });
  it("Tennis should return Fifteen - Love" , function (){
    expect(Tennis(15 , 0)).toEqual("A Win");
  });
  it("Tennis should return Thirty - Love" , function (){
    expect(Tennis(30 , 0)).toEqual("A Win");
  });
  it("Tennis should return Forty - Love" , function (){
    expect(Tennis(40 , 0)).toEqual("A Win");
  });
  it("Tennis should return Forty - Fifteen" , function (){
    expect(Tennis(40 , 15)).toEqual("A Win");
  });
  it("Tennis should return Forty - Thirty" , function (){
    expect(Tennis(40 , 30)).toEqual("A Win");
  });
  it("Tennis should return Devce - Deuce" , function (){
    expect(Tennis(40 , 40)).toEqual("Deuce");
  });
});
