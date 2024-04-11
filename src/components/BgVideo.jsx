import React from 'react';
import './app.css';
export default function BgVideo() {
  return (
    <div>
      <video loop autoPlay muted id="bg-video">
        <source src={require("../assets/boycode.mp4")} type="video/mp4" />
      </video>
    </div>
  );
}
