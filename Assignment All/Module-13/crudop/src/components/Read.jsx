import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Read = () => {
    // store the data 
    const [data, setData] = useState([])  //we make data as empty array and we store data in it
    const [search, setSearch] = useState("");


    // getdata using .get method
    function getData() {
        axios.get('http://localhost:3000/users')
            .then((res) => {
                // console.log(res.data);
                setData(res.data) //now in array data all data come
            })
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(() => {
                getData()
            })
    }


    // store in localstorge onclick on edit button
    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }
    useEffect(() => {
        getData();
    }, [])                 //whenever there is change in data this useeffect will run  IF we give the value[data] in square bracket it will continusly run and not stop so keep it empty



    const searchHandler = (e) => {
        setSearch(e.target.value.toLowerCase());
    }

    return (
        <>
            <div className="d-flex justify-content-between m-2">
                <h1>Read Operation</h1>
                <div>
                    <input type="search" placeholder="search here" className="form-control" name="" id="" onChange={searchHandler} />
                </div>
                <Link to="/">
                    <button className="btn btn-primary">Create</button>
                </Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {   //we have made a loop and data will read 
                    data.filter((el) => {
                        if (el === '') {
                            return el
                        }
                        else {
                            return (
                                el.name.toLowerCase().includes(search) ||
                                el.email.toLowerCase().includes(search)
                            )
                        }
                    })
                        .map((e) => {
                            return (

                                <tbody>
                                    <tr >
                                        <th scope="row" >{e.id}</th>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>
                                            <Link to="/update">
                                                <button className=" btn btn-success" onClick={() => setToLocalStorage(e.id, e.name, e.email)}>Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleDelete(e.id)}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>

                            )
                        })




                }
            </table>
        </>
    )
}

export default Read