import React from "react";
import './index.css';

const InfoContact = () =>{
  return (
    <div className="container-fluid main-info-contact">
      <div className="container-fluid info-contact p-5 ">
        <div >
          <h5>Entre em contato</h5>
          <p><a href="/form">Fale cononsco</a></p>
          <p>+55 31 4042 5590</p>
          <p><a href="mailto:contato@ds4tech.net" data-type="mailto" data-id="mailto:contato@ds4tech.net">dalton@ds4tech.net</a></p>
        </div>

        <div>
          <h5>Endereço</h5>
          <p>Alameda Oscar Niemeyer</p>
          <p>132, piso 1 – Vale do Sereno</p>
          <p>Nova Lima – MG</p>
          <p>34006-049</p>
        </div>

        <div>
          <h5>Siga-nos</h5>
          <p><a href="https://www.linkedin.com/company/ds4tech/" target="_blank">Linkedin</a></p>
        </div>
      </div>
    </div>

  )
}

export default InfoContact;