// Algorithm for the LoginForm
/*
When a user opens the app, as they look at the SignUp component which is the default component that loads on mount, at the bottom of the page they will see the two buttons to either login or sign up.
When a user clicks on the Login button at this point, an event will be triggered whereby they will be directed to the route that has the Login component.

The Login component has two fields:
Email
Password
When a user fills in their details and clicks on the “Login” button, a GET request is sent to the backend i.e. the db.json file to retrieve their data and load it into the dashboard component that will now render to replace the login component.

If a user has filled in an email that is not in the JSON data, it sends an alert saying “Invalid email”
If a user inputs a valid email but their password doesn’t match what was in the JSON data it sends an alert saying “Invalid password”
If both fields have invalid input, it sends an alert that says “Invalid email and password. Would you like to Sign Up?”
If the user has not filled in any of the fields and clicks on the login button, it sends an alert saying “Fill in your email and password to login”

*/

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const { email, password } = formData;
  
    // Check if any field is empty
    if (!email || !password) {
      alert('Fill in your email and password to login.');
      return;
    }
  
    // Send GET request to backend to retrieve user data
    fetch(`http://localhost:3000/users`)
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse response body as JSON
        } else {
          throw new Error('Failed to fetch user data.');
        }
      })
      .then((userData) => {
        // Find user with matching email
        const user = userData.find((user) => user.id === email);
  
        if (!user) {
          alert('Invalid email.');
        } else if (user.password !== password) {
          alert('Invalid password.');
        } else {
          //navigate('/dashboard'); // Redirect to dashboard on successful login
          // Set user data in local storage
          //localStorage.setItem('user', JSON.stringify(user));
          // Upon successful login, store the email in local storage
          localStorage.setItem('loggedInUser', formData.email);
          navigate('/dashboard');
        }
      })
      .catch((error) => console.error('Error logging in:', error));
  };
  
  

  return (
    <div>
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
      <button onClick={handleLogin}>Login</button>
      <Link to="/">Sign Up</Link>
    </div>
  );
};


export default LoginForm;