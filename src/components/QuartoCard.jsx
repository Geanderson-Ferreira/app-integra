import React, { useEffect } from "react";

function QuartoCard({quarto}) {

  const roomType = quarto.roomType.roomType
  const roomNumber = quarto.roomId
  const housekeepingStatus = quarto.housekeeping.housekeepingRoomStatus.housekeepingRoomStatus
  const frontOfficeStatus = quarto.housekeeping.housekeepingRoomStatus.frontOfficeStatus
  const isPseudoRoom = quarto.roomType.pseudoRoom
  const floor = quarto.floor

  const roomStatusClassesBgColors = {
    'OutOfService': '',
    'Clean': 'bg-green-800',
    'Dirty': 'bg-gray-800',
    'OutOfOrder': '',
    'Inspected': ''
  }

  const bgCardColor = roomStatusClassesBgColors[housekeepingStatus]

  const classCardColor = `block max-w-32 p-3 items-center text-center bg-white border border-gray-200 rounded-lg shadow-slate-900 hover:bg-gray-100 dark:${bgCardColor} dark:border-gray-700 dark:hover:bg-gray-700`
  
  return(
        <a href="#" className={classCardColor}>      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{roomNumber}</h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{frontOfficeStatus}</h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{housekeepingStatus}</h5>
        </a>
  )
}
export default QuartoCard;
