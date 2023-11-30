import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCircleInfo, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Leavetype() {
    return (
        <>
        <div className="container">
            <h1>Index</h1>
            <p>
                <a className="btn btn-success" href="/createleavetype"><i><FontAwesomeIcon icon={faPlus} /></i> Create New</a>
            </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Leave Type Name
                        </th>
                        <th>
                            Default Number of Days
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>
                        <button data-id="" className="btn btn-primary allocateBtn mx-2" type="button"> Allocate Leave </button>
                            <a href="/#" className="btn btn-warning mx-2">
                            <FontAwesomeIcon icon={faPencil} />
                            </a>
                            <a href="/#" className="btn btn-info mx-2">
                            <FontAwesomeIcon icon={faCircleInfo} />
                            </a>
                            <a href="/#" className="btn btn-danger deleteBtn mx-2">
                            <FontAwesomeIcon icon={faTrash} />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}
