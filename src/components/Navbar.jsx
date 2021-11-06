import { AppBar, Toolbar, Typography, Button, Tabs, Tab } from "@mui/material";
import { makeStyles } from '@mui/styles';
import {useState} from 'react'
import { Searchbar } from './Searchbar';



const useStyles = makeStyles({
    bar: {
        marginTop: "1.5%" , 
        color: "background: linear-gradient(180deg, #FF3D59 0.3%, #C11561 100%)", 

        '& h5':{
            marginLeft: '10%',
            marginRight: "25%", 
            fontFamily: "Rozha One", 
            fontWeight: "400"
        },
    },
    sec: {
        marginLeft: "1%",
        marginRight: "2%",
    }
})

const styles = {
    btn1:{
        backgroundColor: "white", 
        borderRadius: "51px", 
        boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)',
        fontWeight: '700',
        fontSize: '15px'
    },
    color:{
        color: 'white',
        fontFamily: 'Montserrat',
    }
}

 function Navbar(){
   const classes = useStyles()

    const [value, setValue] = useState(1)
    const handleClickTab = (e, newValue)=>{
        setValue(newValue)
    }
     return (
        <div>
            <AppBar>
                <Toolbar  className={classes.bar} >
                    <Typography variant="h5">
                     Your E-Assistant
                     </Typography>
                     <Tabs  onChange={handleClickTab} indicatorColor="secondary"   className={classes.sec}   value={value} >
                        <Tab    style={styles.color}  label="Login"/>
                         <Tab   style={styles.color}  label="Home"/>
                         <Tab   style={styles.color}  label="News"/>
                         <Tab   style={styles.color}  label="E-Vehicles"/>
                         <Tab   style={styles.color}  label="About Us"/> 
                      </Tabs>
                     <Button variant="outlined" style={styles.btn1}>Urgent</Button>
                  </Toolbar>
                 <Searchbar/>
             </AppBar>
             
         </div>
     )
 } 

 export {Navbar} 