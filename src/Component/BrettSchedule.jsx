import React from "react";
import brett from "./images/brett.jpg";
import notify from "./utilities/Notify";

function BrettSchedule() {
  return (
    <div>
      <div className="wrapper instructor-page text-center">
        <div className="left mb-1">
          <h1 className="my-2">Schedule a Private Lesson with Brett</h1>
          <img src={brett} alt="user" width="80%" />
        </div>
        <div className="right">
          <div className="info">
            <h2 className="mb-1">About Brett Byron</h2>
            <div className="info-data">
              <div className="data mb-2 instructor-text-container">
                <p className="mb-2">
                  Brett "Blunt force" Bryon is a Brazilian Jiujitsu black belt
                  who was born and raised here in Petaluma. He attended Casa
                  Grande High School, where he tried wrestling for the first
                  time. After falling in love with the sport, grappling has been
                  a part of his life since. In 2005, Brett returned to help
                  coach the wrestling team for high school and junior high for
                  several seasons. He's been training jiujitsu at Esteem since
                  January of 2011, and has been the epitome of consistency ever
                  since. In addition to training and teaching classes at Esteem,
                  he's also a small business owner and has operated Limitless
                  Personal Training since he founded it in 2013. On the mats,
                  Brett is known for his aggressive, submission based style and
                  has earned his nick name, "Blunt force", by compiling a
                  ridiculous amount of tournament victories via submissions over
                  the years. He's competed in everything from the biggest gi
                  tournaments on the planet, to submission only fights and MMA.
                  In 2018, he won a cage fight by putting his opponent to sleep
                  with a brutal chokehold. He's known as a neck collector, and
                  openly prefers to choke opponents rather than joint lock them,
                  because he says, "while tough guys might fight through a
                  broken limb, nobody is too tough to be put to sleep." As
                  ferocious a competitor as he is, as an instructor, he couldn't
                  be any less intimidating and more inviting. The atmosphere in
                  his classes are upbeat and fun. His approach to instruction is
                  detail oriented and his attitude is that the proof is in the
                  pudding. There's nothing that he teaches that he hasn't
                  accomplished in an actual match at some point or another, so
                  he's able to show his techniques with the confidence of
                  someone who knows their true effectiveness and has done it in
                  action. Coach Brett teaches Tues, Wed, and Thurs mornings at
                  9a, and Tues and Thurs evening at 630p.{" "}
                </p>
              </div>
              <div className="projects">
                <h2 className="mb-1">Avaliable Lessons</h2>
                <div className="projects-data mb-1">
                  <div className="data">
                    <p>
                      01/4/22 at 2pm. (1 Hour){" "}
                      <button type="submit" onClick={notify}>
                        SCHEDULE
                      </button>
                    </p>
                    <p>
                      01/5/22 at 2pm. (1 Hour){" "}
                      <button type="submit" onClick={notify}>
                        SCHEDULE
                      </button>
                    </p>
                    <p>
                      01/6/22 at 2pm. (1 Hour){" "}
                      <button type="submit" onClick={notify}>
                        SCHEDULE
                      </button>
                    </p>
                    <p>
                      01/11/22 at 2pm. (1 Hour){" "}
                      <button type="submit" onClick={notify}>
                        SCHEDULE
                      </button>
                    </p>
                    <p>
                      01/12/22 at 2pm. (1 Hour){" "}
                      <button type="submit" onClick={notify}>
                        SCHEDULE
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BrettSchedule;
