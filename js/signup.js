// cargando todo el árbol de nodos del DOM
$(document).ready(function() {
  var $inputNumber = $('#inputNumber');
  var $btnSignUpNext = $('#button');
  // CREANDO FUNCION QUE VALIDA LOS DATOS DEL IMPUT
  $inputNumber.on('input', function() {
    // CREANDO VARIABLE QUE VERIFICA NUMERO DE TELEFONO
    var patternPhoneNumber = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    if (patternPhoneNumber.test($(this).val())) {
      $btnSignUpNext.attr('disabled', false);
    } else {
      $btnSignUpNext.attr('disabled', true);
    }
  });
  // CREANDO FUNCION QUE ENVÍA CÓDIGO LAB
  $btnSignUpNext.on('click', function() {
    var code = Math.floor(Math.random() * 500) + 100;
    alert('Tu codigo LAB es ' + code);
  });
  // GUARDANDO INFORMACION DE CÓDIGO ENVIADO
  $btnSignUpNext.on('click', function(event) {
    event.preventDefault();
    localStorage.number = $inputNumber.val();
    localStorage.code = $btnSignUpNext.val();
    window.location.href = 'verifi.html';
  });
});
