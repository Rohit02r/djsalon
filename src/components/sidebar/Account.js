import React, { useState } from 'react';
import './Account.css';
import { Button } from 'react-bootstrap';
import Footer from '../Footer';

const Account = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [editedUser, setEditedUser] = useState({
    username: user.username,
    email: user.email,
    phoneNumber: user.phoneNumber || '',
  });

  const handleSave = () => {
    setIsEditing(false);
    console.log('Updated user:', editedUser);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div>
    <div className={`m-5 ${darkMode ? 'dark-mode' : ''}`}>
      <div className="terms-car mb-4">
        <h2 className="account-title">Your Account</h2>
        <div className="form-group">
          {isEditing ? (
            <>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={editedUser.username}
                onChange={e => setEditedUser({ ...editedUser, username: e.target.value })}
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={e => setEditedUser({ ...editedUser, email: e.target.value })}
              />
            </>
          ) : (
            <>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </>
          )}
          <p><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          {isEditing ? (
            <Button className="account-btn" onClick={handleSave}>Save</Button>
          ) : (
            <Button className="account-btn" onClick={() => setIsEditing(true)}>Edit Profile</Button>
          )}
        </div>
      </div>

      <div className="terms-car mb-4">
        <h2>Notification Preferences</h2>
        <div className="form-group">
          <label className="checkbox-label">
            <input type="checkbox" defaultChecked className="checkbox-input"/>
            Email Notifications
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox-input"/>
            SMS Notifications
          </label>
        </div>
      </div>

      <div className="terms-car mb-4 ">
        <h2>Theme Preferences</h2>
        <label className='tr '>
          <input
            type="checkbox"
            className="theme-checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div className="fs-5 dr ">
          <span className=' mx-3 mt-0 '>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </div>
        </label>
      </div>

      <div className="terms-car mb-4">
        <h2>Account Actions</h2>
        <Button className="bta">Delete Account</Button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Account;
