import { React, useEffect } from 'react'
import Navbar from "../components/NavBar";
import Axios from "axios";

function Employee() {

    useEffect(() => {
        Axios.get("http://localhost:3001/read").then((response) => {
            console.log(response);
        })
    }, []);

    return (
        <div>
            <Navbar />
            <div className="title">Employees</div>
            <div className="data">
            </div>
        </div>
    )
}

export default Employee