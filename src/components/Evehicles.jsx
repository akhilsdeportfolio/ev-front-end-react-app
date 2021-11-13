import { useEffect,useState } from "react";
import axios from 'axios';
import { Navbar } from "./Navbar";
import { Chip, Stack,Box, Typography } from "@mui/material";
import { Vehicles } from "./Vehicles";

export default function()
{
     const [vehicles,setVehicles]=useState([]);
     const [color,setColor]=useState("secondary");

     let handleClick=async (e)=>{
          let text=e.target.innerText;
          if(color=="primary")
          {
               setColor("secondary")
          }
          else
          {
               setColor("primary")
          }          


          if(text==="all")
          {
               let data=await axios.get(`http://localhost:2000/vehicles`)
               //console.log(data.data);
               setVehicles(data.data);
          }
          else
          {
               let data=await axios.get(`http://localhost:2000/vehicles/tag/${e.target.innerText}`)
               //console.log(data.data);
               setVehicles(data.data);
          }
          
     }



     useEffect(async ()=>{

          //let data=await axios.get("http://localhost:2000/vehicles/tag/car")
          //console.log(data.data);
          //setVehicles(data.data);
     },[]);



     return(<>

          <Navbar/>

          <Box sx={{gap:2,display:'flex',flexDirection:'column'}}>
          <Typography variant="h3"  style={{fontFamily:"rozha one",textAlign:"center"}}>E-Vehicles </Typography>
          <Typography variant="h5"  style={{fontFamily:"Montserrat",textAlign:"center",fontWeight:'700'}}>Categories </Typography>
          

          <Stack spacing={10} direction="row" style={{textAlign:'center',alignContent:'center',width:'30%',margin:'auto'}}>
          <Chip label="all" color="primary" onClick={handleClick} />
          <Chip label="bike" color={color} onClick={handleClick} />
          <Chip label="car" color={color} onClick={handleClick} />
          <Chip label="truck" color={color} onClick={handleClick} />

               
               
          </Stack>     

               <Vehicles vehiclesData={vehicles}></Vehicles>
          </Box>
     </>);

}