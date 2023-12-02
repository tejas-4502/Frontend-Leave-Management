import './App.css';
import Navbar from './components/common/navbar';
import Home from './components/common/home';
import Login from './components/common/login';
import Register from './components/common/register';
import ApplyLeave from './components/user/applyLeave';
import MyLeave from './components/user/myleave';
import Employees from './components/admin/employees';
import Leavetype from './components/admin/leavetype';
import Leaverequest from './components/admin/leaverequest';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Try from './components/common/try';
import Try1 from './components/common/try1';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Navbar user/>
        {/* <Navbar admin/> */}

        {/* <Try />
        <Try1 /> */}

        <Routes>
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
