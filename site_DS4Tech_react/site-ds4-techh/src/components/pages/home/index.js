import React, { useEffect, useState, useContext } from "react";
import './index.css';
import {LangContext}  from "../../../contexts/LangContext";
import getInfos from "../../../utils/getInfos";


const info = {
  title: "",
  text:[
  {paragraph: "" }
  ]
}


const Home = () =>{
  const {lang} = useContext(LangContext)
 
  const [infos, setInfos] = useState(info)
  useEffect(() => {
    getInfos(lang, 'home').then((data) => {
      setInfos(data);
    }, error => {
    });
  },[lang]);
   
  return (
    <div className="container-fluid main-content">
      <div className="container pt-5 ">
        <div className="container-fluid contente text-home">
          <div className="text-center">
            <h1 className="display-4 title-home">{infos.title}</h1>
          </div>
          {
            infos.text.map((text,index) => (
             <p key={index} className="text-left mt-3">{text.paragraph}</p>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home;