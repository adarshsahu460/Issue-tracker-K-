import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; 
import './IssueHistory.css';
import { useEffect } from 'react';
import axios from 'axios';


function IssueHistory(issues) {

  const [formData, setFormData] = useState({
    userid: '',
    password: '',
  });

  
  const navigateToAboutPage = () => {
    window.location.href = '/issue-form';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigateToAboutPage();
  };

  return (
    <div className="issue-history">
      <header className="header">
        <h1>ISSUE TRACKER</h1>
        <button className="logout-button">Log out</button>
      </header>
      <main>
        <section className="history-section">
          <h2>History</h2>
          <div className="issues-container">
            <div className="current-issues">
              <h3>Current Issues</h3>
              <div className='current-issues-info'>
                <ol>
                  {jokes.map((joke) => (
                    <div key={joke.id} >
                      <div className="tasks">
                        <h3>{joke.title}</h3>
                        <button>Completed</button>
                      </div>
                      
                      <p>{joke.content}</p>
                    </div>
                  ))}
                </ol>
              </div>
            </div>
            <div className="tasks-to-resolve">
              <h3>Issues to Be Resolved</h3>
              <div className="tasks-to-resolve-info">

              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <button className="report-issue-button" onClick={handleSubmit}>Report an issue</button>
      </footer>
    </div>
  );
};

export default IssueHistory;
