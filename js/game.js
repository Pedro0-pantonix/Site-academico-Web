let jogadaplayer;
let jogadapc;
let newcolor;



function changecolor(pick){
  newcolor = pick;
  var pedra = document.getElementById("pedra");
  var papel = document.getElementById("papel");
  var tesoura = document.getElementById("tesoura");
  switch(newcolor){
    case 1:
      pedra.classList.add("newcolor");
      papel.classList.remove("newcolor");
      tesoura.classList.remove("newcolor");
      break;
    case 2:
      papel.classList.add("newcolor");
      pedra.classList.remove("newcolor");
      tesoura.classList.remove("newcolor");
      break;
    case 3:
      tesoura.classList.add("newcolor");
      papel.classList.remove("newcolor");
      pedra.classList.remove("newcolor");
    break;
  }
}

function jogadaplayer1(escolha){
  jogadaplayer = escolha;
}


//1 pedra
//2 papel
//3 tesoura
function rodada(){
  jogadapc = Math.floor(Math.random() * (3)) + 1;
  if(jogadaplayer == 1 && jogadapc == 3){
    var tesoura = document.getElementById("tesourapc");
    tesoura.classList.add("newcolor");
    alert("voce ganhou!\n sua jogada"+" Pedra" +"\njogada da maquina" + " Tesoura");
  }else if(jogadaplayer == 2 && jogadapc == 1){
    var pedra = document.getElementById("pedrapc");
    pedra.classList.add("newcolor");
    alert("voce ganhou!\n sua jogada"+" Papel" +"\njogada da maquina" + " Pedra");
  } else if(jogadaplayer == 3 && jogadapc == 2){
    var papel = document.getElementById("papelpc");
    papel.classList.add("newcolor");
    alert("voce ganhou!\n sua jogada"+" Tesoura" +"\njogada da maquina" + " Papel");
  }else if(jogadapc==1 && jogadaplayer==3){
  	alert("voce perdeu!\n sua jogada"+ " Papel" +"\njogada da maquina"+ " Tesoura");
  }else if(jogadapc== 2 && jogadaplayer==1){
  	alert("voce perdeu!\n sua jogada"+ " Pedra" +"\njogada da maquina"+ " Papel");
  }else if(jogadapc== 3 && jogadapc==2){
  	alert("voce perdeu!\n sua jogada"+ " Tesoura" +"\njogada da maquina"+ " Papel");
  }
}
