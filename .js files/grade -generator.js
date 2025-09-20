// in this file we are creating a grade genertor
//using function for re-useability
function marks(grade){ 
//using the switch case for multiple conditions and a bolean
    switch (true) {
      case grade > 100 || grade < 0:
        console.log("invalid");
        break                   //break ensures the next case does not get executed if the above case satisfies the boleans
      case grade>79:
        console.log("A");
        break;
      case grade >= 60 && grade <= 79:
        console.log("B");
        break;
      case grade >= 50 && grade <= 59:
        console.log("C");
        break;
      case grade >= 40 && grade <= 49:
        console.log("D");
        break;
      case grade < 40:
        console.log("E");  
    }
}
marks(123) 
