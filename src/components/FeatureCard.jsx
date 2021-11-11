
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleAccordion from "./Accordition";
import { useState,useEffect } from 'react';

const styles2={
     textAlign:'start',fontFamily:'Montserrat'
}


export default function({featureList,isQuestions,questions,titles})
{


     let title ;


     titles && true ? title=titles :isQuestions === "true" ? title="Question & Answers":title="Features";
     
     
     const [features,setFeatures]=useState([]);


     useEffect(()=>{
               setFeatures(featureList);
     })
     return(<>
     <Card sx={{ margin:'20px',border:'1px solid gray'}}>
      <CardContent>
        
        <Typography variant="h5" component="div" style={styles2} sx={{fontWeight:'500'}}>
          {title}
        </Typography>
     

     
        <div style={{ width: '100vw' }}>
      <Box
        sx={{
          display: 'inline-flex',          
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          gap:0
        }}
      >
        
          
          {isQuestions==="true" ?<div ><SimpleAccordion questions={questions}/> </div>:
          
               features.map((el)=>{
                    return <><Typography variant="body2" style={styles2} sx={{fontWeight:'400',marginRight:'30%'}}>{el}</Typography></>
               })
          }
        
       </Box>        
        </div>
      </CardContent>
    
    </Card>
          
</>)
     

}

