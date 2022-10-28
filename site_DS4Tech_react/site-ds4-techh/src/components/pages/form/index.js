import React,{useState} from "react";
import InfoContact from "../../infocontact";
import './index.css';

const initialState = {
  name: '',
  tell: '',
  email: '',
  message: ''
}

const initialPopup = {popMain:"popup-close",popContent:"popup-close"}
const openPopup = {popMain:"popup-container",popContent:"popup-contente"}

const Form = () => {
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
        <h2 className="text-center mt-3 display-4">Contato</h2>
      </div>
      <div className="container mt-3 form contente">
        <form id="formulario" onSubmit={handleSubmit} >
          <div className="mb-3" >
            <label htmlFor="name" className="form-label"><strong>Nome</strong> (obrigatório)</label>
            <input type="text" className="form-control" id="name" name="name" value={fields.name} required onChange={handleFieldesChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="tell" className="form-label"><strong>Telefone</strong> (obrigatório)</label>
            <input type="text" className="form-control" id="tell" name="tell" value={fields.tell} required onChange={handleFieldesChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><strong>Email</strong> (obrigatório)</label>
            <input type="email" className="form-control" id="email" name="email" value={fields.email} aria-describedby="emailHelp" required onChange={handleFieldesChange}/>
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label"><strong>Mensagem</strong></label>
            <textarea name="message" id="message" cols="30" rows="7" className="form-control" value={fields.message} onChange={handleFieldesChange}></textarea>
          </div>
          <button type="submit" className="btn btn-color">Fale conosco</button>
        </form>
      </div>
      <div id="div-popup" className={popup.popMain}>
        <div className={popup.popContent}>
          <p id="text-popup">{fields.name} obrigado por entrar em contato, em breve retornaremos</p>
          <button id="btn-close-popup" className="btn btn-outline-success" onClick={closePopup}>X</button>
        </div>
      </div>
    
    </div>
  )
}

export default Form;