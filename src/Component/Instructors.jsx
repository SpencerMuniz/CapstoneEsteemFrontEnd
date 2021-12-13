import React from "react";
import mike from "./images/mike.jpg";
import brett from "./images/brett.jpg";
import jack from "./images/jack.jpg";
import rosie from "./images/rosie.jpg";
import MikeTable from "./MikeTable";
import BrettTable from "./BrettTable";
import JackTable from "./JackTable";
import RosieTable from "./RosieTable";

function Instructors() {
  return (
    <div className="trainer-features">
      <h1 className="mt-3">Meet the Instructors</h1>
      <div className="a-container">
        <div className="trainer-row my-3">
          <MikeTable image={mike} title="Mike Stratton" />
          <BrettTable image={brett} title="Brett Byron" />
        </div>
        <div className="trainer-row m">
          <JackTable image={jack} title="Jack Coyston" />
          <RosieTable image={rosie} title="Rose Stratton" />
        </div>
      </div>
    </div>
  );
}
export default Instructors;
