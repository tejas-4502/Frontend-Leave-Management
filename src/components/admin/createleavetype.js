import React from 'react'

export default function Createleavetype() {
    return (
        <>
            <div className="container">
                <h1>Create Leave Type</h1><hr />
                <div className="row">
                    <div className="col-md-12">
                        <form action="createleavetype">
                            <div className="mb-3">
                                <label htmlFor="leavetypename" className="form-label">Leave Type Name</label>
                                <input type="leavetypename" className="form-control" id="leavetypename" aria-describedby="leavetypename" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="days" className="form-label">Default Number Of Days</label>
                                <input type="number" className="form-control" id="days" />
                            </div>
                            <button type="submit" className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
