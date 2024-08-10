

import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import axios from 'axios';

function LoginForm() {
  
  const [formData, setFormData] = useState({
    email: 'tanmay.chavan@walchandsangli.ac.in',
    userid: '',
    password: '',
  });

  

  const navigateToAboutPage = () => {
    if(jokes[0].id == formData.userid){
      window.location.href = '/issue-history';
    }
    else{
      alert("Please enter correct user id and password")
    }
    
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    try{
      const res = await axios.post('http://localhost:8000/api/v1/users/login',{
        email:formData.email, username:formData.userId, password:formData.password
      })

      if(res.data.statusCode == 200){
        console.log("Success ")
      }else{
        console.log("Error");
      }

    }catch(e){
      // console.log(e);
      alert("Error : Wrong password");
    }
    
    // navigateToAboutPage();
  };

  return (
    <>
      <div className="login-form-container">
        <h1>Issue Tracker</h1>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="userid"
            placeholder="User Id"
            value={formData.userid}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      
      
    </>
  );
}

export default LoginForm;
