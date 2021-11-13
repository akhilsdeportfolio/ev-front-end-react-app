import SignupForm from './components/SignupForm';
// import LoginForm from './components/LoginForm';
import { Account } from './components/Account';
import { Gallery } from './components/Gallery';
import {SearchResults} from './components/SearchResults'

import { Home } from './components/Home';
import { Route, Switch, component } from "react-router-dom";
//import LoginForm from './components/LoginForm'
//import Raise2 from './components/Raise2'

import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AllReviews from './components/AllReviews';
import Review from './components/Review';
import {News} from './components/News';


import Raise1 from './components/Raise1';
import Raise2 from './components/Raise2';


import LoginForm from './components/LoginForm';
 import ProductDetails from './components/ProductDetails'; 

//import Raise5 from './components/Raise5'; */
// import {Route, Switch} from 'react-router-dom'
//import Raise1 from './components/Raise1';
// import Raise2 from './components/Raise2';
import Raise4 from './components/Raise4';
import Raise5 from './components/Raise5';
import About from './components/About';
import Trending from './components/TrendingTopics';
import { NewsSection } from './components/NewsSection';

 


function App() {

  return (
    <>

       <Switch>
        <Route path="/raise1" ><Raise1></Raise1></Route>
        <Route path="/raise2"><Raise2/></Route>
        <Route path="/raise4"><Raise4/></Route>
        <Route path="/raise5"><Raise5/></Route>
        <Route path="/about"> <About></About> </Route>
        <Route exact path='/ProductDetails/:id' component={ProductDetails} />
        <Route exact path='/Gallery/:id' component={Gallery} />
        <Route exact path='/Reviews/:id' component={AllReviews} />        
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Login' component={LoginForm} />
        <Route exact path='/signup' component={SignupForm} />
        <Route exact path='/News' component={NewsSection} />
        <Route exact path='/News/:id' component={Home} />
        <Route exact path='/Vehicles/:id' component={NewsSection} />
        <Route exact path='/News/:id' component={NewsSection} />
        <Route exact path='/' component={Home} />
        <Route exact path='/Search' component={SearchResults} />
        
        
        
     
       </Switch> 

        
            </>
  ); 
}

export default App;
