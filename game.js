function playGame() {

  var score = 0;
    //Get user name and greet the user by name

      var userName = prompt("Enter your name.");
      alert("Hello, " + userName.trim() + "! Let's get started.");
    //Question 1
      var correctGuess = false;
      var question1Answer = new Array("BICYCLING", "READING", "WALKING MY DOG", "DAYDREAMING");

          var userGuess1 = prompt("Name one of my favorite Activities: ", "");
          for (var index = 0; index < question1Answer.length; index++){
            if (userGuess1.toUpperCase().trim() === question1Answer[index]){
              correctGuess = true;
            }
          }
          if (correctGuess) {
            score ++;
            alert("Nice job, you're correct!");
          }
          else {
            alert("Sorry that answer is incorrect.");
          }

    //Question 2
      correctGuess = false;
      var question2Answer = new Array("SIX FEET UNDER", "BUFFY THE VAMPIRE SLAYER", "PRETTY LITTLE LIARS", "ARRESTED DEVELOPMENT");

          var userGuess2 = prompt("Name one of my favorite TV shows: ", "");
          for (var index = 0; index < question2Answer.length; index++){
            if (userGuess2.toUpperCase().trim() === question2Answer[index]){
              correctGuess = true;
            }
          }
          if (correctGuess) {
            score ++;
            alert("Nice job, you're correct!");
          }
          else {
            alert("Sorry that answer is incorrect.");
          }

      //Question 3
      correctGuess = false;
      var question3Answer = new Array("DAVID SEDARIS", "SARAH VOWELL", "KURT VONNEGUT", "EDWARD ABBEY");

          var userGuess3 = prompt("Name one of my favorite Authors (their first and last name): ", "");
          for (var index = 0; index < question3Answer.length; index++){
            if (userGuess3.toUpperCase().trim() === question3Answer[index]){
              correctGuess = true;
            }
          }
          if (correctGuess) {
            score ++;
            alert("Nice job, you're correct!");
          }
          else {
            alert("Sorry that answer is incorrect.");
          }

      //Communicate the game is over and give final score
      alert("The game is over. You finished with a final score of " + score + ".");

}



