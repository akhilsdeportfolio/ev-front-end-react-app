import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import { Rating } from '@mui/material';
import {Link,useParams} from 'react-router-dom';


export default function({name,date,rating,comment})
{
          let {id} = useParams();
          return(<>
                    
                    <Card sx={{ minWidth:'200px' ,border:'1px solid whitesmoke'}}>
                    <CardContent>
                         <Stack spacing={2}>
                              <Typography variant="h5">{name}</Typography>
                              <Typography variant="h6">{date}</Typography>
                              <Rating value={rating} readOnly={true}/>
                              <Typography variant="body2">{comment}</Typography>
                              <Typography variant="body2"><Link to={`/Reviews/${id}`}>Read More</Link></Typography>
                         </Stack>
                    </CardContent>
                    </Card>  
                    
          </>)

}