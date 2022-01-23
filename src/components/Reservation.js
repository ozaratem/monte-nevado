import React from 'react';

function Reservation() {
    return <section id="reservation">
      <div className="container">
        <div className="h3">
          <h3>Reservaciones</h3>
        </div>
        <div className="reservation-input">
          <div>
            <p>Nombre completo</p>
            <input className="input-group" type="text"/>
          </div>
          <div>
            <p>Fecha de entrada</p>
            <input className="input-group" type="date"/>
          </div>
          <div>
            <p>Fecha de salida</p>
            <input className="input-group" type="date"/>
          </div>
          <div>
            <p>Email</p>
            <input className="input-group" type="email"/>
          </div>
          <div>
            <p>Telefono</p>
            <input className="input-group" type="text"/>
          </div>
        </div>
        <div className="reservation-checkbox">
          <p>Tipo de moneda con la que va a realizar el pago</p>
          <div>
            <input id="colones" type="radio" name="currency" value="colones"/>
            <label htmlFor="colones">Colones</label>
          </div>
          <div >
            <input id="dolares" type="radio" name="currency" value="dolares"/>
            <label htmlFor="dolares">Dolares</label>
          </div>
          <div>
            <input id="euros" type="radio" name="currency" value="euros"/>
            <label htmlFor="euros">Euros</label>
          </div>
        </div>
          <div className="terms-input">
            <input type="checkbox" name="terms"/>
            <label htmlFor="terms">Acepto los terminos y condiciones</label>
          </div>
          <div className="reservation-button">
            <button className="button">
              Reservar
            </button>
          </div>
      </div>
  </section>
}

export default Reservation;