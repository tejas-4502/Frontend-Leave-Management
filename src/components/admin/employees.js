import React from 'react'

export default function Employees() {
  return (
    <>
    <br />
    <div className="container">
        <h1>Employees</h1>
        <table className="table">
    <thead>
        <tr>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Email
            </th>
            <th>
                Date Joined
            </th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Firstname
            </td>
            <td>
                Lastname
            </td>
            <td>
                Email
            </td>
            <td>
                DateJoined
            </td>
            <td>
                <a className="btn btn-primary" href='/allocation'>View Allocations</a> 
            </td>
        </tr>

    </tbody>
</table>

        </div>
    </>
  )
}
