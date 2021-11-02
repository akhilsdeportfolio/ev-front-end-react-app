import logo from './logo.svg';
import './App.css';
import { Skeleton,Avatar,Button,Chip,Box,Rating,FormGroup,FormControlLabel,Switch,Badge } from '@mui/material';
import {red} from '@mui/material/colors'
import MailIcon from '@mui/icons-material/Mail';
import ReviewsComponent from './components/ReviewsComponent';



function App() {
  
  return (
    <>
      <Box sx={{padding:1}} >
        <h1>Welcome</h1>
        <ReviewsComponent/>
      </Box>
    </>
  );
}

export default App;
