import React from 'react';
import '../hojas-de-estilos/Testimonio.css';

//Componente funcional
function Testimonio(props) {
    //Siempre se retorna un único elemento JSX
  return (
    //Contenedor principal del testimonio
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt="Foto de Testimonio"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en {props.empresa}
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;