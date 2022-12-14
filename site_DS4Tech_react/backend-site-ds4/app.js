const express = require('express');
const cors = require('cors');
const ptbrRouter = require('./src/routes/ptbr');
const enRouter = require('./src/routes/en');

const app = express();
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
})
app.use(express.json());
app.use('/ptbr', ptbrRouter);
app.use('/en', enRouter);


app.listen(3001, () => {
  console.log('Servidor for iniciado');
})