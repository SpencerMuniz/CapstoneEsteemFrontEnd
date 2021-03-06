import React from "react";

function BrettTable(props) {
  return (
    <div className="a-box">
      <div>
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <button className="trainer-btn">
          <a href="/instructorschedule1" className="trainer-link">
            Click to Reserve a Private Lesson
          </a>
        </button>
      </div>
    </div>
  );
}
export default BrettTable;
