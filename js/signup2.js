$(document).ready(function() {
  var inputEmail = $('#inputEmail');
  var inputPassword = $('#inputPassword');
  // asociando eventos

  inputEmail.on('input', function(event) {
    console.log($(this).val());
    var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(PATERNEMAIL.test($(this).val()));
  });
  inputPassword.on('input', function(event) {
    if ($(inputPassword).val().length >= 6) {
      alert('correcto!');
    }
  });


});
