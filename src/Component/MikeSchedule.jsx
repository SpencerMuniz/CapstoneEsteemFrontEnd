import React from 'react';
import mike from './images/mike.jpg'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const notify = () => toast("Your private lesson is booked")

function MikeSchedule () {
    return(
        <div>
            <div class='wrapper'>
                <div class='left'>
                    <h4>Schedule a Private Lesson with Mike</h4>
                    <img src={mike}
                    alt='user' width='80%'/>
                </div>
                <div class='right'>
                    <div class='info'>
                        <h3>Mike Stratton</h3>
                        <div class='info-data'>
                            <div class='data'>
                                <h4>About</h4>
                                <p>Michael is a Brazilian jiujitsu black belt under Megaton Dias. He’s been on the mats since 1993 when he joined the JH Wrestling team. He prides himself on two things - how he's infused his wrestling into his Brazilian jiujitsu game, and how he's spent decades focusing on the fundamentals of grappling. Michael specializes in both takedowns (fundamental wrestling) and full closed guard (fundamental jiujitsu).
                                In high school as a wrestler, Michael was a 3X league champion and a section champion. He went to Fargo North Dakota and placed top ten in the Junior Nationals in Greco-Roman wrestling in 1998. He began no gi jiujitsu in 2004 and competed in an amateur MMA fight in 2007 which he won by unanimous decision, and a professional MMA fight in 2008 which he won by first round submission. Michael switched his focus to traditional Brazilian jiujitsu with the gi and placed 3rd, and then 2nd in the world championships in 2008 and 2010 respectively. In 2016, he placed 2nd once again, this time in the no gi world championships.
                                He plans to continue after his goal of winning a gi or no gi jiujitsu world championship.
                                His style as a coach is patience and positive reinforcement, but he also takes a no nonsense approach to his classes. He dumps lots of energy in to each individual student, and he genuinely cares about each one of their progress. He demands a lot from his students, but he guides and praises them every step of the way.
                                Coach Michael teaches all of the youth classes, as well as the adults fundamentals Mon 9am, and  Mon/Wed adults fundamentals at 730p. </p>
                            </div>
                            <div class='projects'>
                                <h3>Avaliable Lessons</h3>
                                <div class='projects-data'>
                                    <div class='data'>
                                        <h4>Avaliable Lessons</h4>
                                        <p>01/4/22 at 2pm. (1 Hour)    <button type='submit' onClick={notify}>SCHEDULE</button></p>
                                        <p>01/5/22 at 2pm. (1 Hour)    <button type='submit'>SCHEDULE</button></p>
                                        <p>01/6/22 at 2pm. (1 Hour)    <button type='submit'>SCHEDULE</button></p>
                                        <p>01/11/22 at 2pm. (1 Hour)    <button type='submit'>SCHEDULE</button></p>
                                        <p>01/12/22 at 2pm. (1 Hour)    <button type='submit'>SCHEDULE</button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MikeSchedule;