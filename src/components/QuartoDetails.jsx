function QuartoDetails ({roomData, onClick}){

    const roomNumber = roomData.roomId
    const roomType = roomData.roomType.roomType

    return (
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
          onClick={onClick}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Fechar
        </button>
      </div>
    </div>
  )
}

export default QuartoDetails