import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getItem } from "../utils/storage";

function PrivateRouter({children}: any){

  const token =  getItem("token");
  return token ? children : <Navigate to='/'/>
}

export default PrivateRouter;