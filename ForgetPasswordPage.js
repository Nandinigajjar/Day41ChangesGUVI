import React, { useState } from 'react';
import axios from 'axios';

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleForgetPassword = async () => {
    try {
      const response = await axios.post('/api/forgetpassword', { email });
      console.log(response.data); 
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Forget Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgetPassword}>Reset Password</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ForgetPasswordPage;
