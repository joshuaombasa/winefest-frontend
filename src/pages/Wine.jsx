import React from "react";
import { useParams } from "react-router-dom";


export default function Wine() {

    const id = useParams()
    console.log(id)

    return (
        <div className="wine--page">

        </div>
    )
}