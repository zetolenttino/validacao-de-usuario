import React from "react";
import "./styles.css";

export default function App() {
  // estou definindo um ESTADO no react. Um estado provoca um redesenho(render) da tela quando é modificado
  const [codigo, setCodigo] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [mostrarSenha, setMostrarSenha] = React.useState(false);

  return (
    <div className="App">
      <h1>Usuario</h1>
      <input
        value={codigo}
        // quer dizer que o conteúdo do input é igual à váriavel codigo
        onChange={(
          e // quer dizer que quando o usuario digita eu vou mudar o valor da variável código
        ) => setCodigo(e.target.value)}
      />
      <input
        type="button"
        value="Enviar"
        onClick={() => {
          if (codigo === "1234") {
            setMsg("Código válido");
            setMostrarSenha(true);
          } else {
            setMsg("Código inválido");
            setMostrarSenha(false);
          }
        }}
      />

      {msg}
      {mostrarSenha ? <Senha /> : null}
    </div>
  );
}

function Senha() {
  const [senha, setSenha] = React.useState("");
  const [msgSenha, setMsgSenha] = React.useState("");

  return (
    <div>
      <h1>Senha{}</h1>
      <input
        value={senha}
        // quer dizer que o conteúdo do input é igual à váriavel codigo
        onChange={(
          e // quer dizer que quando o usuario digita eu vou mudar o valor da variável código
        ) => setSenha(e.target.value)}
      />
      <input
        type="button"
        value="Enviar"
        onClick={() => {
          if (senha === "9999") setMsgSenha("Acesso permitido");
          else setMsgSenha("Senha inválida");
        }}
      />
      {msgSenha}
    </div>
  );
}
