import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { SplitButton } from 'primereact/splitbutton';

export function Nav() {
    const items = [
        { label: 'Home', icon: 'pi pi-home', url: '/home' },
    ];

    const end = (
        <>
            <Link to="/login">
                <Button label="Login" className="p-button-sm" icon="pi pi-sign-in" />
            </Link>
            <Link to="/register">
                <Button label="Register" className="p-button-sm mx-2" icon="pi pi-user-plus" />
            </Link>
        </>
    );

    const start = <img alt="logo" src="https://hrone.cloud/wp-content/uploads/2021/05/leave-management-1.png" height="30" className="mt-6"></img>;

    return (
        <Menubar model={items} start={start} end={end} />
    );
}

export function Navuser() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    const username = loggedInUser ? JSON.parse(loggedInUser).username : '';

    const items = [
        { label: 'Home', icon: 'pi pi-home', url: '/homeuser' },
        { label: 'Apply for Leave', icon: 'pi pi-calendar-plus', url: '/applyleave' },
        { label: 'My Leave', icon: 'pi pi-list', url: '/myleave' },
    ];

    const end = (
        <SplitButton
            label={username}
            icon="pi pi-user"
            model={[
                {
                    label: 'Logout',
                    icon: 'pi pi-power-off',
                    command: () => {
                        // Perform logout action here
                        sessionStorage.removeItem('loggedInUser');
                        // Redirect to login page 
                        window.location.href = '/login';
                    },
                },
            ]}
        />
    );

    const start = <img alt="logo" src="https://hrone.cloud/wp-content/uploads/2021/05/leave-management-1.png" height="30" className="mt-6"></img>;

    return (
        <Menubar model={items} start={start} end={end} />
    );
}

export function Navadmin() {
    const items = [
        { label: 'Home', icon: 'pi pi-home', url: '/homeadmin' },
        { label: 'Employees', icon: 'pi pi-users', url: '/employees' },
        {
            label: 'Leave Management', icon: 'pi pi-calendar-plus', items: [
                { label: 'Leave Types', icon: 'pi pi-list', url: '/leavetype' },
                { label: 'Leave Requests', icon: 'pi pi-calendar-plus', url: '/leaverequest' },
            ]
        },
    ];

    const end = (
        <SplitButton
            label="admin@gmail.com"
            icon="pi pi-user"
            model={[
                {
                    label: 'Logout',
                    icon: 'pi pi-power-off',
                    command: () => {
                        // Perform logout action here
                        sessionStorage.removeItem('loggedInUser');
                        // Redirect to login page 
                        window.location.href = '/login';
                    },
                },
            ]}
        />
    );

    const start = <img alt="logo" src="https://hrone.cloud/wp-content/uploads/2021/05/leave-management-1.png" height="30" className="mt-6"></img>;

    return (
        <Menubar model={items} start={start} end={end} />
    );
}

export default function Navbar(props) {
    if (props.user) {
        return <Navuser />;
    }
    if (props.admin) {
        return <Navadmin />;
    } else {
        return <Nav />;
    }
}
