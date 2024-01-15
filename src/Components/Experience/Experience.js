// import { Badge, Avatar, Typography } from '@mui/material';
import { MailOutline } from '@mui/icons-material';
import "./Experience.css"
import React ,{useState} from 'react'
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


// export default function Experience() {
//     const [experiences, setExperiences] = useState([
//       { company: 'ELUCIDATA', role: 'Software Engineer Intern', duration: 'JAN 2021 - JULY 2021' },
//       { company: 'IBM', role: 'Software Engineer', duration: 'JULY 2021 - Present' },
//       // Add more experiences here
//     ]);
   
//     return (
//       <div className="skills-experience">
//         <div className="experience">
//           {experiences.map((experience, index) => (
//             <Card key={index} style={{ margin: '1rem', backgroundColor: '#f5f5f5' }}>
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {experience.role}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {experience.company}, {experience.duration}
//                 </Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     );
//    }
   
export default function Experience() {
    const experiences = [
     { company: 'ELUCIDATA', role: 'Software Engineer Intern', duration: 'JAN 2021 - JULY 2021' },
     { company: 'IBM', role: 'Software Engineer', duration: 'JULY 2021 - Present' },
     // Add more experiences here
    ];
   
    return (
     <div className="skills-experience">
       <VerticalTimeline>
         {experiences.map((experience, index) => (
           <VerticalTimelineElement
             key={index}
             className="vertical-timeline-element--work"
             date={experience.duration}
             iconStyle={{ background: 'hotpink', color: '#fff' }}
           >
             <h3 className="vertical-timeline-element-title">{experience.role}</h3>
             <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
           </VerticalTimelineElement>
         ))}
       </VerticalTimeline>
     </div>
    );
   }
   