import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

import Home from './components/common/home';
import Login from './components/common/login';
import Register from './components/common/register';
import ApplyLeave from './components/user/applyLeave';
import MyLeave from './components/user/myleave';
import Employees from './components/admin/employees';
import Leavetype from './components/admin/leavetype';
import Leaverequest from './components/admin/leaverequest';
import { Navigate } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
  return (
    <>
      <Router>
        <Routes>
          <Route path="/homeadmin" element={<Home admin />} />
          <Route
          path="/homeuser"
          element={loggedInUser ? <Home user /> : <Navigate to="/login" />}
        />

          <Route path="/home" element={<Home />} />
          <Route path="" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/applyleave" element={<ApplyLeave />} />
          <Route path="/myleave" element={<MyLeave />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/leavetype" element={<Leavetype />} />
          <Route path="/leaverequest" element={<Leaverequest />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
