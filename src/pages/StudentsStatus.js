import { useState } from "react";
import "./status.css";

import socketIO from "socket.io-client";

const socket = socketIO.connect(process.env.REACT_APP_API_URL);

const StudentsStatus = () => {
  const [friends, setFriends] = useState([]);
  return (
    <div className="status-container">
      <h3>Students Tracker</h3>
      <div className="list-container">
        <div className="list">
          <p>Faris 14m away</p>
        </div>
        <div className="list">
          <p>Faris 14m away</p>
        </div>
        <div className="list">
          <p>Faris 14m away</p>
        </div>
        <div className="list">
          <p>Faris 14m away</p>
        </div>
        <div className="list">
          <p>Faris 14m away</p>
        </div>
        <div className="list">
          <p>Faris 14m away</p>
        </div>
        <div className="list">
          <p>Faris 14m away</p>
        </div>
        <div className="list">
          <p>Faris 14m away</p>
        </div>
      </div>
    </div>
  );
};

export default StudentsStatus;
