import React, { useState } from "react";
import PostIt from "./components/PostIt";
import Button from "./components/Button";

function App() {
  // Estado inicial de los componentes
  const [notas, setNotas] = useState(["Hello World!"]);
  const [colores, setColores] = useState(["yellow"]);

  // //Array de notas fijas
  const notasDisponibles = [
    "",
    "Programacion con react",
    "No olvides el export!",
    "404 not found",
  ];
  const coloresDisponibles = ["blue", "green", "orange", "blue"];

  // Renderizar las notas del array
  const nota = notas.map((item, index) => (
    <PostIt color={colores[index]} key={index} valor={item} />
  ));

  //Pintar una nueva nota
  const addNote = () => {
    if (notas.length < 4) {
      const nuevaNota =
        notasDisponibles[notas.length % notasDisponibles.length];
      const nuevoColor =
        coloresDisponibles[notas.length % notasDisponibles.length];
      setNotas([...notas, nuevaNota]);
      setColores([...colores, nuevoColor]);
    }
  };

  return (
    <>
      <article className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 d-flex justify-content-center a text-center">
          {nota}
        </div>
        <div className="container text-center p-3">
          <Button onClick={addNote}>Add Note</Button>
        </div>
      </article>
    </>
  );
}

export default App;
