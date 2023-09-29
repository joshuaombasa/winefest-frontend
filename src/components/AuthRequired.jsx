import React from "react";
import { Outlet, Navigate } from "react-router-dom";



export default function AuthRequired() {


    const [isLoggedIn, setIsLoggedIn] = React.useState(true)

    if (!isLoggedIn) {
        return  <Navigate to="/login"/>
    }
    return <Outlet/>
}