import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../contexts/LangContext";
import getInfos from "../../utils/getInfos";
import './index.css';

const info = {
  item1:[],
  item2: [],
  item3: []
}
const InfoContact = () =>{
  const {lang} = useContext(LangContext)
  const [infos, setInfos] = useState(info)
  useEffect(() => {
    getInfos(lang, 'infoContact').then((data) => {
      setInfos(data);
    }, error => {
    });
  },[lang]);

  return (
    <div className="container-fluid main-info-contact">
      <div className="container-fluid info-contact p-5 ">
        <div >
          <h5>{infos.item1[0]}</h5>
          <p><a href="/form">{infos.item1[1]}</a></p>
          <p>{infos.item1[2]}</p>
          <p><a href="mailto:contato@ds4tech.net" data-type="mailto" data-id="mailto:contato@ds4tech.net">{infos.item1[3]}</a></p>
        </div>

        <div>
          <h5>{infos.item2[0]}</h5>
          <p>{infos.item2[1]}</p>
          <p>{infos.item2[2]}</p>
          <p>{infos.item2[3]}</p>
          <p>{infos.item2[4]}</p>
        </div>

        <div>
          <h5>{infos.item3[0]}</h5>
          <p><a href="https://www.linkedin.com/company/ds4tech/" target="_blank">Linkedin</a></p>
        </div>
      </div>
    </div>

  )
}

export default InfoContact;