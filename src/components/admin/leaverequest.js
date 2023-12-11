import React, { useState, useEffect, Fragment } from "react";
import Navbar from "../common/navbar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { ToastContainer } from "react-toastify";
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

    return (
        <Fragment>
            <Navbar admin />
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
                                    <button className="btn btn-primary">Accept</button>
                                    <button className="btn btn-danger ms-2">Decline</button>
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
