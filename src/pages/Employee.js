import { React, useEffect, useState } from 'react'
import Navbar from "../components/NavBar";
import Axios from "axios";
import "./employee.css";

function Employee() {

    const [empList, setEmpList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/read").then((response) => {
            setEmpList(response.data);
        })
    }, []);

    return (
        <div className='container'>
            <Navbar />
            <div className="title">Employees</div>
            <div className="data">
                {empList.map((val, key) => {
                    return (
                        <div className='empData'>
                            <h2>{val.name}</h2>
                            <h3>{val.dob}</h3>
                            <h3>{val.email}</h3>
                            <h3>{val.phone}</h3>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Employee