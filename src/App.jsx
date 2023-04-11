import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Patients from "./pages/Patients";
import Employees from "./pages/Employees";
import Forms from "./pages/Forms";
import Home from "./pages/Home";
import Default from "./pages/Default";
import EmployeeForm from "./pages/EmployeeForm";
import PatientForm from "./pages/PatientForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="patients" element={<Patients />} />
          <Route path="employees" element={<Employees />} />
          <Route path="employees" element={<Employees />} />
          <Route path="forms" element={<Forms />}>
            <Route path="employeeform" element={<EmployeeForm />} />
            <Route path="patientform" element={<PatientForm />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
