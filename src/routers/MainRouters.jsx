import { Route, Routes } from "react-router-dom";
// import components
import Home from "../pages/home/home";
import Error from "../pages/error/error";


export default function MainRouters(){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}