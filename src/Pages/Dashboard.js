

import React from 'react';
import UserProfile from '../Components/UserProfile';
import NavBar from '../Components/Navbar';


function Dashboard() {
  return (
    <div>

        <NavBar/>
        <UserProfile/>
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard!</p>
      <p>Brian feel free to delete the contents of this component, this was just a placeholder</p>
    </div>
  );
}


export default Dashboard;

