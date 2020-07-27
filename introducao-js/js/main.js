function botao(){
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!</b>";
	//console.log(document.getElementById("agradecimento"));
	//alert("Obrigado!");
}

function redirecionar(){
	window.open("https://www.google.com/");
	//window.location.href = "https://google.com/";
}

function expandir(){
	alert("Trocar Texto");
}

function trocar(elemento){
	//document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse!";
	elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
	//document.getElementById("mouseover").innerHTML = "Mouse Over Here!";
	elemento.innerHTML = "Mouse Over Here!";
}

function load(){
	alert("Página carregada!");
}

function change(elemento){
	console.log(elemento.value);
}

/* function soma(n1, n2){
	return n1+n2;
} */

//var validate;

/* function validaIdade(idade){ //variavel local
	var validate;
	if(idade >= 18) {
		validate = true;
	}else{
		validate = false;
	}
	return validate;
} */

/* function validaIdade(idade){ // variavel global
	if(idade >= 18) {
		validate = true;
	}else{
		validate = false;
	}
}

alert(soma(5,10));
var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validate); */

/*var nome = "Aluisio Meloni";
var idade = 26;
var idade2 = 10;
var frase = "Uma frase aleatória qualquer";
//alert("Bem Vindo " + nome + "! " + idade);
//alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("frase", "texto"));*/