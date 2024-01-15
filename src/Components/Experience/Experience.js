// import { Badge, Avatar, Typography } from '@mui/material';
import { MailOutline } from '@mui/icons-material';
import "./Experience.css"
import React ,{useState} from 'react'
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

   
export default function Experience() {
    const experiences = [
     { company: 'ELUCIDATA', role: 'Software Engineer Intern', duration: 'JAN 2021 - JULY 2021' },
     { company: 'IBM', role: 'Software Engineer', duration: 'JULY 2021 - Present' },
     // Add more experiences here
    ];
   
    return (
     <div className="skills-experience">
       <VerticalTimeline style={{background:"hotpink"}}>
         {experiences.map((experience, index) => (
           <VerticalTimelineElement
             key={index}
             className="vertical-timeline-element--work"
             date={experience.duration}
             contentStyle={{ color: 'hotpink' }}

             iconStyle={{ background: 'hotpink', color: '#fff' }}
           >
            <div >
             <h3 style={{fontSize:"20px",fontWeight:"bold"}} className="vertical-timeline-element-title">{experience.role}</h3>
             <h4 style={{fontWeight:"bold"}}className="vertical-timeline-element-subtitle">{experience.company}</h4>
             </div>
           </VerticalTimelineElement>
         ))}
       </VerticalTimeline>
     </div>
    );
   }
   