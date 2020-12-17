//Ejemplo de solicitud síncrona con eventos más utilizados de respuesta
//load, error, progress
//1. Se crea objeto de solicitud XMLHttpRequest
let xhr = new XMLHttpRequest();
//2. Se configura: solicitud-GET para URL http://localhost:3002/archivo.txt
xhr.open('GET','http://localhost:3000/Ejemplo%20Ajax/archivo.txt');
//3. Se envía solicitud
xhr.send();
//4. Los siguientes serán invocados después de que la respuesta sea recibida
xhr.onload = function(){
	if(xhr.status != 200){ //Analiza status de la respuesta HTTP
		alert(`Error ${xhr.status}: ${xhr.statusText}`); //Ejemplo. 404: Not Found
	} else { //Muestra resultado
		alert(`Listo, se recibieron ${xhr.response.length} bytes`);
	}
};

xhr.onprogress = function(event){
	if(event.lengthComputable){
		alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
	} else {
		alert(`Recibidos ${event.loaded} bytes`); //No se recibió logitud del contenido Content-Length
	}
};

xhr.onerror = function(){
	alert("Falló solicitud");
};