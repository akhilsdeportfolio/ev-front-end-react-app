import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Typography } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import styled  from 'styled-components';
import { makeStyles } from '@mui/styles';
import { useState, useEffect } from "react"
import { NewsList } from './NewsList';
import { VehicleList } from './VehicleLists';
import { RiCloseCircleLine } from 'react-icons/ri'
import { NavLink } from "react-router-dom";

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

const SearchWrapper = styled.button`
  background-color: white;
 width: 15%;
 height: 32px;
 border-radius: 20px;
 margin-top: 2.8px;
 margin-left: 2%;
 border: none;
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

const useStyles = makeStyles({
  icon:{
    color:'#FF546D', 
    fontSize:'50px', 
    marginLeft: '10%',
    marginTop: '8%',
    cursor: 'pointer',
  },
  
})

const styles ={
    appbar: {
        position: 'relative',
    },
    text:{
    textAlign: 'center',
    margin: '2%'
  },
  close:{
    fontSize:'30px',
    color: 'black',
    textAlign: 'right',
    marginRight: '1%'
  }
}

const Line = styled.hr`
 width: 0px;
  border: 5px solid #FFB3D4;
  margin-left: 30%;
  height: 750px;
`

const Display = styled.div`
  display: flex;
  flex-direction: row;
`

function SearchResults(){
    const [input, setInput] = useState('')
    const [newsList, setNewsList] = useState([])
    const [vehicleList, setVehicleList] = useState([])
    const classes = useStyles()

    useEffect(() => {
      getNews()
      getVehicles()
  }, [])
  
    const handleChange = (e)=>{
      setInput(e.target.value)
    }

    const getNews = async(title) => {
      let res = await fetch('http://localhost:2000/news')
        let newsData =  await res.json()
        console.log(newsData);
        setNewsList(newsData)
    }

    const getVehicles = async(title) => {
      let res = await fetch('http://localhost:2000/vehicles')
        let vehicleData =  await res.json()
        console.log(vehicleData);
        setVehicleList(vehicleData)
    }

    
  
    return(
        <>
        <AppBar style={styles.appbar}>
          <NavLink to='/' style={styles.close}>
        <RiCloseCircleLine />
        </NavLink>
            <Search>
            <StyledInputBase
              placeholder="SEARCH"
              value={input}
              onChange={handleChange}
            />
            <SearchWrapper>
              <SearchIcon className={classes.icon}/>
              </SearchWrapper>
          </Search>
          </AppBar>
          
          <Typography variant='h4' style={styles.text}>
              Find your results here!
          </Typography>
          
          <NewsList newsList={newsList} input={input}></NewsList>
          <VehicleList vehicleList={vehicleList} input={input}></VehicleList>
        </>
    )
}

export {SearchResults}