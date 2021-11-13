import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import { AccessAlarm, ThreeDRotation, Timer,AddRoadSharp,BatteryStd,PowerSettingsNew} from '@mui/icons-material';


const styles2={
     textAlign:'center',width:'100%',fontFamily:'Montserrat'
}

export  default function({icon,feature,text})
{

     let ic;
     if(icon=="timer")
     {    
          ic=<Timer/>;
     }
     else if(icon=="road")
     {
          ic= <AddRoadSharp/>
     }
     else if(icon=="battery")
     {
          ic =<BatteryStd/>
     }
     else if (icon=="power")
     {
          ic= <PowerSettingsNew/>
     }
     console.log(JSON.stringify({icon}));
     return(<>
          <Box sx={{display:'inline-flex',direction:'row',gap:0}}>               

                    {ic}
                    <Box style={{flexGrow:0}}>                                   
                         <Typography style={styles2} variant="body2" sx={{fontWeight:'500',minWidth:'100px'}}>{feature}</Typography>
                         <Typography style={styles2} sx={{fontWeight:'400',fontSize:'15px',wordWrap:'break-word'}}> {text}</Typography>
                    </Box>     
          </Box>
          </>);
}