import React from 'react'
import Navbar from './navbar'

export function Homebase() {
    return (
        <>
            <Navbar />
            <div className="text-center mt-5">
                <h1>Welcome to Leave Management</h1>
            </div>
            <div className="container mt-5">
                <h1 className="text-primary">React Frontend</h1>
                <hr className="my-4" />
                <div className="text-justify">
                    <p>
                        React, sometimes referred to as a frontend JavaScript library, is a powerful tool created by Facebook. It's designed for building UI components, making it a popular choice for developing interactive user interfaces.
                    </p>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>1. Component-based Architecture</h4>
                            <p>
                                React utilizes a component-based architecture, allowing developers to create reusable and encapsulated UI components. This modularity enhances maintainability and scalability.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h4>2. Strong Developer Tools</h4>
                            <p>
                                React provides powerful developer tools such as React DevTools, aiding in inspecting components, tracking state, and debugging, resulting in an improved development experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export function Homeuser() {
    return (
        <>
            <Navbar user />
            <div className="text-center mt-5">
                <h1>Welcome to Leave Management</h1>
            </div>
            <div className="container mt-5">
                <h1 className="text-primary">React Frontend</h1>
                <hr className="my-4" />
                <div className="text-justify">
                    <p>
                        React, sometimes referred to as a frontend JavaScript library, is a powerful tool created by Facebook. It's designed for building UI components, making it a popular choice for developing interactive user interfaces.
                    </p>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>1. Component-based Architecture</h4>
                            <p>
                                React utilizes a component-based architecture, allowing developers to create reusable and encapsulated UI components. This modularity enhances maintainability and scalability.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h4>2. Strong Developer Tools</h4>
                            <p>
                                React provides powerful developer tools such as React DevTools, aiding in inspecting components, tracking state, and debugging, resulting in an improved development experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export function Homeadmin() {
    return (
        <>
            <Navbar admin />
            <div className="text-center mt-5">
                <h1>Welcome to Leave Management</h1>
            </div>
            <div className="container mt-5">
                <h1 className="text-primary">React Frontend</h1>
                <hr className="my-4" />
                <div className="text-justify">
                    <p>
                        React, sometimes referred to as a frontend JavaScript library, is a powerful tool created by Facebook. It's designed for building UI components, making it a popular choice for developing interactive user interfaces.
                    </p>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>1. Component-based Architecture</h4>
                            <p>
                                React utilizes a component-based architecture, allowing developers to create reusable and encapsulated UI components. This modularity enhances maintainability and scalability.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h4>2. Strong Developer Tools</h4>
                            <p>
                                React provides powerful developer tools such as React DevTools, aiding in inspecting components, tracking state, and debugging, resulting in an improved development experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Home(props) {
    if (props.user) {
        return <Homeuser />;
    }
    if (props.admin) {
        return <Homeadmin />;
    }
    else {
        return <Homebase />;
    }
}
