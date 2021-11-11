

import { Home } from './components/Home';
import { Route, Switch, component } from "react-router-dom";
import LoginForm from './components/LoginForm'
import Raise2 from './components/Raise2'
import { News } from './components/News';
import { SearchResults } from './components/SearchResults';

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

import Raise5 from './components/Raise5';

import Raise1 from './components/Raise1';
import Raise2 from './components/Raise2';
// import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { Account } from './components/Account';

import Raise5 from './components/Raise5'; */

// import Raise1 from './components/Raise1';
// import Raise2 from './components/Raise2';
// import About from './components/About';


function App() {

  return (
    <>

      {/* <Switch> */}
        {/* <Route path="/raise1" ><Raise1></Raise1></Route>
        <Route path="/raise2"><Raise2/></Route>
        <Route path="/raise4"><Raise4/></Route>
        <Route path="/raise5"><Raise5/></Route> */}
     
      {/* </Switch> */}

      {/* < HEAD/> */}
      {/* <Switch>
        <Route exact path='/Login' ><LoginForm /></Route>
        <Route exact path='/Raise2' ><Raise2/></Route>
        

      </Switch> */}
     {/*  <News/> */}
        <Route exact path='/Home' ><Home/></Route>
        <Route exact path='/Search'><SearchResults/></Route>
        <Route exact path='/raise2'><Raise2 /></Route>
        <Route exact path='/' component={Home} />


      {/* <AllReviews/>*/}
      {/* <About/> */}
      {/* <Raise1/> */}
      {/* <Raise2/> */}
      {/* <Raise4/> */}
      {/* <Raise5/> */}

      {/* <LoginForm/> */}
      {/* <SignupForm/> */}
      

    </>
  ); 
}

export default App;
