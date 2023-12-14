import React, { useState, useEffect, Fragment } from "react";
import Navbar from "../common/navbar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Leaverequest = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get("https://localhost:44372/api/LeaveApply")
            .then((result) => {
                setData(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const filteredData = data.filter((item) =>
        item.leave.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleAccept = (id) => {
        axios.put(`https://localhost:44372/api/LeaveApply/${id}/Accept`)
            .then(() => {
                toast.success("Leave request accepted");
                getData();
            })
            .catch((error) => {
                toast.error("Error accepting leave request");
                console.log(error);
            });
    };

    const handleDecline = (id) => {
        axios.put(`https://localhost:44372/api/LeaveApply/${id}/Decline`)
            .then(() => {
                toast.success("Leave request declined");
                getData();
            })
            .catch((error) => {
                toast.error("Error declining leave request");
                console.log(error);
            });
    };

    return (
        <Fragment>
            <Navbar admin />
            <ToastContainer />
            <br />
            <div className="container">
                <ToastContainer />
                <h1 className="text-primary">Admin Leave Request Log</h1>
                <hr />
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by leave type"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Table striped hover className="table-light">
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Leave Type</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Comments</th>
                            <th>Actions</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((item, index) => (
                            <tr key={index}>
                                <td>{item.userName}</td>
                                <td>{item.leave}</td>
                                <td>{item.startdate}</td>
                                <td>{item.enddate}</td>
                                <td>{item.comments}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        disabled={item.status === 'Accepted' || item.status === 'Declined'}
                                        onClick={() => handleAccept(item.id)}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="btn btn-danger ms-2"
                                        disabled={item.status === 'Accepted' || item.status === 'Declined'}
                                        onClick={() => handleDecline(item.id)}
                                    >
                                        Decline
                                    </button>
                                </td>
                                <td>
                                    <div className={`badge text-wrap ${item.status === 'pending' ? 'bg-warning' : item.status === 'Accepted' ? 'bg-success' : item.status === 'Declined' ? 'bg-danger' : ''}`}>
                                        {item.status}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {Array.from(
                                { length: Math.ceil(filteredData.length / rowsPerPage) },
                                (_, index) => (
                                    <li
                                        key={index}
                                        className={`page-item ${currentPage === index + 1 ? "active" : ""
                                            }`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() => paginate(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
    );
};

export default Leaverequest;
