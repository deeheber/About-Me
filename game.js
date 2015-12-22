//When clicking no on game.html page

function noPlay() {
  alert("That's ok." + "\n" + "\n" + "If you change your mind, feel free to click the yes button!");
}
//When clicking yes on game.html page

function playGame() {

  var score = 0;

  var answer = [
      ["BICYCLING", "READING", "WALKING MY DOG", "DAYDREAMING"],
      ["SIX FEET UNDER", "BUFFY THE VAMPIRE SLAYER", "PRETTY LITTLE LIARS", "ARRESTED DEVELOPMENT"],
      ["DAVID SEDARIS", "SARAH VOWELL", "KURT VONNEGUT", "EDWARD ABBEY"]
    ];

  var guess = [];
    //Get user name and greet the user by name

      var userName = prompt("Enter your name.");
      alert("Hello, " + userName.trim() + "! Let's get started.");

    //Question 1
      var correctGuess = false;
      guess.push(prompt("Name one of my favorite Activities: ", ""));
          for (var index = 0; index < answer[0].length; index++){
            if (guess[0].toUpperCase().trim() === answer[0][index]){
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
      guess.push(prompt("Name one of my favorite TV Shows: ", ""));
          for (var index = 0; index < answer[1].length; index++){
            if (guess[1].toUpperCase().trim() === answer[1][index]){
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
      guess.push(prompt("Name one of my favorite authors (their first and last name): ", ""));
          for (var index = 0; index < answer[2].length; index++){
            if (guess[2].toUpperCase().trim() === answer[2][index]){
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

      //Communicate the game is over, list out answers the user gave, and give final score
      var guessList = "";

        for (var index = 0; index < guess.length; index++) {
          guessList = guessList + (index + 1) + ". " + guess[index] + "\n";
        }

      alert("Here's what you entered for each question: " + "\n" + "\n" + guessList);

      switch(score) {
        case 0:
          alert("Study up and try again. Final score: " + score + " out of " + answer.length + ".");
          break;
        case 1:
          alert("Better luck next time. Final score: " + score + " out of " + answer.length + ".");
          break;
        case 2:
          alert("Almost perfect. Final score: " + score + " out of " + answer.length + ".");
          break;
        default:
          alert("Great job with the perfect score! Final score: " + score + " out of " + answer.length + ".");
      }


}

//Ideas for game enhancement:
//have answers write to the document and get rid of alert boxes
//get rid of repeating code. Maybe by storing questions/answers in objects and using a function within a loop?
//adding extra spaces between words in answers that have multiple words register as incorrect fix that
//only pull the person's first name in the beginning
