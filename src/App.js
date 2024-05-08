
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './Pages/SignUpForm';
import LoginForm from './Pages/LoginForm';
import Dashboard from './Pages/Dashboard';
<<<<<<< HEAD
import NavBar from './Components/Navbar';
=======
>>>>>>> 15323b043539b8a1ed0a8d1da463b441fe8b168c


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
