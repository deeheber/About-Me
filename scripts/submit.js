function submitForm(userName) {
  if (userName){
  alert("Thanks for saying hi, " + getFirstName(userName) + "!");
  }
  else {
    alert("Thanks for saying hi!")
  }

}

function getFirstName(fullName){
  var nameToUse = fullName;
      if (fullName.indexOf(" ") > 1) {
          nameToUse = fullName.substring(0, fullName.indexOf(" "));
      }

      if (fullName.indexOf(" ") == 0) {
          nameToUse = "friend";
      }
        return nameToUse;

}
