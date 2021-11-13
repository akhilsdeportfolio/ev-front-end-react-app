import { NavLink } from "react-router-dom";
import Card from '@mui/material/Card';
import styled  from 'styled-components';


const NewsSec = styled.div`
    margin-left: 4%;
`


const styles = {
    news:{
        marginLeft: '10%'
    },
    newstext: {
        color:'white',
        textDecoration: 'none',
    },
    cards: {
        width: '90%', 
        marginTop: '1%',
        padding: '20px',
        backgroundColor: '#FF546D',
    }
}

const NewsList = ({newsList, input}) => {

    return (
      <>
      <NewsSec>
        <h2 style={styles.news}>News</h2>
      { newsList.filter((e)=>{
          if(input === ''){
              return e.title
          }else if(e.title.toLowerCase().includes(input.toLowerCase())){
                return e.title  
          }
      }).map((data,index) => {
          if (data) {
            return (
              <div key={index}>
                  <Card style={styles.cards}>
               <NavLink to={`/News/${data._id}`} style={styles.newstext}> <h3>{data.title}</h3></NavLink>
               </Card>
          </div>	
             )	
           }
           return null;
      }) }
      </NewsSec>
      </>
    );
  }
  
  export {NewsList}