import React from "react";
import { redirect } from "react-router-dom";
import AddItemForm from "../components/AddItemForm";
import Login from "./Login";

export default function AddItem() {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    // const[authKey, setAuthKey] = React.useState(() => localStorage.getItem('token'))

    // React.useEffect(() => {
    //     fetch('http://localhost:3000/vendor', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization' : localStorage.getItem('token')
    //         }
    //     })
    //     .then(res => {
    //         if (res.ok) {
    //             setIsLoggedIn(true)
    //         } else {
    //             return redirect("/login")
    //         }

    //        return res.json()
    //     })
    //     .then(data => {
    //         console.log(data)

    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
    // },[authKey])


    return (
        <AddItemForm/>
    )
}
