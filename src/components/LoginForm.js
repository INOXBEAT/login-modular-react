import React, { useState } from 'react';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificación de campos vacíos
    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresa ambos campos',
      });
      return;
    }

    // Validación del formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresa un email válido',
      });
      return;
    }

    // Si todo es correcto
    console.log('Email:', email);
    console.log('Contraseña:', password);
    
    Swal.fire({
      icon: 'success',
      title: '¡Bienvenido!',
      text: 'Inicio de sesión exitoso',
    });

    // Limpiar los campos después del inicio de sesión exitoso
    setEmail('');
    setPassword('');
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
                <button type="submit" className="btn-submit">
                  <i className="fas fa-sign-in-alt"></i> Iniciar sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
