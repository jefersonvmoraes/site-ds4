import React,{ createContext, useState } from "react"

let localStorageLang = localStorage.getItem('idlang')
let initialIdLang = localStorageLang ? localStorageLang : "ptbr"

//Função que constroe o Provider e támbem permite Consumir os Dados Globais
export const LangContext = createContext()

//Componente Provider para passar os valores para os Childrens
function LangProvider ({children}) {

  const [lang, setLang] = useState(initialIdLang)

  return (
    <LangContext.Provider value={{lang, setLang}}>  
      {children}
    </LangContext.Provider>
  )
}

export default LangProvider;