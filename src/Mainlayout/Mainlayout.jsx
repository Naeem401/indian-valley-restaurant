import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";


const Mainlayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Mainlayout;