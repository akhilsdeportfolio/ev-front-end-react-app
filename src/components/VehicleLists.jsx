import { NavLink } from "react-router-dom";
import Card from '@mui/material/Card';
import styled  from 'styled-components';



const VehicleSec = styled.div`
   margin-left: 4%;
   margin-bottom: 3%;
`

const styles = {
    Vehicles:{
       marginLeft: '9%',
        marginTop: '10%'
    },
    Vehicletext: {
        color:'white',
        textDecoration: 'none',
        
    },
    cards: {
        backgroundColor: '#FF546D', 
        width: '90%', 
        marginTop: '1.5%',
        padding: '20px'
    }
}
const VehicleList = ({vehicleList, input}) => {
    
    return (
      <>
      <VehicleSec>
        <h2 style={styles.Vehicles}>Vehicles</h2>
      { vehicleList.filter((e)=>{
          if(input === ''){
              return e.name
          }else if(e.name.toLowerCase().includes(input.toLowerCase())){
                return e.name  
          }
      }).map((data,index) => {
          if (data) {
            return (
              <div key={index}>
                  <Card style={styles.cards}>
               <NavLink to="" style={styles.Vehicletext}> <h3>{data.name}</h3></NavLink>
               </Card>
          </div>	
             )	
           }
           return null;
      }) }
      </VehicleSec>
      </>
    );
  }
  
  export {VehicleList}