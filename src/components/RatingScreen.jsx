import { TextField, Stack, Typography, Button, Rating } from "@mui/material";
import { Box, spacing } from "@mui/system";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import { useMemo, useState } from "react";
import { Footer } from "./Footer";
import { Navbar } from './Navbar';


function MyFormHelperText() {
     const { focused } = useFormControl() || {};
   
     const helperText = useMemo(() => {
       if (focused) {
         return 'please enter your review';
       }
   
       return 'please enter your review';
     }, [focused]);
   
     return <FormHelperText>{helperText}</FormHelperText>;
}

export default function()
{

     const [rating,setValue]=useState(0);

     return(<>

     <Navbar/> 
     <Box sx={{padding:25,spacing:3}}>

          <Stack direction="column" spacing={5}>
          <FormControl sx={{ width: '100%' }} >
          <Typography>Name</Typography>               
          <OutlinedInput placeholder="Please enter text" />
          
          </FormControl>

          <FormControl sx={{ width: '100%' }} >
          <Typography>Email</Typography>                              
          <OutlinedInput placeholder="Please enter text" />
          
          </FormControl>

          <FormControl sx={{ width: '100%' }} >
          <Typography>Comments</Typography>               
          <OutlinedInput placeholder="Please enter text" style={{height:'5rem',textAlign:'start',cursor:'pointer'}} />
          <MyFormHelperText />
          </FormControl>


          <div style={{textAlign:'center'}}>

              {
                   rating > 3 ?  <Rating precision={0.5} onChange={(event, newValue) => {
                    setValue(newValue);
                  }} name="size-large" defaultValue={rating} size="large" style={{fontSize:'64px',margin:'20px',color:'green',opacity: 0.65 }} />: rating < 2 ? <Rating precision={0.5} onChange={(event, newValue) => {
                    setValue(newValue);
                  }}name="size-large" defaultValue={rating} size="large" style={{fontSize:'64px',margin:'20px',opacity: 0.65,color:'red' }} /> : <Rating precision={0.5} onChange={(event, newValue) => {
                    setValue(newValue);
                  }} name="size-large" defaultValue={rating} size="large" style={{fontSize:'64px',margin:'20px',opacity: 0.65 }} />
              } 
               
               <br/>
               <Button color="primary" variant="contained">Submit</Button>
          </div>
          </Stack>




          

     </Box>          

     <Footer/>         

     </>)
}