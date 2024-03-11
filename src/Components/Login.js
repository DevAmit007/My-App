import React from "react";

export default function Login() {
  return (
    <div className="container">
      <div className="login-container">
        <h1>Defect Tracker</h1>
        <h4 className="form-title">Login</h4>
        <form>
          <div className="form-group">
            <div className="control-group">
              <label>User Name: </label>
              <input type="text" className="form-control" />
            </div>
            <div className="control-group">
              <label>Password: </label>
              <input type="password" className="form-control" />
            </div>
          </div>
          <div className="button-wrapper">
            <button type="button" className="login-button">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
