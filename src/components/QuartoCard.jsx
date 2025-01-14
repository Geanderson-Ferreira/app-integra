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
  return (
    <>
      <a href={`/quartos/${roomNumber}`} className={classCardColor}>
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
    </>
  );
}

export default QuartoCard;
