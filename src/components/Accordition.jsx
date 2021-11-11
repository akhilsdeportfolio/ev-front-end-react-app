import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddCircleTwoTone } from '@material-ui/icons';


export default function SimpleAccordion({questions}) {
  return (

    <>
{
      questions.map(function (question){
        return <div >      
        <Accordion >
          <AccordionSummary
            style={{display:'flex',padding:10,m:10}}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            
          >
            <Typography style={{flexGrow:1}}>{question.title} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {question.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>      
      </div>
      })
}
    </>
  );
}
