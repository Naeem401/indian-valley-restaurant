import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";


const Mainlayout = () => {
    return (
        <div className="bg-[#1a103d]">
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Mainlayout;