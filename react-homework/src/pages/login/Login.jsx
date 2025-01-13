import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; 

const Login = ({ onCancel }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("Login successful:", user);
        alert("Welcome, " + user.email + "!");
        // Логика перехода после успешного входа
    } catch (error) {
        console.error("Error logging in:", error.message);
        alert("Invalid email or password.");
    }
};

  return (
    <div className="login-container">
      <h2>Log in</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="email">User name</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <div className="button-group">
                <Button
                    label="Submit"
                    isActive={true}
                    onClick={handleSubmit}
                />
                <Button
                    label="Cancel"
                    isActive={false}
                    onClick={onCancel}
                />
            </div>
        </form>
        </div>
    </div>
  );
};

export default Login;
