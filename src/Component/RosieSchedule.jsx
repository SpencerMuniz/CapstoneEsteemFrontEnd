import React from 'react';
import rosie from './images/rosie.jpg'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const notify = () => toast("Your private lesson is booked")

function RosieSchedule () {
    return(
        <div>
            <div class='wrapper'>
                <div class='left'>
                    <h4>Schedule a Private Lesson with Rosie</h4>
                    <img src={rosie}
                    alt='user' width='80%'/>
                </div>
                <div class='right'>
                    <div class='info'>
                        <h3>Rosie Stratton</h3>
                        <div class='info-data'>
                            <div class='data'>
                                <h4>About</h4>
                                <p>Rosie Stratton is a Brazilian Jiujitsu brown belt who began training regularly in 2013. Being married to Michael, she was around jiujitsu all of the time and knew that once her family was established, she was going be on the mats. 
                                After her second son was born, she began training competing almost immediately and enjoyed success at both local and regional tournaments, even earning a bronze medal at the prestigious Pan Ams in 2015. 
                                Her approach as an instructor is gentle and patient. She absolutely loves teaching the kids and treats them all like they're her own. 
                                While she admits that she'd prefer to leave the disciplining up to Coach Michael, she also claims to have the best behaved youth classes in Petaluma, so there's not a lot of discipling to do.
                                Rosie's goals are to continue growing Esteem and progressing in her jiujitsu. She says she considers jiujitsu to be a “ride that doesn’t have to end” and she plans on enjoying the ride.
                                Coach Rosie assists Coach Michael with all of the youth classes. She also teaches adults Friday 9am and 7:30pm fundamentals class.</p>
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
export default RosieSchedule;