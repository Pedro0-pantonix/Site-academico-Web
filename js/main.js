function soma(){
	var v1 = parseInt(document.getElementById('c1').value);
	var v2 = parseInt(document.getElementById('c2').value);
	var v3 = parseInt(document.getElementById('c3').value);
	document.prova.c4.value = v1+v2+v3;
}
function multiplicar(){
	var v1 = parseInt(document.getElementById('c1').value);
	var v2 = parseInt(document.getElementById('c2').value);
	var v3 = parseInt(document.getElementById('c3').value);
	document.prova.c4.value = v1*v2*v3;
}

function recuperarPs(){
	var paragrafos = document.getElementsByTagName("p");
	var i = 0;
	while (i <=paragrafos.length){
		alert(paragrafos[i].innerHTML);
		i++;
	}
}

function definirCores(){
	var paragrafos = document.getElementsByTagName("p");
	var cores = ["blue", "red", "green", "yellow"];
	var i;
	for(i = 0; i <= paragrafos.length; i++){
		paragrafos[i].style.backgroundColor= cores[i];
	}
}

function novoItem(){
	var campos = document.getElementsByTagName ("input");
	var i;
	var novaLinha = document.createElement("tr");
	for (i = 0; i< campos.length;i++){
		var novaColuna = document.createElement("td");
		novaColuna.innerHTML=campos[i].value;
		novaLinha.appendChild(novaColuna);
	}
	var tabela = document.getElementById("tabela");
	tabela.appendChild(novaLinha );
}

function PaginasCores(){
	var P = document.getElementsByClassName("paginas");
	var L = document.getElementsByClassName("livros");
	var i;
	for(i=0; i<P.length; i++){
		P[i].style.backgroundColor = "Green";
	}
	for(i=0; i <L.length;i++){
		L[i].style.backgroundColor = "white";
	}
}
function LivrosCores(){
	var L = document.getElementsByClassName("livros");
	var P = document.getElementsByClassName("paginas");
	var i;
	for(i=0; i<L.length;i++){
		L[i].style.backgroundColor = "blue";
	}
	for (i=0; i<P.length;i++){
		P[i].style.backgroundColor = "white";
	}
}



const pcguess = Math.floor(Math.random() * 100);
let jogadas = 0;

var input = document.getElementById("input");

// Execute a function when the user presses a key on the keyboard
document.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    match();
  }
});

function match(){
    let guess = document.getElementById("numero").value;
    if (guess > pcguess){
        alert("numero random é menor que "+guess+".");
        jogadas++;
    }else if (guess < pcguess){
        alert("numero random é maior que "+guess+".");
        jogadas++;
    }else{
        alert("Você acertou! Sua jogada "+guess+" numero random: "+pcguess);
    }
    document.getElementById("contador").innerText = "Jogadas: "+jogadas;
    document.getElementById("numero").value = "";
}

