//ejemplo de solicitud síncrona
let req = new XMLHttpRequest();
req.open('GET','http://localhost:3000/Ejemplo%20Ajax/index.html', false);
req.send(null);
if(req.status == 200)
	console.log(req.responseText);