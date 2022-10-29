import React,{useContext, useEffect, useState} from "react";
import { LangContext } from "../../../contexts/LangContext";
import getInfos from "../../../utils/getInfos";
import './index.css';


const initialState = {
  name: '',
  phone: '',
  email: '',
  message: ''
}

const initialPopup = {popMain:"popup-close",popContent:"popup-close"}
const openPopup = {popMain:"popup-container",popContent:"popup-contente"}

const Form = () => {
  const {lang} = useContext(LangContext)
  const [infos, setInfos] = useState({})
  useEffect(() => {
    getInfos(lang, 'form').then((data) => {
      setInfos(data);
    }, error => {
    });
  },[lang]);

  const [fields, setFields] = useState(initialState)
  const handleFieldesChange = (event) => setFields({
    ...fields,
    [event.currentTarget.name]: event.currentTarget.value,
  });

  const [popup, setPopup] = useState(initialPopup)

  const handleSubmit = (event) => {
    console.log(fields)
    setPopup(openPopup)
    event.preventDefault()
  }

  const closePopup =()=>{
    setPopup(initialPopup)
    setFields(initialState)
  }

  return (
    <div className="container-fluid main-content pt-5">
      <div className="container mt-3">
        <h2 className="text-center mt-3 display-4">{infos.title}</h2>
      </div>
      <div className="container mt-3 form contente">
        <form id="formulario" onSubmit={handleSubmit} >
          <div className="mb-3" >
            <label htmlFor="name" className="form-label"><strong>{infos.formItens?.name}</strong> ({infos.formItens?.requerid})</label>
            <input type="text" className="form-control" id="name" name="name" value={fields.name} required onChange={handleFieldesChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label"><strong>{infos.formItens?.phone}</strong> ({infos.formItens?.requerid})</label>
            <input type="text" className="form-control" id="phone" name="phone" value={fields.phone} required onChange={handleFieldesChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><strong>{infos.formItens?.email}</strong> ({infos.formItens?.requerid})</label>
            <input type="email" className="form-control" id="email" name="email" value={fields.email} aria-describedby="emailHelp" required onChange={handleFieldesChange}/>
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label"><strong>{infos.formItens?.message}</strong></label>
            <textarea name="message" id="message" cols="30" rows="7" className="form-control" value={fields.message} onChange={handleFieldesChange}></textarea>
          </div>
          <button type="submit" className="btn btn-color">{infos.formItens?.button}</button>
        </form>
      </div>
      <div id="div-popup" className={popup.popMain}>
        <div className={popup.popContent}>
          <p id="text-popup">{fields.name} {infos.formItens?.textPopup}</p>
          <button id="btn-close-popup" className="btn btn-outline-success" onClick={closePopup}>X</button>
        </div>
      </div>
    
    </div>
  )
}

export default Form;