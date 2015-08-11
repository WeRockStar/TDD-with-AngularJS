describe("FizzBuzz" , function(){
  it("put 1 should return 1 " , function(){
    expect(fizzbuzz(1)).toEqual(1);
  });
  it("put 2 should return 2 " , function(){
    expect(fizzbuzz(2)).toEqual(2);
  });
  it("put 3 should return Fizz" , function(){
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  it("put 4 should return 4" , function(){
    expect(fizzbuzz(4)).toEqual(4);
  });
  it("put 5 should return Buzz" , function(){
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  it("put 6 should return Fizz" , function(){
    expect(fizzbuzz(6)).toEqual("Fizz");
  });
  it("put 7 should return 7" , function(){
    expect(fizzbuzz(7)).toEqual(7);
  });
  it("put 8 should return 8" , function(){
    expect(fizzbuzz(8)).toEqual(8);
  });
  it("put 9 should return Fizz" , function(){
    expect(fizzbuzz(9)).toEqual("Fizz");
  });
  it("put 10 should return Buzz" , function(){
    expect(fizzbuzz(10)).toEqual("Buzz");
  });
  it("put 15 should return FizzBuzz" , function(){
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });
});
