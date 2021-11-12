import { Button, CardContent, Typography,Card,Stack,Modal,Box} from "@mui/material";
import { Star } from "@mui/icons-material";
import ReviewCard from "./ReviewCard";
import {useState } from 'react';
import RatingScreen from "./RatingScreen";

const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width:'80%',
     height:'80%',
     bgcolor: 'background.paper',
     border: '2px solid #000',
     boxShadow: 24,
     p: 4,
   };
export default function({reviews,avgRating,totalReviews,title})
{

     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     let handlereview=(e)=>{

     }

     return(<>
                    <Modal
                         open={open}
                         onClose={handleClose}
                         aria-labelledby="modal-modal-title"
                         aria-describedby="modal-modal-description"
                         >
                              <Box sx={style}>
                                   <RatingScreen/>
                              </Box>
                    </Modal>
          <Card style={{border:'1px solid gray'}}>
               <CardContent>
                    <Typography variant="h4">{title}</Typography>
                    <br/>
                    <Stack direction="row" spacing={2} style={{display:'flex',textAlign:'center'}}>
                         <Star style={{fontSize:'40px',color:'yellow'}}/>
                         <Typography variant="h3">{avgRating}</Typography>
                         <Typography variant="body2" sx={{marginTop:'20px'}}>Based on {totalReviews} Reviews </Typography>
                         <div style={{flexGrow:1}}/>
                         <Button onClick={handleOpen} size="large" variant="outlined" sx={{padding:2}}>Write a Review</Button>

                         


                    </Stack>
                    <br/>
                    <Stack direction="row" spacing={10}>
                              {reviews.map((review)=>{
                                   return <ReviewCard name={review.name} rating={review.rating} comment={review.comment} date={review.date} />
                              })}
                    </Stack>

               </CardContent>
          </Card>
     </>)

}