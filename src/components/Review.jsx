
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { AccessAlarm, ThumbUp ,ReplyAll,Share } from '@mui/icons-material';


const styles = {
     backgroundColor:'secondary'
}

const Item = styled(Paper)(({ theme }) => ({
     ...theme.typography.body2,
     padding: theme.spacing(2),
     textAlign: 'center',
     color: theme.palette.text.secondary,
}));

export default function({name,email,star,text,date})
{
     console.log(name,email,star,text,date);


     const [value, setValue] = useState(4.2)
     const [liked,setLiked]=useState(false);
     
     const handleLike = (id)=>{
          console.log('like clicked',id);
          setLiked(!liked);
     };

     const handleReply = (id)=>{
          console.log("Reply clicked");
     }

     const handleShare = (id)=>{
          console.log("Share clicked");
     }

     return(<> 

<Card sx={{ display: 'flex',padding:0,margin:5,borderRadius:2,border:"2px solid",borderColor:'whitesmoke',backgroundColor:'white','&:hover': {
            backgroundColor: '#FFB3D4'
          }}} raised={false} >
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h1" fontSize={25} fontFamily="Montserrat" fontWeight={500}>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" fontSize={21} fontFamily="Montserrat" fontWeight={300}> 
            {date}
          </Typography>

          <Rating
               
               size='laorge'
               color="#FFC700"
               readOnly={true}
               name="simple-controlled"
               value={star}
               onChange={(event, newValue) => {
               setValue(newValue);
          }}
               />
          <Typography variant="body1" color="text.primary" component="div" fontSize={21} fontFamily="Montserrat" fontWeight={400} > 
          {text}
          </Typography>     
          <br/>
          <Stack direction="row" spacing={2}>
               <Stack style={{alignItems:'center'}} direction="row" spacing={2}>
                    
                    {liked && true ? <ThumbUp onClick={()=>{
                         handleLike('123');
                    }} color='black' /> : <ThumbUp onClick={()=>{
                         handleLike('123');
                    }} color='primary'/>}
                    
                    <p>0 Likes</p>
               </Stack>

               <Stack style={{alignItems:'center'}} direction="row" spacing={2}>
                    <ReplyAll/>
                    <p>Reply</p>
               </Stack>

               <Stack style={{alignItems:'center'}} direction="row" spacing={2}>
                    <Share/>
                    <p>Share</p>
               </Stack>
          </Stack>
        </CardContent>
        
      </Box>
      
    </Card>
          
     </>)
}