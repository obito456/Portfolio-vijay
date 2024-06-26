import React, { useState } from "react";
import "./Login"

function Login({ history }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic, e.g., validate credentials
    // For demonstration, let's assume the login is successful
    setIsLoggedIn(true);
    // Redirect to the home page after successful login
    history.push("/Home");
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are already logged in. Redirecting...</p>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
