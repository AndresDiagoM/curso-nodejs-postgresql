const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

//middlewares
const {logErrors, errorHandler, boomErrorHandler, sequelizeErrorHandler} = require('./middlewares/error.handler');


app.use(express.json()); // for being able to read the body of the request

app.get('/api', (req, res) => { //add /api to all the endpoints for vercel deployment
  res.send('Express server ');
});

app.get('/api/nueva-ruta',
  //cors(),   // Enable CORS for a Single Route, dont use app.use(cors()) if you use this
  (req, res) => {
    res.json('Nueva ruta!');
  }
);

app.get('/api/home', (req, res) => {
  res.send('Home Page of my NodeJs App!');
});


//whitelist for cors
const whitelist = ['http://localhost:8080', ''];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('Not allowed by CORS'));
    }
  }
}

routerApi(app);

// los middlewares de error deben ir al final de las rutas, y el orden es importante
app.use(cors(options)); // CORS ES UN MIDDLEWARE - Enable All CORS Requests
app.use(logErrors);
app.use(sequelizeErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

