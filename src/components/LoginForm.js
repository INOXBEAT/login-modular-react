import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregarías tu lógica de validación y autenticación
    if (!email || !password) {
      setError('Por favor, ingresa ambos campos');
    } else {
      // Aquí podrías agregar tu lógica de inicio de sesión
      console.log('Email:', email);
      console.log('Contraseña:', password);
      setError('');
    }
  };

  return (
    <div className="login-form">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="btn-submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
