import React, { useState, useEffect, Fragment } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import Container from "react-bootstrap/Container";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../common/navbar";

const MyLeave = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // delete
    const [deleteItemId, setDeleteItemId] = useState(null);
    const handleDeleteConfirmation = (id) => {
        setDeleteItemId(id);
        handleShow1();
    };

    // Add
    const [setLeave] = useState('')
    const [setStartdate] = useState('')
    const [setEnddate] = useState('')
    const [setComments] = useState('')

    //Edit
    const [editID, setEditId] = useState('')
    const [editLeave, setEditLeave] = useState('')
    const [editStartdate, setEditStartdate] = useState('')
    const [editEnddate, setEditEnddate] = useState('')
    const [editComments, setEditComments] = useState('')

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:5219/api/Leaveapply')
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleEdit = (id) => {
        handleShow();
        axios.get(`http://localhost:5219/api/LeaveApply/${id}`)
            .then((result) => {
                const { leave, startdate, enddate, comments } = result.data;
                setEditLeave(leave);
                setEditStartdate(new Date(startdate).toISOString().substr(0, 10));
                setEditEnddate(new Date(enddate).toISOString().substr(0, 10));
                setEditComments(comments);
                setEditId(id);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const confirmDelete = () => {
        if (deleteItemId) {
            axios.delete(`http://localhost:5219/api/Leaveapply/${deleteItemId}`)
                .then((result) => {
                    if (result.status === 200) {
                        toast.success("Leave request has been deleted");
                        getData();
                        handleClose1();
                    }
                })
                .catch((error) => {
                    toast.error(error);
                });
        }
    };

    const clear = () => {
        setLeave('');
        setStartdate('');
        setEnddate('');
        setComments('');

        setEditLeave('');
        setEditStartdate('');
        setEditEnddate('');
        setEditComments('');
        setEditId('');
    }

    const handleUpdate = () => {
        const url = `http://localhost:5219/api/Leaveapply/${editID}`;
        const data = {
            "id": editID,
            "leave": editLeave,
            "startdate": editStartdate,
            "enddate": editEnddate,
            "comments": editComments
        }
        axios.put(url, data)
            .then((result) => {
                handleClose();
                getData();
                clear();
                toast.success('Leave request has been updated');
            })
            .catch((error) => {
                toast.error(error);
            })
    }

    const [additionalData, setAdditionalData] = useState([]);

    // API from different file endpoint
    useEffect(() => {
        axios.get('http://localhost:5219/api/Leavetype')
            .then((result) => {
                setAdditionalData(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <Fragment>
            <Navbar user />
            <ToastContainer />
            <Container>
                <br />
                <h1 className="text-primary">My leave Requests</h1> <hr />
                <Table striped hover className="table-secondary">
                    <thead>
                        <tr>
                            <th>Leave Type</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Comments</th>
                            <th>Actions</th>
                        </tr>
                    </thead> <br />
                    <tbody>
                        {
                            data && data.length > 0 ?
                                data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.leave}</td>
                                            <td>{item.startdate}</td>
                                            <td>{item.enddate}</td>
                                            <td>{item.comments}</td>
                                            <td>
                                                <button className="btn btn-primary" onClick={() => handleEdit(item.id)}> <FontAwesomeIcon icon={faPencil} /> </button> &nbsp;
                                                <button className="btn btn-danger" onClick={() => handleDeleteConfirmation(item.id)}> <FontAwesomeIcon icon={faTrash} /> </button>
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

            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handleUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-primary">Update Leave Request</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col>
                            <label htmlFor="">Leave Type</label>
                            {additionalData.length > 0 ? (
                                <select
                                    className="form-control"
                                    value={editLeave}
                                    onChange={(e) => setEditLeave(e.target.value)}
                                    required
                                >
                                    <option value="">--Select Leave Type--</option>
                                    {additionalData.map((item) => (
                                        <option key={item.id} value={item.leave}>
                                            {item.leave}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Leave Type"
                                    value={editLeave}
                                    onChange={(e) => setEditLeave(e.target.value)}
                                    required
                                />
                            )}

                        </Col><br />
                        <Row>
                            <Col>
                                <label htmlFor="">Start date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Start date"
                                    value={editStartdate}
                                    onChange={(e) => setEditStartdate(e.target.value)}
                                    required
                                />
                            </Col>
                            <Col>
                                <label htmlFor="">End date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="End date"
                                    value={editEnddate}
                                    onChange={(e) => setEditEnddate(e.target.value)}
                                    required
                                />
                            </Col>
                        </Row>
                        <br />
                        <Col>
                            <label htmlFor="">Comments</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Comments"
                                value={editComments}
                                onChange={(e) => setEditComments(e.target.value)}
                                required
                            />
                        </Col>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this Leave request?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default MyLeave;
