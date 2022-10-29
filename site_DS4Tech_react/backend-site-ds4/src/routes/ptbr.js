const express = require('express');

const router = express.Router();
const home = require('../views/ptbr/home.json');
const about = require('../views/ptbr/about.json');
const expertise = require('../views/ptbr/expertise.json');
const navbar = require('../views/ptbr/navbar.json');
const portifolio = require('../views/ptbr/portifolio.json');
const form = require('../views/ptbr/form.json');
const infoContact = require('../views/ptbr/infoContact.json')


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