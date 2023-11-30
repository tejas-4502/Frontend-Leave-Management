import React from 'react'

export default function MyLeave() {
    return (
        <>
            <h1>Leave Allocations</h1>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">Leave Name</div>
                        <div className="col">Original Allocation</div>
                        <div className="col">Current Allocation</div>
                    </div>
                </li>

                <li className="list-group-item">
                    <div className="row">
                        <div className="col"><h6>LeaveType.Name</h6> </div>
                        <div className="col">
                            <button type="button" className="btn btn-primary">
                                Allocated Days <span className="badge bg-secondary">LeaveType.DefaultDays</span>
                            </button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-primary">
                                Remaining Days <span className="badge bg-secondary">NumberOfDays</span>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
            <h2>Leave Requests</h2>

        </>
    )
}
