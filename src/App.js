import logo from './logo.svg';
import './App.css';
import { Skeleton,Avatar,Button,Chip,Box,Rating,FormGroup,FormControlLabel,Switch,Badge } from '@mui/material';
import {red} from '@mui/material/colors'
import MailIcon from '@mui/icons-material/Mail';


function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function App() {
  
  return (
    <>
    {
      
      console.log(red[400])
      
    }
    <Box sx={{gap:2,display:'flex',padding:2,alignItems:'center'}}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      
      <Chip label="primary" color="primary"/>

      <Chip label="secondary" color="secondary"/>


      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
      
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />


      <Avatar {...stringAvatar('Akhil Kamsala')} />



      <Badge color="secondary" badgeContent={0} showZero>
        <MailIcon />
      </Badge>


      
    </Box>

    <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
    </>
  );
}

export default App;
