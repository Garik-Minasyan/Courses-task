import React from 'react';
import img1 from './../images/img3.png';
import CoursesByCondition from './CoursesByCondition';
import img2 from './../images/img2.png';
import Courses from './Courses';

const CantrolPanel = () => {
    const courses = [
        {
            title: "Iliustration",
            lessons: 24,
            min: " 134 min",
            src: img2,
            id: 1
        },
        {
            title: "Graphic design",
            lessons: 30,
            min: " 236 min",
            src: img1,
            id: 2
        }
    ]
    return (
        <div className="cantrolPanel">
            <CoursesByCondition />
            <div className="leftPanel">
                <div className="scrool"></div>
            </div>
            {
                courses && courses.map(cours => (
                    <Courses cours={cours} key={cours.id} />
                ))
            }


        </div>
    )
}

export default CantrolPanel;