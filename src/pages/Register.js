import React from 'react'
import NavBar from '../components/NavBar'
import './register.css';
function Register() {
    return (
        <div className='container'>
            <NavBar />
            <h1>Register with correct details</h1>
            <div className="form">
                <form action='POST' className='flex-form'>
                    <div className="field">
                        <label>Full Name <br />
                            <input type="text" />
                        </label>
                    </div>
                    <div className="field">
                        <label>Date of Birth <br />
                            <input type="date" />
                        </label>
                    </div>
                    <div className="field">
                        <label>Email <br />
                            <input type="text" />
                        </label>
                    </div>
                    <button>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Register