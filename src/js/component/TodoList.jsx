import React, { useState } from "react";


export const TodoList = () => {

  const [ tarea, setTarea ] = useState('');

  const [ todasLasTareas, setTodasLasTareas ] = useState([]);


  const handleSubmit = (event) => {

    event.preventDefault();

    if (tarea.trim() != '') {

      setTodasLasTareas([...todasLasTareas, tarea]);

    }

    setTarea('');

  }

  const handleDelete = (tareaDeleted) => {

    setTodasLasTareas(todasLasTareas.filter((item) => item != tareaDeleted ));

  }

  return (

    <div className="container my-5">

      <h1 className="text-success">Lista de Tareas</h1>

      <form onSubmit={handleSubmit}>

        <div className="text-start mb-3">

          <label htmlFor="exampleTask" className="form-label">Nueva Tarea</label>

          <input type="text" className="form-control" id="exampleTask" 

            value={tarea} onChange={(event) => setTarea(event.target.value)}/>

        </div>

      </form>

      <h2 className="text-primary">Lista de Tareas</h2>

      <ul className="text-start list-group">

        {todasLasTareas.map((item, i) => <li key={i} 

          className="list-group-item hidden-icon d-flex justify-content-between">
          {item}
          <span onClick={() => handleDelete(item)}>

            <i className="fa fa-remove text-danger"></i>

          </span>

        </li>)}

        <li className="list-group-item text-end">{todasLasTareas.length == 0 ? 'No hay tareas, añade tareas' : todasLasTareas.length + ' tarea'}</li>

      </ul>

    </div>

  );

}