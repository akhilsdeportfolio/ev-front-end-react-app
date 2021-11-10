

import { Home } from './components/Home';
import { Route, Switch, Redirect, component } from "react-router-dom";
import LoginForm from './components/LoginForm'
import Raise2 from './components/Raise2'

/* import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AllReviews from './components/AllReviews';
import Review from './components/Review';
import Raise4 from './components/Raise4';
import Raise5 from './components/Raise5'; */
//import Raise1 from './components/Raise1';

 import About from './components/About';

function App() {

  return (
    <>
      {/* < HEAD/> */}
      <Switch>
        <Route exact path='/Login' ><LoginForm /></Route>
        <Route exact path='/Raise2' ><Raise2/></Route>
        <Route exact path='/Home' ><Home/></Route>
        <Route exact path='/' component={Home} />
        {/* <Redirect exact from="/" to="Home" /> */}

      </Switch>


      {/* <AllReviews/>*/}
      {/* <About/> */}
      {/* <Raise1/> */}
      {/* <Raise2/> */}
      {/* <Raise4/> */}
      {/* <Raise5/> */}
    </>
  );
}

export default App;
