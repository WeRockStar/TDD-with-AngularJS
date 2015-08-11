describe('Addition' ,function (){
  it("Add 3 to 5 equal to 8" , function(){
    //step 1 Arrange
    var a  =3 , b = 5;

    //step 2 Action
    var value = add(3, 5);

    //step 3 Assertion
    expect(value).toEqual(8);
  });

  it("Add 54 to 3 euqal to 7" , function(){
    var a = 4 , b = 3;
    var value = add(a , b);
    expect(value).toEqual(7);
  });
});
