import React,{useState, useContext, useEffect} from "react";
import {LangContext}  from "../../../contexts/LangContext";
import getInfos from "../../../utils/getInfos";

const info = {
  title: "",
  text:[
  {paragraph: "" }
  ]
}

const About = () =>{
  const {lang} = useContext(LangContext)
 
  const [infos, setInfos] = useState(info)
  useEffect(() => {
    getInfos(lang, 'about').then((data) => {
      setInfos(data);
    }, error => {
    });
  },[lang]);

  return (
    <div className="container-fluid main-content">
      <div className="container pt-5  contente">
        <div className="text-center">
          <h1 className="display-4">{infos.title}</h1>
        </div>
        {
          infos.text.map(((text,index)=>
            <p key={index} className="mt-3">{text.paragraph}</p>
          ))
        }
      </div>
    </div>  
  )
}

export default About;