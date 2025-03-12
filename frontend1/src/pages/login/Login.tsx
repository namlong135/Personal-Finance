import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // The location state is set by ProtectedRoute, indicating the page the user was trying to visit.
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const handleLogin = () => {
    // Your authentication logic goes here.
    // For example, after successful login:
    const user = { id: '123', name: 'Jane Doe' };
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect to the original page.
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
