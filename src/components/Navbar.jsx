import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Searchbar } from './Searchbar';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import { useState } from "react";

const useStyles = makeStyles({
    bar: {
        marginTop: "1.5%",
        color: "background: linear-gradient(180deg, #FF3D59 0.3%, #C11561 100%)",

        '& h5': {
            marginLeft: '10%',
            marginRight: "25%",
            fontFamily: "Rozha One",
            fontWeight: "400"
        },
    },
})

const styles = {
    appbar: {
        position: 'relative',
    },
    btn1: {
        backgroundColor: "white",
        borderRadius: "51px",
        boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)',
        fontWeight: '700',
        fontSize: '15px',
        marginTop: '0.5%',
    },
    btnlink: {
        textDecoration: 'none',
        marginLeft: '1%',
    },
    logout:{
        textDecoration: 'none',
        color: 'white',
        fontWeight: '400',
        marginLeft: '-10%'
    },
    welcome: {
        marginLeft: '2%',
        display: 'flex',
        flexDirection: 'column'
    }
}

const NavUnlisted = styled.ul`

  display: flex;

  a {
    text-decoration: none;
  }

  li {
    color: white;
    margin: 0 0.7rem;
    font-size: 19px;
    position: relative;
    list-style: none;
    font-family: 'Montserrat';
    width: max-content
  }

  .current {
    li {
      font-weight: 600;
      border-bottom: 2px solid black;
    }
  }
`

function Navbar() {
    const classes = useStyles()
    const history = useHistory();

    let userDetails=null;
    function isUserPresent()
    {
        let user=localStorage.getItem('activeUser');
        
        if(!user)
            return false;
        else
        {
            userDetails=JSON.parse(user);
            console.log(userDetails);
            return true;    
        
            
        }
    }

    function logout()
    {
        localStorage.removeItem('activeUser');
        history.push("/");
        
    }
    return (
        <>
            <AppBar style={styles.appbar}>
                <Toolbar className={classes.bar} >
                    <Typography variant="h5" style={{'marginLeft': '8%'}}>
                        Your E-Assistant
                    </Typography>
                    <NavUnlisted>
                        <NavLink to="/Home" activeStyle={{fontWeight: "800" }}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/News" activeStyle={{fontWeight: "800" }}>
                            <li>News</li>
                        </NavLink>
                        <NavLink to="/Vehicles" activeStyle={{fontWeight: "800" }}>
                            <li>E-Vehicles</li>
                        </NavLink>
                        <NavLink to="/About" activeStyle={{fontWeight: "800" }}>
                            <li>About Us</li>
                        </NavLink>

                        {isUserPresent()===true? <NavLink to="/Login" activeStyle={{fontWeight: "800" }}>
                            <li style={styles.welcome}>Hello! {userDetails.firstName} &nbsp; <Button variant="outlined" style={styles.logout} onClick={logout}>(Logout)</Button> </li>                            

                        </NavLink> :<NavLink to="/Login" activeStyle={{fontWeight: "800" }}>
                            <li>Login</li>
                        </NavLink>}
                        
                    </NavUnlisted>
                   <NavLink to="/Raise2" style={styles.btnlink}> <Button variant="outlined" style={styles.btn1} >Urgent</Button></NavLink>
                </Toolbar>
                <Searchbar />
            </AppBar>
        </>
    )
}

export { Navbar }