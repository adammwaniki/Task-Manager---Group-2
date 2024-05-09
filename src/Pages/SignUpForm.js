// Algorithm for the SignUp component
/*
When a user opens the app they find the default screen that has loaded on mount is a SignUp component.
In this SignUp component, there is a form with three fields:
Name
Email address
Password
At the end of this form, there are two buttons
“Sign Up”
“Login”

The “Sign UP” button works in the following way.
When a user clicks on the button, a submit event is triggered. This event sends a POST request to the backend i.e. the db.json file using the fetch API to create a new object in the JSON data with the following key/value pairs
“id” : “the user’s email address”
“name” : “the user’s name”
“password” : “the user’s password”

Once the POST request has been sent successfully, the SignUP component is replaced by a Dashboard component

If the user has not filled in a valid email address and then clicks on the “Sign Up” button, the window will send an alert saying “Invalid address. Kindly fill in a valid email”

If the user has not filled in either one or all three fields and then clicks on the “Sign Up” button, the window will send an alert saying “Fill in your email, name and password to sign up”

Using react-router-dom, if the user has not filled in any field and then clicks on the “Login” button, it will navigate them to the route that has the Login component. In the same way, if the user is on the Login component and clicks on the “Sign Up” button, it will direct them to the route that has the SignUp component

*/
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    const { name, email, password } = formData;
    const emailRegex = /^\S+@\S+\.\S+$/;

    // Checking if any field is empty
    if (!name || !email || !password) {
      alert('Fill in your email, name, and password to sign up.');
      return;
    }

    // Checking for valid email format
    if (!emailRegex.test(email)) {
      alert('Invalid email address. Kindly fill in a valid email.');
      return;
    }

    // Sending a POST request to the backend to create new user
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: email,
        name,
        password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          //navigate('/dashboard'); // Redirect to dashboard on successful signup
          // Updating the user state in the App component
          //setUser({
            //id: email,
            //name,
            //password,
          //});
          // Upon successful signup, store the email in local storage
          localStorage.setItem('loggedInUser', formData.email);
          navigate('/dashboard');
        } else {
          alert('Failed to sign up. Please try again later.');
        }
      })
      .catch((error) => console.error('Error signing up:', error));
  };

  return (
    <div className="login-form-container">
      <div className="login-form-card">
        <input className="login-input" type="text" name="name" placeholder="Name" onChange={handleInputChange} />
        <input className="login-input" type="email" name="email" placeholder="Email" onChange={handleInputChange} />
        <input className="login-input" type="password" name="password" placeholder="Password" onChange={handleInputChange} />
        <button className="login-button" onClick={handleSignUp}>Sign Up</button>
        <Link className="sign-up-link" to="/login">Login</Link>
      </div>
    </div>
  );
};


export default SignUpForm;