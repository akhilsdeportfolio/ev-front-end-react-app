import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Review from './Review';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
const styles={
     textAlign:'center',width:'100%',fontFamily:'Rozha One',fontSize:'37px'
};
export default function()
{
     return(<>
          <AppBar position="static" >
               <Toolbar variant="dense" >
               <Link to="/" style={{color:'white'}}> <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <ArrowBackIosNewIcon />
               </IconButton>
               </Link>

               
               <Typography variant="h1" color="inherit" component="div" style={styles}>
                    Your E-Assistant
               </Typography>
               </Toolbar>
          </AppBar>

          <Box sx={{padding:2}}>
          <Typography variant="h1" sx={{textDecoration:'underline',textDecorationColor:'#FF3D5A'}}
          color="black" component="div" style={styles}>
                    Reviews
          </Typography>

          <Review/>
          </Box>

          <Footer/>
          
     </>);
}