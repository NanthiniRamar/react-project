import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './Pages/EmployeeList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/style.css'
import EmployeeFullInformation from './Pages/EmployeeFullInformation';
import Dashboard from './Pages/Dashboard';
import Reports from './Pages/Reports';

const App = () => {

  return (
    <div>
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/employee-details/:id" element={<EmployeeFullInformation />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(
  <App/>,
  rootElement
)
