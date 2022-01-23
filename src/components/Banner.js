import React from 'react';

function Banner() {
    return <section id="banner">
    {/*<!-- Nav -->*/}
    <nav id="navbar">
      <div className="Brand">
        <p>BRAND</p>
      </div>
      <div className="mcr">
        <p>MONTE NEVADO</p>
        <p>CONTACTO</p>
        <p>RESERVAR</p>
      </div>
    </nav>
    <div className="title">
      <h1>EL MONTE</h1>
      <h1>NEVADO</h1>
      <p>Hotel de montaña todo incluido</p>
      <i className="fas fa-chevron-circle-down"></i>
    </div>
  </section>
}

export default Banner;