import React, { useContext } from "react";
import iconBr from '../../assets/img/iconBr.png';
import iconUsa from '../../assets/img/iconUsa.png';
import {LangContext}  from "../../contexts/LangContext";
import './index.css';


const DropdownLanguages = (props) =>{

  const {lang, setLang} = useContext(LangContext)

  const switchLanguage = (event) =>{
    setLang(event.currentTarget.value)
    localStorage.setItem('idlang', event.currentTarget.value)

    console.log(lang)
  }

  return(
    <>
      <div className={`dropdown ${props.className}`}>
        <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="material-symbols-outlined">language</span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><button className="dropdown-item" type="button" value="ptbr" onClick={switchLanguage} >Pt-br <img className="icon-language"  src={iconBr} /></button></li>
          <li><button className="dropdown-item" type="button" value="en" onClick={switchLanguage} >En <img className="icon-language"  src={iconUsa}/></button></li>
        </ul>
      </div>
    </>
  )
}

export default DropdownLanguages;