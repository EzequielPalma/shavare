// cabecera.

toggle.onclick = () => {
    items.classList.toggle("open")
    toggle.classList.toggle("close")
}




//register de annie
const formulario= document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')
const expresiones = { /*expresiones es un objeto / expresion regular*/
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre:false,
	correo:false,
	password: false // representa si un campo esta valido o no?, por eso lo incializamos en false
	
}

const validarFormulario = (e) =>{
	switch (e.target.name) { //es el name del input / e.target es el  input / 'nombre' es el campo 
		case "nombre": //el name del input
			validarCampo(expresiones.nombre, e.target, 'nombre'); //estamos ejecutando la funcion validarCampo
			break;
		case "correo":
		validarCampo(expresiones.correo, e.target, 'correo');
			break;
		case "password":
		validarCampo(expresiones.password, e.target, 'password');
		validarPassword2();
			break;
		case "password2":
		validarPassword2();
			break;
	}
}

//creamos una funcion
//expresion: expresiones.nombre/ expresiones.correo....
//classList: es una propiedad q proporciona métodos para agregar, quitar y verificar clases en un elemento. * */

const validarCampo = (expresion, input, campo) =>{
	if(expresion.test(input.value)){ //accedemos al valor del input y luego que compruebe con esta expresion
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto'); 
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');//pintamos de color azul
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-exclamation'); 
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check');//icono
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true; //quiere decir que el nombre,correo y contra es corecto
	}else{
	document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
	document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')//pintamos de color rojo
	document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check');
	document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-exclamation');
	document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
	campos[campo] = false;
}
}

// funcion para el password(verificar si las dos contraseñas son iguales)
const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password'); // acceder a los dos input del pasword
	const inputPassword2 = document.getElementById('password2');
	if (inputPassword1.value !== inputPassword2.value) { //si ambas no son iguales
		document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');//pintamos de color rojo
		document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
		document.querySelector('#grupo__password2 i').classList.add('fa-circle-exclamation');//icono incorrecto
		document.querySelector('#grupo__password2 i').classList.remove('fa-check');//icono correct
		document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo');
		campos['password'] = false; // es decir no esta validado
	} else {
		document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
		document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');//pintamos de color azul
		document.querySelector('#grupo__password2 i').classList.remove('fa-circle-exclamation');//icono
		document.querySelector('#grupo__password2 i').classList.add('fa-check');//icono
		document.querySelector('#grupo__password2 .formulario__input-error').classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}

}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); /*keyup tecla levantada : cuando levantes la tecla quiero que cumplas esta funcion*/
	input.addEventListener('blur', validarFormulario); /* blur fuera de foco: cuando le das clic afuera/cuando el usuario escriba y de cli afuera* */
});




// Creamos un nuevo objeto campos q incialicen en false
formulario.addEventListener('submit', (e) => {
	e.preventDefault(); /*si no hay nada en los campos que no se envie nada*/
	
	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.correo && campos.password && terminos.checked) { //comprobar q todos lo campos se encuentren correctos si estos son verdadero queremos ejecutar un reset
		formulario.reset(); // reset: reinciar todos los campos del form
		
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else{
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');	
	}

});