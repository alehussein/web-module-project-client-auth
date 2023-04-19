import React from "react";
import { Outlet, Navigate } from "react-router-dom";


 export const PrivateRoutes = () => {
    let auth = {'token': localStorage.getItem('token') ? true : false}
    return(
       auth.token ? <Outlet/> : <Navigate to="/" /> 
    )
}




