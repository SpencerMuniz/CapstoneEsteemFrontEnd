import React from "react";
import jack from "../images/jack.jpg";
import notify from "../utilities/Notify";

function JackSchedule() {
  return (
    <div>
      <div className="wrapper instructor-page text-center">
        <div className="left mb-1">
          <h1 className="my-2">Schedule a Private Lesson with Jack</h1>
          <img src={jack} alt="user" width="80%" />
        </div>
        <div className="right">
          <div className="info">
            <h2 className="mb-1">About Jack Coyston</h2>
            <div className="info-data">
              <div className="data mb-2 instructor-text-container">
                <p className="mb-2">
                  Jack Coyston is a Brazilian jiujitsu brown belt. Originally
                  born and raised in England he moved to sunny California with
                  his family in 2001. Shortly after moving to America Jack was
                  introduced to the sport of wrestling and instantly fell in
                  love. After wrestling eighth grade through high school and
                  helping coach the middle school team while in high school,
                  Jack knew that he wanted grappling and coaching to always be a
                  part of his life. After high school, Jack began to train Judo
                  while continuing to help coach the middle school and high
                  school wrestling teams. Judo was his first introduction to
                  submissions outside of watching MMA and he was hooked
                  instantly. Wrestling taught Jack how to control another person
                  and put them where he wanted them to be, and Judo began to
                  teach him how to finish them once he got them there. Judo was
                  also his first introduction to wearing a Gi and although at
                  first it was suffocating and overwhelming, Jack quickly
                  recognized the value in it and wanted to do more. He trained
                  Judo for three years and then in 2012 he tried jiujitsu for
                  the first time. From his first class, Jack felt like he had
                  found a home that blended everything he already loved. Stand
                  up, judo throws, wrestling takedowns, submissions, gi and no
                  gi. Jiujitsu had everything he wanted. He was hooked and from
                  that day forward he dedicated himself to BJJ and the pursuit,
                  which he's still on, of one day attaining the skills that
                  would earn him his black belt. Coach Jack is known for his
                  armbars, over attention to detail, and ability to talk for
                  hours on end about Jiujitsu. His goals are to one day be
                  awarded his black belt in BJJ, and also to go back and earn
                  his black belt in Judo as well. He also has plans to continue
                  competing and wants to see how far he can go. Above all else,
                  Coach Jack wants to continue trying to obtain as much
                  grappling knowledge as possible so that he can continue to
                  share it with anyone that wants to learn. He just wants to be
                  the best instructor he can be and enjoys nothing more than
                  seeing a student grow as a person, athlete, and martial
                  artist. Coach Jack teaches Mon, Wed, and Fri evening advanced
                  adults class at 630p.{" "}
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
export default JackSchedule;
