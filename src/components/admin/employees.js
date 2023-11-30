import React from 'react'

export default function Employees() {
  return (
    <>
    <div className="container">
        <h1>Employees</h1>
        <table className="table">
    <thead>
        <tr>
            <th>
                model.Firstname
            </th>
            <th>
                model.Lastname
            </th>
            <th>
                model.Email
            </th>
            <th>
                model.DateJoined
            </th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                item.Firstname
            </td>
            <td>
                item.Lastname
            </td>
            <td>
                item.Email
            </td>
            <td>
                item.DateJoined
            </td>
            <td>
                <a className="btn btn-primary" href='/'>View Allocations</a> 
            </td>
        </tr>

    </tbody>
</table>

        </div>
    </>
  )
}
