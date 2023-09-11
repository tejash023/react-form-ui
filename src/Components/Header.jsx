import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://freepngimg.com/thumb/health/22905-6-health-file.png"
          alt="main-logo"
        />
        <h1>Your Health.</h1>
      </div>
      <div className="user">
        <p>
          Have an account? <span>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
