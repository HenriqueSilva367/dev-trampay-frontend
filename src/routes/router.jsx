import { Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home/index";
import SignUp from "../pages/SignUp/index";
import SigIn from "../pages/SignIn/index";
import { getItem } from "../utils/storage";

function ProtectedRoutes({ component : Component }) {
  
  const isAuthenticated  = getItem('token')

  return isAuthenticated ? Component : < Navigate to='/login' /> 
}

function MainRoutes() {
  return (
    
    <Routes>
        <Route path="/" element={<SigIn />} />
        <Route path="/login" element={<SigIn />} />
        <Route path="/home" element={<ProtectedRoutes component={<Home />}/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    
  );
}

export default MainRoutes;