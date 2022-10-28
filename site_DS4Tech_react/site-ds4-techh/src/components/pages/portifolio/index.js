import React,{useState, useEffect, useContext} from "react";
import {LangContext}  from "../../../contexts/LangContext";
import jornadaSalesforce from '../../../assets/img/jornadaSalesforce.webp';
import Caroseul from "../../caroseul";
import getInfos from "../../../utils/getInfos";
import "./index.css";

const info = {
  title:"",
  works:{
    salesforce:{title:"",text:""},
    flux:{title:"",text:"",title_img: []}
  }
}

const Portfolio = () =>{
  const {lang} = useContext(LangContext)
 
  const [infos, setInfos] = useState(info)
  useEffect(() => {
    getInfos(lang, 'portifolio').then((data) => {
      setInfos(data);
    }, error => {
    });
    
  },[lang]);
  return (
    <>
      <div className="container-fluid  main-content">
        <div className="container pt-5 ">
          <div className="text-center">
            <h1 className="display-4">{infos.title}</h1>
          </div>
          <div className="main-portifolio pt-5">
            <div className="container contente-portifolio">
              <h2>{infos.works.salesforce.title}</h2>
              <a href="https://www.youtube.com/c/JornadaSalesforce" target="_blank">
                <img className="img-fluid" src={jornadaSalesforce}/>
              </a>
              <p className="mt-5">
                {infos.works.salesforce.text}
              {/* Desde 2020 estamos à frente da <a href='https://www.youtube.com/c/JornadaSalesforce' target='_blank'>Jornada Salesforce</a>, um canal no YouTube criado para compartilhar nosso conhecimento nessa plataforma. Criamos conteúdo com o intuito de aprender cada vez mais e divulgar funcionalidades do CRM número 1 do mercado. */}
              </p>
            </div>
            <div className="container contente-portifolio"> 
              <h2>{infos.works.flux.title}</h2>
              <Caroseul
              img1={infos.works.flux.title_img[0]}
              img2={infos.works.flux.title_img[1]}
              img3={infos.works.flux.title_img[2]}
              img4={infos.works.flux.title_img[3]}
              />
              <p className="mt-5">
                  {infos.works.flux.text}
                </p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Portfolio;