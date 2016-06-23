function submitForm(userName) {
  if (userName){
    $('form').html("<p>Thanks for saying hi, " + getFirstName(userName) + "!</p><p>Note: This form doesn't actually submit anywhere yet, so contact me via social media instead.</p><br><button id='reload' onclick='reloadForm()'>Reload Form</button>");
  }
  else {
    $('form').html("<p>Thanks for saying hi!</p><p>Note: This form doesn't actually submit anywhere yet, so contact me via social media instead.</p><br><button id='reload' onclick='reloadForm()'>Reload Form</button>");
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

function reloadForm(){
  var formString = '<label for="name">Name: </label>';
      formString += '<input type="text" name="full_name" id="name" placeholder="Full Name"><br>';

      formString += '<label for="email">Email: </label>';
      formString += '<input type="email" name="email" id="email"placeholder="email@example.com"><br>';

      formString += 'Would you like a reply? <br>';
      formString += '<label for="reply-yes">Yes</label><input type="radio" name="reply" value="yes" id="reply-yes">';
      formString += '<label for="reply-no">No </label>';
      formString += '<input type="radio" name="reply" value="no" id="reply-no"><br>';

      formString += 'ow did you hear about me? <br>';
      formString += '<select name="referral_Source">';
      formString += '<option value="work">Work</option>';
      formString += '<option value="school">School</option>';
      formString += '<option value="acquaintance">Mutual Acquaintance</option>';
      formString += '<option value="other">Other</option>';
      formString += '</select>';
      formString += '<br>';

      formString += 'What\'s on your mind? <br>';
      formString += '<textarea name="message" placeholder="Message goes here" id="contactMessage"></textarea>';

      formString += '<input type="submit" value="Send">';

  $('form').html(formString);
}
