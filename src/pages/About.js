import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/IMG_4618.jpeg";
import eating from "../assets/IMG_3969.jpeg"

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Sophie Wang </div>
            <div className="brief_description">
              Hi, I'm Sophie! I'm a rising junior majoring in Computer Science at Cornell University. I'm from Long Island New York, and in my free time I like to bake and read! Spending my summer in DC, so if anyone has food/place recs or is in the area, feel free to reach out!
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}