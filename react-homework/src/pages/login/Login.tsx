import React, { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Login.css";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { login } from "../../redux/authSlice";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleCancel = () => {
    navigate("/");
  };

  useEffect(() => {
    if (user) {
      navigate("/order");
    }
  }, [user, navigate]);

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
          {error && <p className="error">{error}</p>}
          <div className="button-group">
            <Button label={loading ? "Loading..." : "Submit"} isActive={!loading} onClick={() => {}} />
            <Button label="Cancel" isActive={true} onClick={handleCancel} />
          </div>
        </form>
      </div>
      {user && <p>Welcome, {user}!</p>}
    </div>
  );
};

export default Login;