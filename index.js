const express = require('express');
const cors = require('cors')
const routerApi= require('./routes');

const { logErrors, errorHandler, boomerrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:5500', 'https://myapp.com'];
//en el curso utiliza el puerto 8080 pero desde el live serve del computador se utiliza el puerto 5500
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin){
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
})

routerApi(app);

app.use(logErrors);
app.use(boomerrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port '+ port);
});
