const cerdito1 = document.getElementById("cerdito1");
const cerdito2 = document.getElementById("cerdito2");
const cerdito3 = document.getElementById("cerdito3");
const cerdito4 = document.getElementById("cerdito1a");
const dial1 = document.getElementById("dial1");
const dial2 = document.getElementById("dial2");
const dial3 = document.getElementById("dial3");
const dial5 = document.getElementById("dial5");
const lobo1 = document.getElementById("lobo1");
const lobo2 = document.getElementById("lobo2");
const lobo3 = document.getElementById("lobo3");
const lobo4 = document.getElementById("lobo4");
const casa1 = document.getElementById("casa1");
const casa2 = document.getElementById("casa2");
const casa3 = document.getElementById("casa3");
const casapaja2 = document.getElementById("casapaja2");
const casamadera2 = document.getElementById("casamadera2");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3= document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const boton7= document.getElementById("boton7");
const boton8 = document.getElementById("boton8");
const boton9 = document.getElementById("boton9");
const boton10 = document.getElementById("boton10");

boton1.onclick = function(){ 
	dial1.style.visibility = "visible";
	boton2.style.visibility = "visible";
}

boton2.onclick = function(){ 
	casa1.style.visibility = "visible";
}

boton3.onclick = function(){ 
	dial2.style.visibility = "visible";
	boton4.style.visibility = "visible";
}

boton4.onclick = function(){ 
	casa2.style.visibility = "visible";
}

boton5.onclick = function(){ 
	dial3.style.visibility = "visible";
	boton6.style.visibility = "visible";
}

boton6.onclick = function(){ 
	casa3.style.visibility = "visible";
}

boton7.onclick = function(){ 
	dial5.style.visibility = "visible";
	cerdito4.src="img/cerdito1a.png"
}


boton8.onmousedown = function(){
  casapaja2.src="img/casapaja2.png"
  lobo2.src="img/loboa.png"

}

boton8.onmouseup = function(){
  casapaja2.src="img/casapaja.png"
  lobo2.src="img/lobo.png"
}

boton9.onmousedown = function(){
  casamadera2.src="img/casamadera2.png"
  lobo3.src="img/loboa.png"

}

boton9.onmouseup = function(){
  casamadera2.src="img/casamadera.png"
  lobo3.src="img/lobo.png"
}

boton10.onmousedown = function(){
  lobo4.src="img/loboa.png"

}

boton10.onmouseup = function(){
  lobo4.src="img/lobo.png"
}