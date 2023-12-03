import React from 'react'
import Navbar from '../common/navbar'

export default function Leaverequest() {
    return (
        <>
            <Navbar admin />
            <br />
            <div className="container">
                <h1>Admin Leave Requests View</h1>
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body text-center">
                                <h1 className="card-title text-primary">$</h1>
                                <p className="card-text">Total Number Of Requests</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body text-center">
                                <h1 className="card-title text-success">$</h1>
                                <p className="card-text">Approved Requests</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body text-center">
                                <h1 className="card-title text-warning">$</h1>
                                <p className="card-text">Pending Requests</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body text-center">
                                <h1 className="card-title text-danger">$</h1>
                                <p className="card-text">Rejected Requests</p>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <h1>Leave Request Log</h1>
                <hr />
            </div>
        </>
    )
}
