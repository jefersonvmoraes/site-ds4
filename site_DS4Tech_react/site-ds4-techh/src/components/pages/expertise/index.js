import React,{useState, useContext,useEffect} from "react";
import {LangContext}  from "../../../contexts/LangContext";
import Lista from "../../lista";
import getInfos from "../../../utils/getInfos";


const info = {
  title: "",
  text:[
    {paragraph: "", list:[]}
  ]
}

const Expertisie = () =>{
  const {lang} = useContext(LangContext)
 
  const [infos, setInfos] = useState(info)
  useEffect(() => {
    getInfos(lang, 'expertise').then((data) => {
      setInfos(data);
    }, error => {
    });
  },[lang]);


  return (
    <>
      <div className="container-fluid  main-content">
        <div className="container pt-5  contente">
          <div className="text-center">
            <h1 className="display-4">{infos.title}</h1>
          </div>
          {
            infos.text.map((item,index)=>( 
              <>
                <p key={index} className="text-left mt-3">
                  {item.paragraph}
                </p>
                {item.list ? <Lista list={item.list}/> : null}
              </>

            ))
          }
          
        </div>
      </div>
    </>

  )
}

export default Expertisie;