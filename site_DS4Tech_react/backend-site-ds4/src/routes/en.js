const express = require('express');


const router = express.Router();
const home = require('../views/en/home.json');
const about = require('../views/en/about.json');
const expertise = require('../views/en/expertise.json');
const navbar = require('../views/en/navbar.json');
const portifolio = require('../views/en/portifolio.json');
const form = require('../views/en/form.json');
const infoContact = require('../views/en/infoContact.json')

router.get('/home' , async(req, res)=>{
  res.status(200).json(home)
})
router.get('/about' , async(req, res)=>{
  res.status(200).json(about)
})
router.get('/expertise' , async(req, res)=>{
  res.status(200).json(expertise)
})
router.get('/navbar' , async(req, res)=>{
  res.status(200).json(navbar)
})
router.get('/portifolio' , async(req, res)=>{
  res.status(200).json(portifolio)
})
router.get('/form' , async(req, res)=>{
  res.status(200).json(form)
})
router.get('/infoContact' , async(req, res)=>{
  res.status(200).json(infoContact)
})
module.exports = router;