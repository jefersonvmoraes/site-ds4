import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.webp";
import DropdownLanguages from "../menuIdiomas";
import {LangContext}  from "../../contexts/LangContext";
import "./index.css";
import getInfos from "../../utils/getInfos";

const mobileInitial ={display:'menuNone', humburguer: 'menu'} 
const mobileOpen = {display:'mobile-menu', humburguer: 'close'}


const NavTop = (props) => {
  const [mobileMenu, setMobileMenu] = useState(mobileInitial)

  const ShowMobileMenu = () => {
    if (mobileMenu === mobileInitial){
      setMobileMenu(mobileOpen)
    } else {
      setMobileMenu(mobileInitial)
    }
  }
  const CloseMobileMenu = () => {
    setMobileMenu(mobileInitial)
  }
  const {lang, setLang} = useContext(LangContext)
  const [infos, setInfos] = useState({})
  useEffect(() => {
    getInfos(lang,'navbar').then((data) => {
      setInfos(data);
    }, error => {
    });
  },[lang]);

  return (
    <>
      <header>
        <div className="navbar">
          <Link to={'/'}>
            <img src={logo} alt="" className="imglogo"/>
          </Link>
          <div>
            <Link to={'/'} className="ds4-title">
              DS4 Tech
            </Link>
          </div>

          <div className="group-navbar">
            <nav className="navmenu">
              <Link to={'/'}>{infos.home}</Link>
              <Link to={'/about'}>{infos.about}</Link>
              <Link to={'/expertisie'}>{infos.expertise}</Link>
              <Link to={'/portfolio'}>{infos.portifolio}</Link>
              <Link to={'/form'}>{infos.contato}</Link>
            </nav>
            <DropdownLanguages
            className="menu-idiomas"
            />
          </div>
          <span onClick={ShowMobileMenu} className="material-symbols-outlined menuBars" data-menubar>
            {mobileMenu.humburguer}
          </span>
        </div>
        <nav className={mobileMenu.display} id="menuMobile">
          <DropdownLanguages
          language={props.language}/>
            <Link to={'/'} onClick={CloseMobileMenu}>{infos.home}</Link>
            <Link to={'/about'}onClick={CloseMobileMenu}>{infos.about}</Link>
            <Link to={'/expertisie'}onClick={CloseMobileMenu}>{infos.expertise}</Link>
            <Link to={'/portfolio'}onClick={CloseMobileMenu}>{infos.portifolio}</Link>
            <Link to={'/form'}onClick={CloseMobileMenu}>{infos.contato}</Link>
        </nav>
      </header>
    </>
  );
};

export default NavTop;