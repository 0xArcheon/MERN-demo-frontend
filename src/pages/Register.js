import React from 'react'
import NavBar from '../components/NavBar'
import { useState } from 'react';
import { redirect } from "react-router-dom";
import Axios from "axios";
import './register.css';
function Register() {

    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    async function onSubmit(e) {
        Axios.post("http://localhost:3001/insert", {
            name: name,
            dob: dob,
            email: email,
            phone: phone
        });
    }

    return (
        <div className='container'>
            <NavBar />
            <h1>Register with correct details</h1>
            <div className="form">
                <div className='flex-form'>
                    <div className="field">
                        <label>Full Name <br />
                            <input type="text" value={name} id="name"
                                onChange={(e) => { setName(e.target.value) }} />
                        </label>
                    </div>
                    <div className="field">
                        <label>Date of Birth <br />
                            <input type="date" value={dob} id="dob"
                                onChange={(e) => { setDob(e.target.value) }} />
                        </label>
                    </div>
                    <div className="field">
                        <label>Email <br />
                            <input type="email" value={email} id="email"
                                onChange={(e) => { setEmail(e.target.value) }} />
                        </label>
                    </div>
                    <div className="field">
                        <label>Contact Number <br />
                            <input type="text" value={phone} id="phone"
                                onChange={(e) => { setPhone(e.target.value) }} />
                        </label>
                    </div>
                    <input type="button" value="SUBMIT" className='btn' onClick={onSubmit}></input>
                </div>

            </div>
        </div>
    )
}

export default Register