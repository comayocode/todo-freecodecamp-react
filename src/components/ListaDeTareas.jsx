import React from 'react';
import TareaFormulario from './TareaFormulario';
import '../stylesheets/ListaDeTareas.css';

function ListaDeTareas() {
  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        LISTA DE TAREAS
      </div>
    </>
  );
}

export default ListaDeTareas;