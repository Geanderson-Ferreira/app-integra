import React, { useState, useContext } from "react";
import axios from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import { ConciergeBell } from "lucide-react";
import { userContext } from "../context/UserContext";

function Login() {
  const navigate = useNavigate();

  const { auth } = useContext(userContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { updateUserContext } = useContext(userContext);

const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const response = await axios.post("/login_v3", {
      usuario: username,
      senha: password,
    });

    const expirationTime = new Date().getTime() + response.data.expire * 60000;

    const userData = {
      ...response.data,
      expirationTime,
    };

    // Atualizar Local Storage
    localStorage.setItem("_dataIntegra", JSON.stringify(userData));

    // Atualizar o contexto do usuário
    updateUserContext({
      access_token: userData.access_token,
      auth: true,
      expire: userData.expire,
      loggedUser: userData.logged_user,
      userName: userData.user_name,
    });

    // Navegar para a página inicial
    navigate("/quartos");
  } catch (err) {
    setError(`Usuário ou senha inválidos! ${err}`);
  }
};
;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <ConciergeBell className="flex mx-auto mb-4 size-16" />
        <h2 className="text-black text-2xl font-bold mb-6 text-center">
          Integra Hotel
        </h2>
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
