import React from "react";

export default function VendorSignup() {

    const [formData, setFormData] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => (
            {
                ...prevFormData,
                [name] : value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
       
        fetch('http://localhost:3000/vendor', {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className="vendor--signup--container">
            <form onSubmit={handleSubmit} className="add--item--form">
                <label htmlFor="firstname">Firstname:</label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                />
                <label htmlFor="">Lastname:</label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}