import { useEffect, useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar, Button } from "@material-ui/core";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Review from './Review';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import AboutVehicle from "./AboutVehicle";

import Wall from './Wall';
import { Rating } from "@mui/material";
import FeatureCard from "./FeatureCard";
import IconText from "./IconText";
import { Timer } from "@material-ui/icons";
const styles={
     textAlign:'center',width:'100%',fontFamily:'Montserrat',fontSize:'37px',fontWeight:'600'
};

const head={
     textAlign:'center',width:'100%',fontFamily:'Rozha One',fontSize:'37px'
};
const styles2={
     textAlign:'center',width:'100%',fontFamily:'Montserrat'
}

export default function ProductDetails({})
{

     let id ="123"

     let data ={
          vehicleName :'TATA NEXON',
          rating:4.5,
          totalReviews:20,
          price :'13.8 Lakhs - 14.5 Lakhs',
          location :' Exshowroom price in Bangalore'
     }
     const [vehicleData,setVehicleData]=useState(data);
     const [features,setFeatures]=useState([]);
     const [gallery,setGallery]=useState("/gallery");

     let intro=[
          <IconText icon="timer" feature="Time to charge" text="20mins"></IconText>,
          <IconText icon="road" feature="Driving Ranges" text="200Km/fullcharge"></IconText>,
          <IconText icon="battery" feature="Battery Capacity" text="30.2KWH"></IconText>
          ,<IconText icon="power" feature="Power" text="127bhp"></IconText>
     ]


     let questions = [{title:'what is the price of the cars ?',answer:'the price of the car ranges  from 114 lakhs to 234 lakhs in INR  at Exshowroom Delhi'},{title:'what is the price of the cars ?',answer:'the price of the car ranges  from 114 lakhs to 234 lakhs in INR  at Exshowroom Delhi'},{title:'what is the price of the cars ?',answer:'the price of the car ranges  from 114 lakhs to 234 lakhs in INR  at Exshowroom alkdjasdlkajsdl alksdjalsdjalsdjal dals dlasjd lakjd lasjd lasjdas asd asd sssss'},]
     

     useEffect(()=>{
          setVehicleData(data);
          setFeatures(['black','red','white','black','black','red','white'])

          console.log(vehicleData)
          setGallery(gallery+`/${id}`);

     },[]);





     return(<>
     
     <AppBar position="static" >
               <Toolbar variant="dense" >
               <Link to="/" style={{color:'white'}}> <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <ArrowBackIosNewIcon />
               </IconButton>
               </Link>

               
               <Typography variant="h1" color="inherit" component="div" style={head}>
                    Your E-Assistant
               </Typography>
               </Toolbar>
     </AppBar>



     
      <Wall  pic1="https://images.unsplash.com/photo-1617886322168-72b886573c35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" pic2="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=452&q=80" />

     <Box style={{marginTop:'375px'}}>
     <Typography variant="h1" color="black" component="div" style={styles}>
                    {vehicleData.vehicleName}
     </Typography>
     <div style={{textAlign:'center'}}>
     <Rating value={vehicleData.rating} precision="0.5" readOnly="true" size="large" style={{fontSize:'30px'}}/>

     <Typography variant="p" color="black" component="div" style={styles2} >
                    {vehicleData.totalReviews} Reviews
     </Typography>

     <Typography variant="h6" color="black" component="div" style={styles2} >
                    {vehicleData.price}
     </Typography>

     <Typography variant="p" color="black" component="div" style={styles2} >
                    {vehicleData.location}
     </Typography>

     <Link to={gallery} sx={{textColor:'white'}} style={{textDecoration:'none'}}><Button  variant="contained" style={{marginTop:'10px',backgroundColor:"#FF546D",color:"white"}}>
          Gallery</Button></Link>
     </div>          
     

          

     
     </Box>          
     

     <Box sx={{margin:'auto',width:'80%'}}>
          <FeatureCard titles="Key Specs of Tata Nexon EV" featureList={intro}/>
     </Box>

     <Box sx={{margin:'auto',width:'80%'}}>
          <FeatureCard featureList={features}/>
     </Box>
     <Box sx={{margin:'auto',width:'78.5%'}}>
          <AboutVehicle title="Nexon EV Latest Update" about="Latest Update: Tata will launch the Nexon BS6 facelift on January 22.

Variants and Prices: The Nexon is available in eight variants: XE, XM, XMA, XT, XT+, XZ, XZ+, and XZA+ with some combinations offering a dual-tone roof and automatic transmission. Tata Motors also offers the Nexon in the special edition KRAZ trim. However, the features on offer remain the same. Tata’s sub-4m SUV is priced between Rs 6.73 lakh and Rs 11.4 lakh (ex-showroom Delhi).

Powertrain: It is offered with either a 1.2-litre turbocharged petrol engine or a 1.5-litre turbocharged diesel engine. While the petrol engine produces 110PS/170Nm, the output figures of the diesel engine stand at 110PS and 260Nm respectively. Tata offers both these engines with either a 6-speed manual transmission or a 6-speed AMT.

Meanwhile, the Nexon EV will use Tata’s new Ziptron technology. It will get a 30.2kWh battery pack and will offer a claimed range of over 300km. The Nexon EV will support fast-charging and will be offered with an 8-year standard warranty. What’s more, it will come with an IP67 waterproof battery pack.

Features: It gets a 6.5-inch touchscreen infotainment system by Harman-Kardon with an 8-speaker setup. Projector headlamps and LED DRLs are also a part of the kit. The Tata SUV also gets rear AC vents and multiple drive modes (Eco, City and Sport). Tata offers the Nexon with safety features such as dual front airbags, ISOFIX child seat mounts, ABS with EBD, and corner stability control.

Rivals: The Nexon rivals the likes of Maruti Suzuki Vitara Brezza, Ford EcoSport, Ford Freestyle, Honda WR-V, Mahindra TUV300, and Mahindra XUV300. It will also take on the upcoming Renault HBC and the Kia QYI."/>
     </Box>



     <div style={{width:'80%',margin:'auto'}}>
     
     <FeatureCard title="Question &amp; Answers (FAQ)" isQuestions="true" questions={questions}>
     
     </FeatureCard>     

     
     </div>
     

     </>);


}