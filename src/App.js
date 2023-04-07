import logo from './logo.svg';
import './App.css';
import { mock1 } from './mock';
import { useState } from 'react';


function App() {

  const [data,setData]=useState(mock1);
  const [pregunta,setPregunta]= useState({});
  const [dif,setDif]=useState(0);
  const [auxiliar, setAuxiliar]=useState(false);
  const [respuesta, setRespuesta]=useState("");


   function genera_pregunta(dif){
      const aux= data.preguntas.filter(preg => preg.dificultad.includes(dif))
      console.log(aux)
      setPregunta(aux)
      setAuxiliar(true);  
}


  function comprueba_respuesta(texto){
    //const aux= props.theproducts.filter(prod => prod.title.toLowerCase().includes(filtro) );

    if(texto == pregunta[0].respuesta_correcta){
        setRespuesta("Correcta")
        console.log("Acierto")
        var aux=dif +1;
        console.log(aux)
        setDif(aux)
        genera_pregunta(aux)
    }else{
        setRespuesta("Incorrecta")
        console.log("Fallo")
        var aux = dif -1;
        setDif(aux)
        genera_pregunta(aux)
    }
  }



  return (
    <div className="App">
      <header className="App-header">
       <p>Test Adaptativo Informatizado</p>
      </header>
      <button id="generar" onClick={()=>genera_pregunta(dif)}>Genera Pregunta</button>
      <p>La dificultad de la pregunta es: {auxiliar ? pregunta[0].dificultad : "No se ha generado pregunta"} </p>

      <h1> {auxiliar ? pregunta[0].pregunta : "No se ha generado pregunta"} </h1>
      
      <button id="preguntas" onClick={()=>comprueba_respuesta(pregunta[0].respuesta_correcta)}>{auxiliar ? pregunta[0].respuesta_correcta : "No se ha generado pregunta"}</button>
      <button id="preguntas" onClick={()=>comprueba_respuesta(pregunta[0].respuesta_incorrecta1)}>{auxiliar ? pregunta[0].respuesta_incorrecta1 : "No se ha generado pregunta"}</button>
      <button id="preguntas" onClick={()=>comprueba_respuesta(pregunta[0].respuesta_incorrecta2)}>{auxiliar ? pregunta[0].respuesta_incorrecta2 : "No se ha generado pregunta"}</button>
      <button id="preguntas" onClick={()=>comprueba_respuesta(pregunta[0].respuesta_incorrecta3)}>{auxiliar ? pregunta[0].respuesta_incorrecta3 : "No se ha generado pregunta"}</button>
    
      <p>La respuesta es: {auxiliar ? respuesta : "No se ha generado pregunta"}</p>
      
    </div>
  );
}

export default App;
//07-4-2023: El problema que estoy teniendo es que el valor de la dificultad que genera una pregunta no se actualiza, cada vez que pulsas al botón correcto o incorrecto, sino que 
//se vuelve a generar una pregunta cada vez que llamas al botón. En cambio, si pulsas correcta o incorrectamente, y le das a generar pregunta, entonces
//si que saldría la pregunta que debería.

//Solución: En vez de pasarle el hook de dif, le pasamos la variable aux y ya funciona como debería. Esto soluciona los problemas y no habría ningún problema a la hora de sincronizar la dificultad con la variable auxiliar.