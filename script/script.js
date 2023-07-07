const buttonCriptografar = document.querySelector(".criptografar");
const buttonDescriptografar = document.querySelector(".descriptografar");
const buttonCopiar = document.querySelector(".copiar");
const campoTexto = document.querySelector(".input-usuario");
let paragrafo = ""; // Usado tanto para exibir o texto na tela, quando copia-lo

//Função para permitir somente letras minúsculas.
campoTexto.addEventListener("keypress", function(e){
	const letra = String.fromCharCode(e.keyCode);
	const patern = "[a-z\s ]";
	
	if(letra.match(patern)){
		return;
	}
	else{
		e.preventDefault();
	}

});

function capturandoTextoUsuario(){
	let textoUsuario = campoTexto.value;
	if(textoUsuario == ""){
		alert("Por favor digite algo")
		return;
	}
	return textoUsuario;
}

function criptografarTextoUsuario(texto){

	texto = texto.replaceAll("e","enter")
	texto = texto.replaceAll("i","imes")
	texto = texto.replaceAll("a", "ai");
	texto = texto.replaceAll("o","ober");
	texto = texto.replaceAll("u", "ufat");

	return texto;
}

function descriptografarTextoUsuario(texto){
	texto = texto.replaceAll("enter","e")
	texto = texto.replaceAll("imes","i")
	texto = texto.replaceAll("ai", "a");
	texto = texto.replaceAll("ober","o");
	texto = texto.replaceAll("ufat", "u");

	return texto;		
}

function exibirNaTela(texto){
	const divEsconder = document.querySelector(".ocultar");
	const divMostrar = document.querySelector(".mostrar");
	paragrafo = document.querySelector(".resultado");

	// divEsconder.style.display = "none";
	divMostrar.style.display = "flex";
	divMostrar.style.flexDirection = "column";
	divMostrar.style.justifyContent = "space-around";
	divMostrar.style.height = "80%";
	divEsconder.style.display = "none";

	campoTexto.value = "";

	return paragrafo.innerHTML = texto;
}

buttonCriptografar.addEventListener("click", () =>{
	let textoUsuario = capturandoTextoUsuario();
	let textoCriptografado = criptografarTextoUsuario(textoUsuario);

	exibirNaTela(textoCriptografado);
	campoTexto.focus();
});

buttonDescriptografar.addEventListener("click", () =>{
	let textoUsuario = capturandoTextoUsuario();
	let textoDescriptografado = descriptografarTextoUsuario(textoUsuario);
	
	exibirNaTela(textoDescriptografado);
	campoTexto.focus();
	
});

buttonCopiar.addEventListener("click", function(){
	navigator.clipboard.writeText(paragrafo.textContent).then(() =>{
	alert("A frase foi copiada");
	});
});