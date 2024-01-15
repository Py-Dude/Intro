import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { DiDocker } from "react-icons/di";
import React from 'react'
import Fade from '@mui/material/Fade';

export default function Skills() {
    return (
        <>
        <Stack spacing={2} sx={{ width: '100%',margin:"2rem" }}>
     
        <MuiAlert className="scaleEffectAnimation" icon={<FaReact  />} severity="error" sx={{ bgcolor: '#61dafb', color: 'hotpink',fontWeight:"bold" }}>REACT</MuiAlert>
<MuiAlert className="scaleEffectAnimation" icon={<FaJsSquare  />} severity="warning" sx={{ bgcolor: '#f7df1e', color: 'hotpink',fontWeight:"bold" }}>JAVASCRIPT</MuiAlert>
<MuiAlert className="scaleEffectAnimation" icon={<SiPython  />} severity="info" sx={{ bgcolor: 'skin', color: 'hotpink',fontWeight:"bold" }}>PYTHON</MuiAlert>
<MuiAlert className="scaleEffectAnimation" icon={<DiDocker  />} severity="success" sx={{ bgcolor: 'white', color: 'hotpink',fontWeight:"bold" }}>DOCKER</MuiAlert>
          {/* <FaReact size={32} color="blue" />
         <FaJsSquare size={32} color="yellow" />
         <SiPython size={32} color="green" />
         <DiDocker size={32} color="cyan" /> */}

        </Stack>
         <div>
       </div>
       </>
      );}

