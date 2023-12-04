import React, { useState, useEffect, Fragment } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../common/navbar'

const Leavetype = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Add
    const [leave, setLeave] = useState('')
    const [days, setDays] = useState('')

    //Edit
    const [editID, setEditId] = useState('')
    const [editLeave, setEditLeave] = useState('')
    const [editDays, setEditDays] = useState('')

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:5219/api/Leavetype')
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleEdit = (id) => {
        handleShow();
        axios.get(`http://localhost:5219/api/Leavetype/${id}`)
            .then((result) => {
                setEditLeave(result.data.leave);
                setEditDays(result.data.days);
                setEditId(id);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete this Leave type") === true) {
            axios.delete(`http://localhost:5219/api/Leavetype/${id}`)
                .then((result) => {
                    if (result.status === 200) {
                        toast.success("Leave type has been deleted");
                        getData();
                    }
                })
                .catch((error) => {
                    toast.error(error);
                })
        }
    }

    const handleSave = () => {
        const url = 'http://localhost:5219/api/Leavetype';
        const data = {

            "leave": leave,
            "days": days
        }
        axios.post(url, data)
            .then((result) => {
                getData();
                clear();
                toast.success('Leave type has been added');
            })
            .catch((error) => {
                toast.error(error);
            })
    }

    const clear = () => {
        setLeave('');
        setDays('');

        setEditLeave('');
        setEditDays('');
        setEditId('');
    }


    const handleUpdate = () => {
        const url = `http://localhost:5219/api/Leavetype/${editID}`;
        const data = {
            "id": editID,
            "leave": editLeave,
            "days": editDays
        }
        axios.put(url, data)
            .then((result) => {
                handleClose();
                getData();
                clear();
                toast.success('Leave type has been updated');
            })
            .catch((error) => {
                toast.error(error);
            })
    }

    return (
        <Fragment>
            <Navbar admin /> <br />
            <div className="container">
            <ToastContainer />
                <h1>Create Leave Type</h1> <hr />
                <label htmlFor="">Leave Type</label>
                <input type="text" className="form-control" placeholder="Leave Type" value={leave} onChange={(e) => setLeave(e.target.value)}></input>
                <br />
                <label htmlFor="">No. of days</label>
                <input type="number" className="form-control" placeholder="No. of Days" value={days} onChange={(e) => setDays(e.target.value)}></input>
                <br />
                <button className="btn btn-primary" onClick={() => handleSave()}>Create</button>

            <br></br>
                <h1>Index (Leave Types)</h1> <hr />
                <Table>
                    <thead>
                        <tr>
                            <th>Leave Type</th>
                            <th>No. of Days</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.length > 0 ?
                                data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.leave}</td>
                                            <td>{item.days}</td>
                                            <td>
                                                <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Leave Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <label htmlFor="">Leave Type</label>
                            <input type="text" className="form-control" placeholder="Leave Type" value={editLeave} onChange={(e) => setEditLeave(e.target.value)}></input>
                        </Col>
                        <Col>
                            <label htmlFor="">No. of days</label>
                            <input type="number" className="form-control" placeholder="No. of Days" value={editDays} onChange={(e) => setEditDays(e.target.value)}></input>
                        </Col>

                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </Fragment>
    )
}

export default Leavetype;
