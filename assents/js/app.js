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
	}

function add(){
//Almacenando valor del tweet
	var comments = document.getElementById("comment").value;
	//estoy rescatando lo que el usuario va a escribir
    document.getElementById("comment").value ="";
    //lo igualo a un elemento vacio para que lo limpie del text area al momento de enviar.
    
	// crear un evento para que cuando haga click cambié de color el boton

   		 if (comments.lenght == 0 || comments == null){
    			return document.getElementById('btn').disabled=true;
    //para desabilitar el button cuando no se escriba nada, esot lo hacemos mediante disabled.
    }

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

    newComments.appendChild(paragraph); //se appendea al papá newComments
    cont.appendChild(newComments); //newComments también tiene un papá que es Cont

};


	

