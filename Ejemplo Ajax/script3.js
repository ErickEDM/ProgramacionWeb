let req = new XMLHttpRequest();
req.open('GET','http://localhost:3000/Ejemplo%20Ajax/archivo.txt', true); //True indica asíncrona
req.onreadystatechange = function (aEvt) { //onreadystatechange se invoca siempre que el estado de la solicitud cambia
	if(req.readyState == 4){
		if(req.status == 200)
			console.log(req.responseText);
		else
		console.log("Error al cargar página\n");	
	}	
};
req.send(null); //indica solicitud