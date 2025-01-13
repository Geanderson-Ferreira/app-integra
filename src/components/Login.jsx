import React, { useState, useEffect, useContext } from "react";
import axios from "../api/axiosConfig";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import { ConciergeBell } from 'lucide-react';
import { userContext } from "../context/UserContext"; 


function Login() {
  const navigate = useNavigate();
  const { setAuth } = useContext(userContext); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/login", {
        usuario: username,
        senha: password,
      });

      const { access_token, logged_user, expire } = response.data;
      const expirationTime = new Date().getTime() + expire * 60000; //60000 = em minutos

      localStorage.setItem("INTEGRATOKEN", access_token);
      localStorage.setItem("INTEGRAUSER", logged_user);
      localStorage.setItem("INTEGRATOKENVAL", expirationTime);

      setAuth(true)
      navigate("/index");
    } catch (err) {
      setError(`Usuário ou senha inválidos! ${err}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <ConciergeBell className="flex mx-auto mb-4 size-16" />
        <h2 className="text-black text-2xl font-bold mb-6 text-center">Integra Hotel</h2>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            className="w-full p-3 text-gray-800 rounded border border-gray-300 focus:outline-none focus:border-black"
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="w-full p-3 text-gray-800 rounded border border-gray-300 focus:outline-none focus:border-black"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-600 text-white font-bold py-3 rounded transition duration-200"
          >
            Entrar
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
