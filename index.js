const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8080;
const data = require('./CV.json')

console.clear();

//Renderizar archivos estaticos
app.use(express.static('pages'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/enviar', (req, res) => {
  const {nombre, telefono, correo, pregunta} = req.body;

  if(!nombre || !telefono || !correo || !pregunta){
    console.log(`Error faltan datos`);
    res.sendStatus(500);
  }

  let data = `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${correo}\nPregunta: ${pregunta}\n`;
  data = `${data} ----------\n`;
  const filePath = path.join(__dirname, 'preguntas.txt');

  fs.appendFile(filePath, data, (err) => {
    if (err) {
      console.log('Error al guardar los datos en el archivo');
      res.sendStatus(500);
    } 
  });

  res.send('<script>alert("¡Gracias por enviar el formulario de contacto!"); window.location.href = "/contactanos.html";</script>');
});

app.get('/a33427', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});