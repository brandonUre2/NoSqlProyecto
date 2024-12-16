// src/app.js
const express = require('express');
const session = require('express-session');
const path = require('path');  
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const transporteRoutes = require('./routes/transporteRoutes');
const ciudadRoutes = require('./routes/ciudadRoutes');
const hospedajeRoutes = require('./routes/hospedajeRoutes');
const puestoRoutes = require('./routes/puestoRoutes');

const authRoutes = require('./routes/authRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const consultaRoutes = require('./routes/consultaRoutes');
const paqueteDeViajeRoutes = require('./routes/paqueteDeViajeRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const resenaRoutes = require('./routes/resenaRoutes');
const actividadRoutes = require('./routes/actividadRoutes');


app.use(session({
    secret: 'admin123',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
  }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



connectDB();


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.locals.usuarioLogueado = req.session.userId ? true : false;
    next();
  });

  app.use((req, res, next) => {
    res.locals.usuarioAdmin = req.session.usuarioAdmin || false;
    next();
  });
  app.use((req, res, next) => {
    res.locals.usuarioId = req.session.usuarioId;
    next();
  });
  app.use((req, res, next) => {
    res.locals.Nombre = req.session.Nombre;
    next();
  });


app.use('/api', authRoutes);
app.use('/api', transporteRoutes);
app.use('/api', ciudadRoutes);
app.use('/api', hospedajeRoutes);
app.use('/api', puestoRoutes);
app.use('/api', empleadoRoutes);
app.use('/api', consultaRoutes);
app.use('/api', paqueteDeViajeRoutes);
app.use('/api', reservaRoutes);
app.use('/api', resenaRoutes);
app.use('/api', actividadRoutes);


console.log(path.join(__dirname, 'src', 'views'));
app.set('view cache', false); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
