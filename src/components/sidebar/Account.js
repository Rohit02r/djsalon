import React, { useState } from 'react';
import './Account.css';
import { Button, Card } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define the schema with Yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  rating: yup.number()
    .required('Rating is required')
    .min(1, 'Rating must be between 1 and 10')
    .max(10, 'Rating must be between 1 and 10'),
  phoneNumber: yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  comments: yup.string().required('Comments are required'),
});

const Account = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [editedUser, setEditedUser] = useState({
    username: user.username,
    email: user.email,
    phoneNumber: user.phoneNumber || '', // Include phone number in the state
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would normally save the changes to the server
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

  const handleFeedbackSubmit = (data) => {
    console.log('Feedback submitted:', data);
    // Reset form after submission
  };

  return (
    <div className={`m-5 ${darkMode ? 'dark-mode' : ''}`}>
      <Card className="mb-4 account-details">
  <Card.Body>
    <Card.Title className="account-title">Your Account</Card.Title>
    <Card.Text>
      {isEditing ? (
        <>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={editedUser.username}
              onChange={e => setEditedUser({ ...editedUser, username: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={e => setEditedUser({ ...editedUser, email: e.target.value })}
            />
          </div>
        </>
      ) : (
        <>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </>
      )}
      <p><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
    </Card.Text>
    {isEditing ? (
      <Button className="account-btn" onClick={handleSave}>Save</Button>
    ) : (
      <Button className="account-btn" onClick={() => setIsEditing(true)}>Edit Profile</Button>
    )}
  </Card.Body>
</Card>


      <Card className="mb-4">
  <Card.Body>
    <Card.Title>Notification Preferences</Card.Title>
    <div className="form-group">
      <label>
        <input type="checkbox" defaultChecked />
        Email Notifications
      </label>
    </div>
    <div className="form-group">
      <label>
        <input type="checkbox" />
        SMS Notifications
      </label>
    </div>
  </Card.Body>
</Card>


      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Theme Preferences</Card.Title>
          <Button variant="outline-secondary" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Feedback</Card.Title>
          <form onSubmit={handleSubmit(handleFeedbackSubmit)}>
            <div className="form-group">
              <label htmlFor="feedback-name">Name:</label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} id="feedback-name" />}
              />
              {errors.name && <p className="text-danger">{errors.name.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                render={({ field }) => <input type="text" {...field} id="phoneNumber" />}
              />
              {errors.phoneNumber && <p className="text-danger">{errors.phoneNumber.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="feedback-comments">Comments:</label>
              <Controller
                name="comments"
                control={control}
                defaultValue=""
                render={({ field }) => <textarea {...field} id="feedback-comments" rows="4" />}
              />
              {errors.comments && <p className="text-danger">{errors.comments.message}</p>}
            </div>
            <Button type="submit" variant="primary">Submit Feedback</Button>
          </form>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Account Actions</Card.Title>
          <Button className="account-btn-danger">Delete Account</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Account;
