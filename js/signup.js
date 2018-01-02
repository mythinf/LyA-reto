// cargando todo el árbol de nodos del DOM
$(document).ready(function() {
  var $inputNumber = $('#inputNumber');
  // CREANDO FUNCION QUE VALIDA LOS DATOS DEL IMPUT
  $inputNumber.on('input',function() {
    // CREANDO QUE VERIFICA NUMERO DE TELEFONO
    var patternPhoneNumber = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    if (patternPhoneNumber.test($(this).val())) {
      alert('su código es ');
    }

  });
});
