import React from 'react';

function Reservation() {
    return <section id="reservation">
    <div className="h3"><h3>Reservaciones</h3></div>
    <div className="reservation-input">
      <div>
        <p>Nombre completo</p>
        <input className="input" type="text"/>
      </div>
      <div>
        <p>Fecha de entrada</p>
        <input className="input" type="date"/>
      </div>
      <div>
        <p>Fecha de salida</p>
        <input className="input" type="date"/>
      </div>
      <div>
        <p>Email</p>
        <input className="input" type="email"/>
      </div>
      <div>
        <p>Telefono</p>
        <input className="input" type="text"/>
      </div>
    </div>
    <div className="reservation-checkbox">
      <p>Tipo de moneda con la que va a realizar el pago</p>
        <div>
          <input className="round" type="checkbox" name="Colones"/>
          <label for="Colones">Colones</label>
        </div>
        <div>
          <input className="round" type="checkbox" name="Dolares"/>
          <label for="Dolares">Dolares</label>
        </div>
        <div>
          <input className="round" type="checkbox" name="Euros"/>
          <label for="Euros">Euros</label>
        </div>
    </div>
    <div className="terms-input">
      <input type="checkbox" name="terms"/>
      <label for="terms">Acepto los terminos y condiciones</label>
    </div>
    <div className="reservation-button">
      <button className="button">
        Reservar
      </button>
    </div>
  </section>
}

export default Reservation;