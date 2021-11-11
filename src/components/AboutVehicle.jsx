import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const styles2={
     textAlign:'start',width:'100%',fontFamily:'Montserrat'
}
export default function ({title,about})
{
     return(<>

<Card sx={{ minWidth: 275,margin:'10px',border:'1px solid gray' }}>
      <CardContent>
        
        <Typography variant="h5" component="div" style={styles2} sx={{fontWeight:'500'}}>
          {title}
        </Typography>
     
        <Typography variant="body2" style={styles2} sx={{fontWeight:'400'}}>
          
        <br />
        {about}
        </Typography>
      </CardContent>
    
    </Card>
          

     </>)
}