import React, {useState} from "react";

export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function handleChange (event) {
        const {name, value} = event.target
        setFormData(prevFormData => (
            {
                ...prevFormData,
                [name] : value
            }
        ))
    }


    function handleSubmit(event) {
        event.preventDefault()
    
        const loginUser = async () => {
            try {
                const res = await fetch('http://localhost:3000/login', {
                    method : 'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify(formData)
                })
                const data = await res.json()
                localStorage.setItem('token', data.token)
                console.log(data.token)
            } catch(error) {
                console.error(error)
            }
        }

        loginUser()
    }

    return (
        <div className="login--container">
            <form onSubmit={handleSubmit} className='login--form'>
                <label htmlFor="dealer--email">Enter email:</label>
                <input 
                      type="email" 
                      className="dealer--email"  
                      id="dealer--email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                />
                <label htmlFor="dealer--password">Enter password:</label>
                <input 
                      type="password"  
                      className="dealer--password" 
                      id="dealer--password" 
                      name="password"
                      onChange={handleChange}
                      value={formData.password}
                />
                <button>Login</button>
            </form>
        </div>
    )
}