import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import styled  from 'styled-components';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const Search = styled.div`
  background-color: #FFB3D4;
  width: 35%;
  height: 9%;
  border-radius: 30px;
  display: flex;
  padding: 0.05%;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
`

const SearchWrapper = styled.div`
 background-color: white;
 width: 16%;
 border-radius: 25px;
 margin-left: 3.5%;
`


const StyledInputBase = styled(InputBase)(() => ({
    backgroundColor: "#FFB3D4",
    width: '80%',
    height: '9%',
    borderRadius: "42px",
    padding: "0.2%",
    paddingLeft: "2%",
    input:{
    '&::placeholder': {
      color: 'black',
      fontSize: '15px',
      fontWeight: '500'
    }
  }
}));

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
  const [text, setText] = useState('')
  const classes = useStyles()

  const handleChange = (e)=>{
    setText(e.target.value)
  }

    return(
        <>
            <Search>
            <StyledInputBase
              placeholder="SEARCH"
              value={text}
              onChange={handleChange}
            />
            <SearchWrapper>
              <SearchIcon className={classes.icon}/>
              </SearchWrapper>
          </Search>
        </>
    )
}

export {Searchbar}