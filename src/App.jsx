import React from "react";
// Components
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import Counter from "./components/Counter/Counter";
import "./App.css";

const name = "Pepe";
const age = 22;
const city = "San Martin de Los Andes";

const App = () => {
  return (
    <div className="container">
      <Header title="JSX, Components and State" subtitle="Clase - 02" />
      <h1>JSX, Componentes y Estado</h1>
      <h2>Nombre de usuario: {name.toUpperCase()}</h2>
      <span>Edad de usuario: {age + 8}</span>
      <span>Ciudad del usuario: {city}</span>
      <div className="grid">
        <CardUser
          name="Jualian Zanetti"
          profession="Frontend Developer"
          img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardUser
          name="Mariana Di Carlo"
          profession="UX/UI"
          img="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardUser
          name="Pablo Zabaletta"
          profession="Backend Developer"
          img="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <Counter />
    </div>
  );
};

export default App;
