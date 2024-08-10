import React, { useState } from 'react';
import {useEffect} from 'react';

import './IssueForm.css';

function IssueForm () {

  const [formData, setFormData] = useState({
    issue: '',
    description: '',
    address: '',
    department: '',
  });


  const [newTask, setNawtask] = useState([]);

  const navigateToAboutPage = () => {
    window.location.href = '/issue-form';
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigateToAboutPage();
  };

  return (
    <div className="issue-form-container">
      <header className="header">
        <h1>Issue Tracker</h1>
        <button className="logout-button">Log out</button>
      </header>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="issue-form">
          <input
            type="text"
            name="issue"
            placeholder="Issue"
            value={formData.issue}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Related Department"
            value={formData.department}
            onChange={handleChange}
            required 
          />
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      
    </div>
  );
};

export default IssueForm;
