import React, { useState, useEffect, Fragment } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Try = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Add
    const [leave, setLeave] = useState('')
    const [startdate, setStartdate] = useState('')
    const [enddate, setEnddate] = useState('')
    const [comments, setComments] = useState('')

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
        // alert(id);
        handleShow();
        axios.get(`http://localhost:5219/api/Leaveapply/${id}`)
            .then((result) => {
                setEditLeave(result.data.leave);
                setEditStartdate(result.data.birthday);
                setEditEnddate(result.data.joindate);
                setEditComments(result.data.comments);
                setEditId(id);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete this Leave request") === true) {
            axios.delete(`http://localhost:5219/api/Leaveapply/${id}`)
                .then((result) => {
                    if (result.status === 200) {
                        toast.success("Leave request has been deleted");
                        getData();
                    }
                })
                .catch((error) => {
                    toast.error(error);
                })
        }
    }

    const handleSave = () => {
        const url = 'http://localhost:5219/api/Leaveapply';
        const data = {

            "leave": leave,
            "birthday": startdate,
            "joindate": enddate,
            "comments": comments
        }
        axios.post(url, data)
            .then((result) => {
                getData();
                clear();
                toast.success('Leave request has been created');
            })
            .catch((error) => {
                toast.error(error);
            })
    }

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
            "birthday": editStartdate,
            "joindate": editEnddate,
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

    // Function to fetch data from the second API endpoint
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
            <ToastContainer />
            <Container><br />
                <h1>Apply For Leave</h1> <hr />

                <form onSubmit={(e) => {
    e.preventDefault();
    handleSave();
}}>
    {/* Leave Type */}
    {additionalData.length > 0 ? (
        <select
            className="form-control"
            value={leave}
            onChange={(e) => setLeave(e.target.value)}
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
            value={leave}
            onChange={(e) => setLeave(e.target.value)}
            required
        />
    )}

    {/* Start date */}
    <label htmlFor="">Start date</label>
    <input
        type="date"
        className="form-control"
        placeholder="Start date"
        value={startdate}
        onChange={(e) => setStartdate(e.target.value)}
        required
    />

    {/* End date */}
    <label htmlFor="">End date</label>
    <input
        type="date"
        className="form-control"
        placeholder="End date"
        value={enddate}
        onChange={(e) => setEnddate(e.target.value)}
        required
    />

    {/* Request Comments */}
    <label htmlFor="">Request Comments</label>
    <input
        type="text"
        className="form-control"
        placeholder="Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        required
    />

    {/* Submit button */}
    <button type="submit" className="btn btn-primary">Create</button>
</form>


            </Container>

        </Fragment>
    )
}

export default Try;