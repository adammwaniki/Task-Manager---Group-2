import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch user data from backend using the logged-in user's email
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      fetch("http://localhost:3000/users")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch user data.');
          }
        })
        .then((userData) => {
          const currentUser = userData.find((user) => user.id === loggedInUser);
          if (currentUser) {
            setUser(currentUser);
          }
        })
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, []);

  useEffect(()=> {
    
      fetch('https://randomuser.me/api/?inc=picture')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch random image.');
          }
          return response.json();
        })
        .then((data) => {
          const imageUrl = data.results[0].picture.large;
          setImageUrl(imageUrl);
        })
        .catch((error) => {
          console.error('Error fetching random image:', error);
        });
        
  }, [])

  return (
    <div>
      {user ? (
        <div>
          <img src={imageUrl} alt="random user" />
          <h2>{user.name}</h2>
          <p>{user.id}</p>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default UserProfile;