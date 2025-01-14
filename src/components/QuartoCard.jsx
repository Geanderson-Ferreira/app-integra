import React, { useState, useEffect } from "react";
import QuartoDetails from "./QuartoDetails";


function QuartoCard({ quarto }) {
  const [showPopup, setShowPopup] = useState(false);

  const [roomData, setRoomData] = useState(quarto)

  const roomType = quarto.roomType.roomType;
  const roomNumber = quarto.roomId;
  const housekeepingStatus =
    quarto.housekeeping.housekeepingRoomStatus.housekeepingRoomStatus;
  const frontOfficeStatus =
    quarto.housekeeping.housekeepingRoomStatus.frontOfficeStatus;

  const roomStatusClassesBgColors = {
    OutOfService:
      "block max-w-32 p-3 items-center text-center bg-gray-500 text-white border border-gray-200 rounded-lg shadow hover:bg-gray-400",
    Clean:
      "block max-w-32 p-3 items-center text-center bg-green-500 text-white border border-gray-200 rounded-lg shadow hover:bg-green-400",
    Dirty:
      "block max-w-32 p-3 items-center text-center bg-red-500 text-white border border-gray-200 rounded-lg shadow hover:bg-red-400",
    OutOfOrder:
      "block max-w-32 p-3 items-center text-center bg-yellow-500 text-white border border-gray-200 rounded-lg shadow hover:bg-yellow-400",
    Inspected:
      "block max-w-32 p-3 items-center text-center bg-blue-500 text-white border border-gray-200 rounded-lg shadow hover:bg-blue-400",
  };

  const classCardColor =
    roomStatusClassesBgColors[housekeepingStatus] ||
    "block max-w-32 p-3 items-center text-center bg-gray-300 text-white border border-gray-200 rounded-lg shadow hover:bg-gray-200 cursor-pointer";

  const abreTelaPopUp = () => {
    setShowPopup(true);
    window.history.pushState({ popup: true }, ""); // Adiciona ao histórico
  };

  const fechaPopup = () => {
    setShowPopup(false);
    window.history.back(); // Volta no histórico
  };

  useEffect(() => {
    const handlePopState = () => {
      setShowPopup(false); // Fecha o popup ao pressionar "voltar"
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <>
      <a onClick={abreTelaPopUp} className={classCardColor}>
        <h5 className="mb-1 text-xl font-bold tracking-tight text-white">
          {roomNumber}
        </h5>
        <h5 className="mb-1 text-lg tracking-tight text-white">
          {roomType}
        </h5>
        <h5 className="mb-1 text-lg tracking-tight text-white">
          {frontOfficeStatus}
        </h5>
        <h5 className="mb-1 text-lg tracking-tight text-white">
          {housekeepingStatus}
        </h5>
      </a>

      {showPopup && (

        //Inicio componente
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={fechaPopup} // Fecha ao clicar fora do modal
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm"
            onClick={(e) => e.stopPropagation()} // Evita o clique no modal de fechar
          >
            <h2 className="text-xl font-bold mb-4">Informações do Quarto</h2>
            <p className="mb-2">
              <strong>Número do Quarto:</strong> {roomNumber}
            </p>
            <p className="mb-2">
              <strong>Tipo do Quarto:</strong> {roomType}
            </p>
            <button
              onClick={fechaPopup}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Fechar
            </button>
          </div>
        </div>
      )
      
      //Fim componente
      }
    </>
  );
}

export default QuartoCard;
