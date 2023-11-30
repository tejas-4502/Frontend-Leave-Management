import React from 'react'

export default function ApplyLeave() {
    return (
        <>
            <form action="applyleave" className='container'>
                <h1>Apply For Leave</h1>
                <hr />
                <div className="row mb-3">
                    <label htmlFor="applyleave" className="col-sm-2 col-form-label">Leave Type</label>
                    <div className="col-sm-12">
                        <select name="applyleave" id="applyleave" className="form-control">
                            <option>Select Leave Type</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="startdate" className="col-sm-2 col-form-label">Start Date</label>
                        <div className="col-sm-12">
                            <input className="form-control" type="date" id="startdate" name="startdate" />
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="enddate" className="col-sm-2 col-form-label">End Date</label>
                        <div className="col-sm-12">
                            <input className="form-control" type="date" id="enddate" name="enddate" />
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="comment" className="col-sm-2 col-form-label">Request Comments</label>
                    <div className="col-sm-12">
                        <textarea name="comment" id="comment" className="form-control"></textarea>
                    </div>
                </div>
                {/* <button type="submit" className="btn btn-dark mx-2">Back to my Leave</button> */}
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
    )
}
