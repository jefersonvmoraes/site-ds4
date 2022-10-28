import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/footer';
import NavTop from './components/navBarTop';
import AboutScreen from './screens/about';
import ExpertisieScreen from './screens/expertisie';
import FormScreen from './screens/form';
import HomeScreen from './screens/home';
import PortfolioScreen from './screens/portfolio';


const Rotas = (props) => (
  <BrowserRouter>
    <NavTop/>
    <Routes>
        <Route path='/'element={<HomeScreen/>}/>
        <Route path='/form' element={<FormScreen/>}/>
        <Route path='/about' element={<AboutScreen/>}/>
        <Route path='/expertisie' element={<ExpertisieScreen/>}/>
        <Route path='/portfolio' element={<PortfolioScreen/>}/>
        <Route path='*' element={<HomeScreen/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
)

export default Rotas;