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
  // CREANDO FUNCION PARA NUMEROS ALEATORIOS DE 3 DÍGITOS
  function validation() {
    return Math.floor(Math.random() * 500) + 100;
  }
  // CREANDO FUNCION QUE ENVÍA CÓDIGO LAB
  $btnSignUpNext.on('click', function() {
    event.preventDefault();
    var codeValid = validation();
    alert('su código Lab es ' + codeValid);
    // GUARDANDO INFORMACION DE NÚMERO TELEFÓNICO
    localStorage.number = $inputNumber.val();
    // GUARDANDO INFORMACION DE CÓDIGO ENVIADO
    localStorage.code = codeValid;
    window.location.href = 'verifi.html';
  });
});
