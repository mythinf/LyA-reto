$(document).ready(function() {
  var inputEmail = $('#inputEmail');
  var inputPassword = $('#inputPassword');
  var $btnSignUpNext2 = $('#button');
  // asociando eventos

  inputEmail.on('input', function(event) {
    console.log($(this).val());
    var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(PATERNEMAIL.test($(this).val()));
  });
  inputPassword.on('input', function(event) {
    if ($(inputPassword).val().length >= 6) {
      $btnSignUpNext2.attr('disabled', false);
    } else {
      $btnSignUpNext2.attr('disabled', true);
    }
  });
  $btnSignUpNext2.on('click', function() {
    alert('Usuario registrado correctamente');
    localStorage.email = inputEmail.val();
    localStorage.password = inputPassword.val();
    window.location.href = 'check.html';
  });
});
