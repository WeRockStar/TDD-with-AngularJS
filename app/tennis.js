function Tennis(a , b){
  if(a == 0 && b == 0){
    return "Love - Love";
  }else if(a > b){
    return "A Win";
  }else if(a == b){
    return "Deuce";
  }
}
