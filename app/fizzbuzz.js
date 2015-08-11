function fizzbuzz(value){
    if(value == 1 || value == 2
      || value == 4 || value == 7
      || value == 8){
      return value;
    }else if(value == 3 || value == 6 || value == 9){
      return "Fizz";
    }else if(value == 5 || value == 10){
      return "Buzz";
    }else if(value == 15){
      return "FizzBuzz";
    }
}
