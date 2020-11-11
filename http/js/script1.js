const btnL1 = document.getElementById("btnL1");
const btnL2 = document.getElementById("btnL2");
const ul1 = document.getElementById("ul1");
const ul2 = document.getElementById("ul2");

btnL1.onclick = function(){ 
	ul1.style.visibility = "visible";
}

btnL2.onclick = function(){ 
	ul2.style.visibility = "visible";
}