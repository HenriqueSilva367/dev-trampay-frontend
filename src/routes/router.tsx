import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/SignIn/index";
import SignUp from '../pages/SignUp/index'
import Home from "../pages/Home/index";
import PrivateRouter from "./privateRoutes";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
