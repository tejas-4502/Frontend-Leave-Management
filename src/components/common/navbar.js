import React from 'react'

export function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid container">
                    <a className="navbar-brand" href="/home">Leave-Management</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <a className="btn btn-outline-success mx-2" href="/login">Login</a>
                        <a className="btn btn-outline-success mx-2" href="/register">Register</a>
                    </form>
                </div>
            </nav>
        </>
    );
}
export function Navuser() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid container">
                    <a className="navbar-brand" href="/home">Leave-Management</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/applyleave">Apply for Leave</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/myleave">My Leave</a>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <h5>user</h5>
                    </form>
                </div>
            </nav>
        </>
    );
}
export function Navadmin() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid container">
                    <a className="navbar-brand" href="/home">Leave-Management</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/employees">Employees</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Leave Management
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/leavetype">Leave Types</a></li>
                                    <li><a className="dropdown-item" href="/leaverequest">Leave Requests</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <h5>user</h5>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default function Navbar(props) {
    if (props.user) {
        return <Navuser />;
      }
    if (props.admin) {
        return <Navadmin />;
      }
      else {
        return <Nav />;
      }
}
