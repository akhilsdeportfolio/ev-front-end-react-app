import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import styled  from 'styled-components';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { SearchResults } from './SearchResults';
import { Link } from "react-router-dom";

const Search = styled.div`
  background-color: #FFB3D4;
  width: 37%;
  height: 38px;
  border-radius: 30px;
  display: flex;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
`

const SearchWrapper = styled.div`
 background-color: white;
 width: 25%;
 height: 32px;
 border-radius: 20px;
 margin-top: 2.8px;
 margin-left: 40%;
 margin-right: 1%;
`


const StyledInputBase = styled(InputBase)(() => ({
    backgroundColor: "#FFB3D4",
    width: '80%',
    height: '9%',
    borderRadius: "42px",
    padding: "0.2%",
    paddingLeft: "2%",
    marginTop: '20px',
    marginLeft: '10px',
    input:{
    '&::placeholder': {
      color: 'black',
      fontSize: '15px',
      fontWeight: '500',
      
    }
  }
}));

const styles = {
  searchbar:{
    textDecoration: 'none',
    cursor: 'auto'
  }
}

const useStyles = makeStyles({
  icon:{
    color:'#FF546D', 
    fontSize:'45px', 
    marginLeft: '33%',
    marginTop: '8%',
    cursor: 'pointer',
  }
})

function Searchbar(){
  const classes = useStyles()
  
    return(
        <>
        <Link to='/Search' style={styles.searchbar}>
            <Search>
            <StyledInputBase
              placeholder="SEARCH"
            />
            <SearchWrapper>
              <SearchIcon className={classes.icon}/>
              </SearchWrapper>
          </Search>
          </Link>
        </>
    )
}

export {Searchbar}