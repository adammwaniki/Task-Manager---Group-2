import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './Pages/SignUpForm';
import LoginForm from './Pages/LoginForm';
import Dashboard from './Pages/Dashboard';
import NavBar from './Components/Navbar';


const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
