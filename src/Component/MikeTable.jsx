import React from 'react';

function MikeTable(props){
    return(
        <div className='a-box mx-4'>
            <div>
                <img src={props.image} alt=''/>
            </div>
            <div className='a-b-text'>
                <h2>{props.title}</h2>
                <button className='trainer-btn'><a href='/instructorschedule' className="trainer-link">Click to Reserve a Private Lesson</a></button>
            </div>
        </div>
    )
}
export default MikeTable;