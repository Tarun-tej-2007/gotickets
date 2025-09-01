import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="overlay-box">
        <h1 className="title">GoRooms</h1>
        <h2 className="subtitle">Find your stay. Know what’s around</h2>
        <p className="description">
          Welcome to GoRooms – the smarter way to travel. Find and book the
          perfect hotel room with ease, while also discovering the best
          attractions, dining, and experiences around your stay. Your journey
          starts here.
        </p>
        <div className="button-group">
          <button className="btn">Login</button>
          <button className="btn">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
