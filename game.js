function playGame() {

    var correctGuess = false;
    var validInterest = new Array("BICYCLING", "READING", "WALKING MY DOG", "DAYDREAMING");
    while (!correctGuess){
        var userGuess = prompt("Enter one of my favorite activities: ", "");
        for (var index = 0; index < validInterest.length; index++){
          if (userGuess.toUpperCase().trim() === validInterest[index]){
              correctGuess = true;
          }
        }
        if (correctGuess) {
          alert("Yay! You got it correct.");
        }
        else {
          alert("Nice guess, but that's not one of my favorite activities. Try Again.");
        }
    }
}



