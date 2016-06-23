function submitForm(userName) {
  if (userName){
    $('form').html("<p>Thanks for saying hi, " + getFirstName(userName) + "!</p><p>Note: This form doesn't actually submit anywhere yet, so contact me via social media instead.</p>");
  }
  else {
    $('form').html("<p>Thanks for saying hi!</p><p>Note: This form doesn't actually submit anywhere yet, so contact me via social media instead.</p>")
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
