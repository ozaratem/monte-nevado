import React from 'react';

function Contact() {
    return <section id="contact">
    <div><h3>Contacto</h3></div>
    <div>
      <p>Nos puede escribir sin ningun compromiso por cualquier de nuestras redes sociales o por nuestro <span class="green">chat en linea</span></p>
    </div>
    <div>
    <div>
      <button className="button"><i class="fab fa-google-plus-g"></i> GOOGLE+</button>
    </div>
    <div>
      <button className="button"><i class="fab fa-twitter"></i> TWITTER</button></div>
    <div>
      <button className="button">CHAT</button> </div></div>
  </section>
}

export default Contact;