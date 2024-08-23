import React from 'react';
import './Your account.css';

const Account = ({ user }) => {
  return (
    <div className="account-container">
      <h2>Your Account</h2>
      <div className="account-details">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
      <div className="account-actions">
        <button className="account-btn">Edit Profile</button>
        <button className="account-btn">Change Password</button>
      </div>
    </div>
  );
};

export default Account;
