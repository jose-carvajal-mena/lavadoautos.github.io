$(document).ready(function () {


    jQuery.validator.addMethod("letras", function(value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
      }, "Debe tener solo letras");


$("#formulario").validate({
  rules: {
    rut: {
      required: true,
      number: true,
      minlength: 3,
      maxlength: 8,
    },
    digito: {
      required:   function () {
        if (
          $("#digito").val() == "k" ||
          $("#digito").val() <= 8 &&
          $("#digito").val() >= 0
        ) {
            let mensaje = document.getElementById("error");
            if ( $("#digito").val() > 0 ||  $("#digito").val() == ""){
                
                mensaje.innerHTML = "";
            }
        }else {
            let mensaje = document.getElementById("error");
          mensaje.innerHTML = "ingrese un digito del 0 a el 8 o una letra k";
        }
    },
      minlength: 1,
      maxlength: 1,
    },
    nombre: {
      required: true,
      minlength: 3,
      maxlength: 20,
      letras: true,
    },
    apellido: {
      required: true,
      minlength: 3,
      maxlength: 20,
      letras: true,
    },
    direccion: {
      required: true,
      minlength: 3,
      maxlength: 80,
    },
    marca: {
      required: true,
      minlength: 3,
      maxlength: 15,
    },
    modelo: {
      required: true,
      minlength: 3,
      maxlength: 15,
    },
    año: {
      required: true,
      number: 4,
      minlength: 4,
      maxlength: 4,
    },
  },
  messages: {
    rut: {
      required: "Ingrese su rut",
      maxlength: "Solo debe contener 8 digitos y sin espacio",
      number: "Solo debe contener numeros sin espacios",
    },
    digito: {
      required: " ",
      minlength: "Debe agregar su digito verificador",
      maxlength: "Solo debe contener 1 caracter",
    },
    nombre: {
      required: "Ingrese su nombre",
      minlength: "Debe tener mas de 3 caracteres",
      maxlength: "No puede tener mas de 20 caracteres",
      
    },
    apellido: {
      required: "Ingrese su apellido",
      minlength: "Debe tener mas de 3 caracteres",
      maxlength: "No puede tener mas de 20 caracteres"
    },
    direccion: {
      required: "Ingrese su dirección",
      minlength: "Debe tener mas de 3 caracteres",
      maxlength: "No puede tener mas de 80 caracteres",
    },
    marca: {
      required: "Ingrese su dirección",
      minlength: "Debe tener mas de 3 caracteres",
      maxlength: "No puede tener mas de 15 caracteres",
    },
    modelo: {
      required: "Ingrese su dirección",
      minlength: "Debe tener mas de 3 caracteres",
      maxlength: "No puede tener mas de 15 caracteres",
    },
    año: {
      required: "Ingrese un año valido",
      año: "Ingrese un año",
      minlength: "Debe tener mas de 4 caracteres",
      maxlength: "No puede tener mas de 4 caracteres",
    }
  },
  submitHandler: function () {
    if (
      $("#digito").val() == "k" ||
      $("#digito").val() <= 8 &&
      $("#digito").val() >= 0
    ) {
        let mensaje = document.getElementById("error");
        if ( $("#digito").val() > 0 ||  $("#digito").val() == ""){
            
            mensaje.innerHTML = "";
        }
    } else {
        let mensaje = document.getElementById("error");
      mensaje.innerHTML = "ingrese un digito del 0 a el 8 o una letra k";
    }
}
})
});


const iva = 19/100;
let valor_iva = 0;
var total = document.getElementById("total");
let valor_interior_exterior = document.getElementById("valor_interior_exterior");

valor_interior_exterior.addEventListener("click",function(){
  valor_iva = parseInt(valor_interior_exterior.value)*iva;

  if(total.value !=  "" && valor_interior_exterior.checked){
    total.value = parseInt(total.value) + parseInt(valor_interior_exterior.value)+valor_iva;
  }else if(total.value !=  "" && !valor_interior_exterior.checked){
    total.value = parseInt(total.value) - parseInt(valor_interior_exterior.value) - valor_iva;
  }else{
    total.value = parseInt(valor_interior_exterior.value) + valor_iva;
  }

});

let valor_motor = document.getElementById("valor_motor");

valor_motor.addEventListener("click",function(){
  valor_iva = parseInt(valor_motor.value) * iva;

  if(total.value !=  "" && valor_motor.checked){
    total.value = parseInt(total.value) + parseInt(valor_motor.value) + valor_iva;
  }else if(total.value !=  "" && !valor_motor.checked){
    total.value = parseInt(total.value) - parseInt(valor_motor.value) - valor_iva;
  }else{
    total.value = parseInt(valor_motor.value) + valor_iva;
  }

});



