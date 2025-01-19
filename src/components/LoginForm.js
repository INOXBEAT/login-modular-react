import React, { useState } from 'react';
import Swal from 'sweetalert2';
//import "./App.css";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, ingresa ambos campos');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresa ambos campos',
      });
    } else {
      setError('');
      console.log('Email:', email);
      console.log('Contraseña:', password);
      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: 'Inicio de sesión exitoso',
      });
    }
  };

  return (
    <div className="container">
      <div className="row" style={{ height: '100vh' }}>
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <span className="card-title center-align">Iniciar sesión</span>
              <form id="loginForm" onSubmit={handleSubmit}>
                <div className="input-field">
                  <i className="fas fa-user prefix"></i>
                  <input
                    id="username"
                    type="text"
                    className="validate"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="username">Usuario</label>
                </div>
                <div className="input-field">
                  <i className="fas fa-lock prefix"></i>
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password">Contraseña</label>
                </div>
                <button type="submit" className="btn-large waves-effect waves-light btn-block">
                  <i className="fas fa-sign-in-alt"></i> Iniciar sesión
                </button>
              </form>
              {error && <p className="red-text">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
