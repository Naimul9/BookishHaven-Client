import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Main = () => {
    return (
        <div>
            {/* navbar */}
<Navbar/>
            {/* Outlet */}
<Outlet></Outlet>
            {/* Footer */}
            
        </div>
    );
};

export default Main;