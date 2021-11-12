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



let initData = {
  name:"",
  email:"",
  text:"",
  star:null,
  vehicle_id:"618b46a35cefe9cea7f31f94"
}
export default function()
{

    
     const [review,setReview]=useState(initData);
     const [rating,setValue]=useState(0);



     let handleChange=(e)=>{
        let rev = {...review,[e.target.name]:e.target.value};
        console.log(rating);
        
        
        setReview(rev);
     }


     let handleSubmit = async (e)=>{
       
        console.log(e);
        let data = {...review,["rating"]:rating};

        console.log(data);
        //let vehiclesData = await fetch("http://localhost:2000/vehicles");
        //console.log(await vehiclesData) 

        fetch("http://localhost:2000/reviews", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            data

          }),
        }).then((response) => response.json());
    
    
        //console.log(await res.json());


     }

     return(<>

     
     <Box sx={{padding:25,spacing:3}}>

          <Stack direction="column" spacing={5}>
          <FormControl sx={{ width: '100%' }} >
          <Typography>Name</Typography>               
          <OutlinedInput placeholder="Please enter name" onChange={handleChange}  name="name" required="true"/>
          
          </FormControl>

          <FormControl sx={{ width: '100%' }} >
          <Typography>Email</Typography>                              
          <OutlinedInput placeholder="Please enter email"  onChange={handleChange} name="email" required="true"/>
          
          </FormControl>

          <FormControl sx={{ width: '100%' }} >
          <Typography>Comments</Typography>               
          <OutlinedInput placeholder="Please enter text" style={{height:'5rem',textAlign:'start',cursor:'pointer'}}  onChange={handleChange} name="review" required="true"/>
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
               <Button color="primary" variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
          </Stack>




          

     </Box>          

     <Footer/>         

     </>)
}