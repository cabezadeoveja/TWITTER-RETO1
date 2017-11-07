function contar() {
	//Contar la cantidad de caracteres de forma regresiva.
	var max = "140";
	var cadena = document.getElementById("comment").value;
	var longitud = cadena.length;

		if(longitud <= max) {
		    document.getElementById("contador").value = max-longitud;
		}
		 else {
		   document.getElementById("comment").value = cadena.substr(0, max);
		}

			/*else if (longitud>0){
				document.getElementById("contador").value  = "-"+(longitud-max);
			}*/
			

		if (longitud ===0 || contador > 140) {
		document.getElementById('btn').disabled=true;
		//para desabilitar el button cuando no se escriba nada, esto lo hacemos mediante disabled.
		}

		if (longitud >=1) {
		document.getElementById('btn').disabled=false;
		//se activa el button apenas teclemos una tecla
		}

		if (longitud >= 120 && longitud < 130){
			document.getElementById('contador').style.backgroundColor = "red";
		//Si pasa los 120 caracteres, mostrar el contador con OTRO color.
		}
		if (longitud >= 130 && longitud <= 140){
			document.getElementById('contador').style.backgroundColor = "blue";
		//Si pasa los 130 caracteres, mostrar el contador con OTRO color.
		}
	}


// &&= y ; ||= ó

function add(){
//Almacenando valor del tweet
	var comments = document.getElementById("comment").value;
	//estoy rescatando lo que el usuario va a escribir
    document.getElementById("comment").value ="";
    //lo igualo a un elemento vacio para que lo limpie del text area al momento de enviar. 

    var newComments = document.createElement('div');
    //creo un nuevo div
    var cont = document.getElementById('cont');
    //agrega un id al contenedor div que se creo arriba (mismo nombre que le pusimos en el html para guiarnos)

    var paragraph = document.createElement('p');
    //crear una etiqueta P con una clase. P tiene un hijo que es un nodo de texto.
    //vamos a crear un nodo de texto.
    var nodoText = document.createTextNode(comments);
    //texto (P) es el papá y comments (nodo de texto) el hijo.
    paragraph.appendChild(nodoText);
    //nodotexto es hijo de padre
 
    var nameSpan = document.createElement("span"); 
    var dateSpan = document.createElement("span");
    nameSpan.textContent = "@cabezadeoveja";
    dateSpan.textContent = new Date().toTimeString();

    newComments.appendChild(nameSpan);
    newComments.appendChild(dateSpan);  //dataSpan(hora) se appendea al papá newComments
    newComments.appendChild(paragraph); //paragraph se appendea al papá newComments
    cont.appendChild(newComments); //newComments también tiene un papá que es Cont

};


	

