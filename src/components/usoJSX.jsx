import React from 'react'
import MiComponente from './miComponente' 
import './css/miComponente.css' // importar estilos de mi componente !Buena Practica, no es obligatorio

let clase = 'btn btn-primary'
const link = 'https://www.google.com'



 /*   Funcion para manejo de eventos */
function handleChange(event){
    console.log(event.target.value)
}

function enviarFormulario(event) {
    alert('formulario enviado con exito')
    event.preventDefault() // con el fin de que no se recargue la pagina

}

function UsoJSX (props){
    return(
        <div className="App">
            <MiComponente />
            <p>Esto es un parrafo</p>
            <button className={clase} >Mi boton principal</button>
            <ul>
                {/* Mostrar una lista de elementos con map */ }
                {props.elementos.map(elm => <li key={elm} >{'hola ' + elm}</li>)}
            </ul>
             {/* uso de variables javascript en JSX */}
            <a href={link} target="_BLANK" rel="noopener noreferrer"> Link a google</a>

            <form action="">
                <h2>Mi formulario</h2>
                <ul>
                    <li className='form-group col-9'>
                    <label>Tu nombre</label>
                        {/* Manejando el evento onChange */}
                    <input className="form-control" type="text" onChange={handleChange} />
                    </li>
                    <li className='form-group col-9'>
                        <label htmlFor="edad"> Edad:</label>
                        <input id="edad" className="form-control" type="text" />
                    </li>
                    {/* Manejando el evento onClick */ }
                    <button className="btn btn-primary" onClick={enviarFormulario}>Enviar Formulario</button>
                </ul>
            </form>

        </div>
    )
}


export default UsoJSX