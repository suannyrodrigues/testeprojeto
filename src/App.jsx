import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill, BsDashCircle} from "react-icons/bs"
import './App.css'

const API = "//http://localhost:3000"; //Endereço da API/json-sever//

function App() {

  const [curso, setCurso]= useState("");   //Captação do Idioma//
  const [time, setTime]= useState("");//Duração do curso//
  const [confere, setConfere]= useState([]);//Conferência de itens//
  const [loading, setLoading]= useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const  confere  ={
      id: Math.random(),
      curso,
      time,
      done: false,
    };
    
    await fetch (API+"/curso",{
      method: "POST",
      body: JSON.stringify(curso),
      headers:{
        "Content-Type": "application/json",
      },
    });

    console.log(confere);///Envio para a API/

    setCurso("");
    setTime("");
  };

  return (
    <div className="App">
     <div className='header-meucurso'>
      <h1>Meus Cursos</h1>
     </div>
     <div className='form-meucurso'>
      <h2>Language+</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='curso'>O que você vai estudar?</label>
          <input type="text" name="curso" placeholder="Meus cursos" onChange={(e)=> setCurso(e.target.value)} value={curso || ""} required/>
        </div>
        <div className='form-control'>
          <label htmlFor='time'>Duração</label>
          <input type="text" name="time" placeholder="Duração" onChange={(e)=> setTime(e.target.value)} value={time || ""} required/>
        </div>
        <input type="submit" value="Enviar"/>
      </form>

     </div>
      <div className='list-meucurso'>
        <h2>Metas</h2>
        {confere.length === 0 && <p>Sem metas!</p>}
      </div>
    </div>
  )
}

export default App
