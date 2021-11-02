import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const styles={
     textAlign:'center',width:'100%',fontFamily:'Rozha One',fontSize:'37px'
};
export default function()
{
     return(<>
          <AppBar position="static" >
               <Toolbar variant="dense" >
               <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <ArrowBackIosNewIcon />
               </IconButton>

               
               <Typography variant="h1" color="inherit" component="div" style={styles}>
                    Your E-Assistant
               </Typography>
               </Toolbar>
          </AppBar>
     </>);
}