import React from "react";
import schedule from "./images/schedule.jpg";

function Schedule() {
  return (
    <div id="schedule">
      <div className="schedule-image">
        <img src={schedule} className="schedule-image-move"/>
      </div>
      <div className="schedule-text-container my-8">
        <h1>Schedule and Pricing</h1>
        <p>
          New to Esteem JiuJitsu? No problem! You don't even need to call. . .
        </p>
        ​<p>Just follow a few simple steps to get started.</p>​
        <p>
          1. Pick a class on the schedule. If your a beginner pick any
          fundamental or no gi class.
        </p>
        <p>
          2. Come on in and try it a class. Your first class is free!! Please
          come about 10 mins early to sign a wavier.
        </p>
        <p>3. If you like it we can get you signed up.</p>​
        <p>Its that easy!!</p>
        <p>Pricing</p>
        <h1>$139/ Month</h1>
        <p>One time membership fee of $139</p>​
        <p>
          There are no contracts! Memberships are on a month to month basis. If
          you need to freeze or cancel please call/text/email before your charge
          date.{" "}
        </p>
        ​
        <p>
          $119/month military/law enforcement/student, and10% family discounts!
        </p>
        ​<h2>Uniforms</h2>
        <p>
          For all gi classes you will need a jiujitsu gi. We do not sell them
          but you can order one online at an affordable price. Until then we
          will let you barrow on of our loner gis.
        </p>
        <p>For no gi all you need is a rash guard and shorts/spats.</p>
      </div>
    </div>
  );
}

export default Schedule;
