import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Searchbar } from './Searchbar';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { Responsibility } from "./Responsibility";


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
        height: '500px',
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
        marginLeft: '2%',
    },
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
    font-weight: 400;
    font-family: 'Montserrat';
  }
`

function TopBar() {
    const classes = useStyles()

    return (
        <>
            <AppBar style={styles.appbar}>
                <Toolbar className={classes.bar} >
                    <Typography variant="h5">
                        Your E-Assistant
                    </Typography>
                    <NavUnlisted>
                        <NavLink to="/Home" activeClassName="active">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/News" activeStyle={{fontWeight: "600" }}>
                            <li>News</li>
                        </NavLink>
                        <NavLink to="/Vehicles" activeStyle={{fontWeight: "600" }}>
                            <li>E-Vehicles</li>
                        </NavLink>
                        <NavLink to="/About" activeStyle={{fontWeight: "600" }}>
                            <li>About Us</li>
                        </NavLink>
                        <NavLink to="/Login" activeStyle={{fontWeight: "600" }}>
                            <li>Login</li>
                        </NavLink>
                    </NavUnlisted>
                   <NavLink to="/Raise2" style={styles.btnlink}> <Button variant="outlined" style={styles.btn1} >Urgent</Button></NavLink>
                </Toolbar>
                <Searchbar />
              <Responsibility />  
            </AppBar>
            
        </>
    )
}

export { TopBar }