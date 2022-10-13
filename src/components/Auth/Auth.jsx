import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { validateInput } from "../../utils/inputUtils";
import "./Auth.css";

const Auth = () => {
  const [inLogin, setInLogin] = useState(false);
  const [input, setInput] = useState({ email: null, password: null });
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const title = inLogin ? "Ingresá" : "Registrate";
  const message = inLogin
    ? "No tenés una cuenta? Registrate!"
    : "Ya tenés una cuenta? Ingresá!";
  const messageButton = inLogin ? "Iniciar sesión" : "Registrarme";

  const onHandleAuth = () => {
    validate("email", input.email);
    validate("password", input.password);
  };
  const validate = (type, input) => {
    const { error, hasError } = validateInput(type, input);
    if (type === "email") {
      hasError ? setErrorEmail(error) : setErrorEmail(null);
    } else {
      hasError ? setErrorPassword(error) : setErrorPassword(null);
    }
  };

  return (
    <div className="containerAuth">
      <h2>{`${title} en El Tottem Muñiz`}</h2>
      <div className="inputsAuth">
        <input
          type="text"
          placeholder="Ingresá tu correo"
          onChange={(event) =>
            setInput({ ...input, email: event.target.value })
          }
        />
        {errorEmail && <p className="errorMsg">{errorEmail}</p>}
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(event) =>
            setInput({ ...input, password: event.target.value })
          }
        />
        {errorPassword && <p className="errorMsg">{errorPassword}</p>}
      </div>
      <div className="footerAuth">
        <Button variant="danger" onClick={onHandleAuth}>
          {messageButton}
        </Button>
        <br />
        <Button
          variant="transparent"
          className="botonChange"
          onClick={() => setInLogin(!inLogin)}
        >
          {message}
        </Button>
      </div>
    </div>
  );
};

export default Auth;
