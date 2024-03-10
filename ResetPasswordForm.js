import React, { useState } from 'react';
import axios from 'axios';

const ResetPasswordForm = ({ randomString }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('/api/resetpassword', {
        randomString,
        newPassword: password,
      });
      console.log(response.data); 
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="Enter your new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Submit</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ResetPasswordForm;
