import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {


    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const nav = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    }, [])


    const handleUpdate = (e) => {
        e.preventDefault();
        // console.log("Id...",id);
        axios.put(`http://localhost:3000/users/${id}`,
            {
                name: name,
                email: email,
            }
        ).then(() => {
            nav("/read");                     //after updating it will redirect to this page
        })
    }
    return (
        <>
            <h1>Update</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleUpdate}
                >
                    Update
                </button>
                

                <Link to = "/read">
                    <button className="btn btn-secondary">Back</button>
                </Link>
            </form>
        </>
    )
}

export default Update