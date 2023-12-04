import React, { useState, useEffect, Fragment } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../common/navbar'

const Employees = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:5219/api/User')
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete this Employee") === true) {
            axios.delete(`http://localhost:5219/api/User/${id}`)
                .then((result) => {
                    if (result.status === 200) {
                        toast.success("Employee has been deleted");
                        getData();
                    }
                })
                .catch((error) => {
                    toast.error(error);
                })
        }
    }

    return (
        <Fragment>
            <Navbar admin />
            <br />
            <ToastContainer />
            <Container>
                <h1>Employees</h1> <hr />
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth date</th>
                            <th>Joined date</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.length > 0 ?
                                data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.birthday}</td>
                                            <td>{item.joindate}</td>
                                            <td>{item.username}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                'Loading.....'
                        }

                    </tbody>
                </Table>
            </Container>
        </Fragment>
    )
}

export default Employees;
