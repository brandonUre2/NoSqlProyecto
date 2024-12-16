const Usuario = require('../models/usuario');

class AuthController {

    mostrarRegistro(req, res) {
        res.render('auth/registro'); 
      }

      async registrarUsuario(req, res) {
        try {
          const { Id,Nombre, Correo, Password, Telefono } = req.body;
    
          const nuevoUsuario = new Usuario({ 
            Id,
            Nombre, 
            Correo, 
            Password, 
            Telefono,
            Admin: false 
          });
    
          await nuevoUsuario.save(); 
          res.redirect('/api/auth/login'); 
        } catch (err) {
          res.status(500).send('Error en el registro: ' + err.message);
        }
      }

      mostrarLogin(req, res) {
        res.render('auth/login'); 
      }      

      async iniciarSesion(req, res) {
        try {
          const { Correo, Password } = req.body;
          const usuario = await Usuario.findOne({ Correo }); 
    
          if (usuario && usuario.Password === Password) { 
            req.session.userId = usuario._id;
            req.session.Nombre = usuario.Nombre;
            req.session.usuarioAdmin=usuario.Admin;
            req.session.usuarioId=usuario.Id;
            res.redirect('/api/paqueteDeViaje/catalogo'); 
          } else {
            res.send('Correo o contraseña incorrectos');
          }
        } catch (err) {
          res.status(500).send('Error en el inicio de sesión: ' + err.message);
        }
      }

      cerrarSesion(req, res) {
        req.session.destroy(err => {
          if (err) {
            return res.redirect('/dashboard');
          }
          res.redirect('/api/auth/login');
        });
      }
    



}

module.exports = new AuthController();