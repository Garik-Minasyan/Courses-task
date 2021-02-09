import React from 'react';
import play from './../images/Vector.png'

const Courses = ({ cours }) => {
    return (
        <div className="courses">
            <div className="titleLessons">
                <p className="text a">{cours.title}</p>
                <p className="text b">{cours.lessons} Leassons</p>
            </div>
            <p className="text c">{cours.min}</p>
            <div className="play">
                <img src={play} alt="png" />
            </div>
            <img alt="png" src={cours.src} />


        </div>
    )
};

export default Courses;