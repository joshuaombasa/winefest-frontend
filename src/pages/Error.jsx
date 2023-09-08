import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="error--page--container">
            <div>
                <h1 className="error--message">Resource not found</h1>
                <Link to="home">Go to home page</Link>
            </div>
        </div>
    )
}