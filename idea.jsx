const aux = {
    "preguntas": [
        {
            "id":"0",
            "dificultad": "0",
            "pregunta": "Hola que tal",
            "respuesta_correcta":"Bien",
            "respuesta_incorrecta1":"Mal",
            "respuesta_incorrecta2":"Fatal",
            "respuesta_incorrecta3":"Horrible"
        },
        {
            "id":"1",
            "dificultad": "0",
            "pregunta": "Por que estas mal",
            "respuesta_correcta": "No se",
            "respuesta_incorrecta1": "Porque si",
            "respuesta_incorrecta2": "Porque no",
            "respuesta_incorrecta3": "Porque xd" 
        },
        {
            "id":"2",
            "dificultad": "0",
            "pregunta": "Pregunta 3",
            "respuesta_correcta": "No se",
            "respuesta_incorrecta1": "Porque si",
            "respuesta_incorrecta2": "Porque no",
            "respuesta_incorrecta3": "Porque xd" 
        },
        {
            "id":"3",
            "dificultad": "0",
            "pregunta": "Pregunta 4",
            "respuesta_correcta": "No se",
            "respuesta_incorrecta1": "Porque si",
            "respuesta_incorrecta2": "Porque no",
            "respuesta_incorrecta3": "Porque xd" 
        }
    ]
}

function genera_pregunta(dif){
    /*const aux= data.preguntas.filter(preg => preg.dificultad.includes(dif))
      console.log(aux)
      setPregunta(aux)
      setAuxiliar(true); */
    var min = 0; 
    var max = aux.preguntas.length();
    const auxiliar = aux.preguntas.filter(preg => preg.dificultad.includes(dif)) //Esto te saca las preguntas de dificultad que se le pase no?
    var numpregunta = Math.floor(Math.random() * (max - min+ 1) + min) //Te saca un número aleatorio entre el min y la longitud del array
    const pregunta_que_sale = auxiliar[numpregunta]//La pregunta que te imprime por pantalla
    var nuevas_preguntas = aux.preguntas.filter(valor => valor.id !== pregunta_que_sale.id) // Así haces que se elimine la pregunta que te ha salido previamente
    /*A partir de aquí ya sería ir actualizando los hooks para que vaya actualizandose el mock */
    
}

/*
  delete = itemId => {
    //En vez de uasr item.id, usa la propiedad
    //que te ayuda a identificar tu objeto que quieres borrar.
    //Quizas clavearticulo sea la adecuada.
    const filtredData = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: filtredData });
  };*/