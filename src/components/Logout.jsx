import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    function makeLogout() {
        // Remover itens do localStorage
        localStorage.removeItem('INTEGRATOKEN');
        localStorage.removeItem('INTEGRATOKENVAL');
        localStorage.removeItem('INTEGRAUSER');

        // Navegar para a rota '/login'
        navigate('/login');
        
        //Refresh Page
        window.location.reload();
    }

    return (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
            <button
                onClick={makeLogout}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
            >
                Sign out
            </button>
        </div>
    );
}

export default Logout;
