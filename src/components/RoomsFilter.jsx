function RoomFilters({ onFilterChange, availableFilters }) {
  return (
      <div className="filters  space-y-4 sm:space-y-0 sm:flex sm:flex-row sm:items-start sm:w-full sm:h-auto sm:sticky sm:top-[60px] sm:left-0 place-items-end sm:px-4 sm:py-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {/* // <div className="filters space-y-4 sm:space-y-0 sm:flex sm:flex-row sm:items-start sm:w-full sm:h-auto sm:sticky sm:top-[60px] sm:left-0 sm:px-4 sm:py-6 grid grid-cols-2 sm:grid-cols-4 gap-4"> */}

          <div className="filter-item flex flex-col space-y-2 w-full">
              <label htmlFor="housekeepingStatus" className="text-sm font-medium text-gray-700 ">Status de Limpeza</label>
              <select
                  id="housekeepingStatus"
                  onChange={(e) => onFilterChange("housekeepingStatus", e.target.value)}
                  defaultValue=""
                  className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                  <option value="">Tudo</option>
                  {availableFilters.housekeepingStatus.map((status) => (
                      <option key={status} value={status}>
                          {status}
                      </option>
                  ))}
              </select>
          </div>

          <div className="filter-item flex flex-col space-y-2 w-full">
              <label htmlFor="frontOfficeStatus" className="text-sm font-medium text-gray-700">Status da Recepção</label>
              <select
                  id="frontOfficeStatus"
                  onChange={(e) => onFilterChange("frontOfficeStatus", e.target.value)}
                  defaultValue=""
                  className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                  <option value="">Tudo</option>
                  {availableFilters.frontOfficeStatus.map((status) => (
                      <option key={status} value={status}>
                          {status}
                      </option>
                  ))}
              </select>
          </div>

          <div className="filter-item flex flex-col space-y-2 w-full">
              <label htmlFor="roomType" className="text-sm font-medium text-gray-700">Tipo de Quarto</label>
              <select
                  id="roomType"
                  onChange={(e) => onFilterChange("roomType", e.target.value)}
                  defaultValue=""
                  className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                  <option value="">Tudo</option>
                  {availableFilters.roomType.map((type) => (
                      <option key={type} value={type}>
                          {type}
                      </option>
                  ))}
              </select>
          </div>

          <div className="filter-item flex flex-col space-y-2 w-full">
              <label htmlFor="floor" className="text-sm font-medium text-gray-700">Andar</label>
              <select
                  id="floor"
                  onChange={(e) => onFilterChange("floor", e.target.value)}
                  defaultValue=""
                  className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                  <option value="">Tudo</option>
                  {availableFilters.floor.map((floor) => (
                      <option key={floor} value={floor}>
                          {floor}
                      </option>
                  ))}
              </select>
          </div>
      </div>
  );
}

export default RoomFilters;
