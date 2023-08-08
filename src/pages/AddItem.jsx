import React from "react";
import AddItemForm from "../components/AddItemForm";
import Login from "./Login";

export default function AddItem() {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const[authKey, setAuthKey] = React.useState(localStorage.getItem('token'))

    React.useEffect(() => {
        fetch('http://localhost:3000/vendor', {
            method: 'GET',
            headers: {
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(res => {
            if (res.ok) {
                res.json()
                setIsLoggedIn(true)
            }
        })
        .then(data => console.log(data))
        .catch(error => {
            console.error(error)
        })
    },[authKey])

    return (
        <>
        {isLoggedIn ? <AddItemForm/> : <Login/>}
        </>
    )
}
