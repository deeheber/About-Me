//When clicking no on game.html page

function noPlay() {
  alert("That's ok. If you change your mind, feel free to click the yes button anytime!");
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

      //Communicate the game is over and give final score
      alert("The game is over. You finished with a final score of " + score + ".");

}



