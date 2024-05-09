import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Function to fetch user data from backend, initializing as an empty array so that use effect runs once on mount
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    // Fetching user data from backend 
    fetch("http://localhost:3000/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data.');
        }
        return response.json();
      })
      .then((userData) => {
        setUserData(userData);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  const fetchRandomImage = () => {
    // Fetching a randomly generated image from the random user profile generator API
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
  };

  useEffect(() => {
    // Fetch random image when component mounts
    fetchRandomImage();
  }, []);

  return (
    <div className="user-profile-card">
      {userData && (
        <>
          <div className="user-profile-image">
            {imageUrl && <img src={imageUrl} alt="User" />}
          </div>
          <div className="user-profile-details">
            <h2>{userData.name}</h2>
            <p>{userData.id}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;