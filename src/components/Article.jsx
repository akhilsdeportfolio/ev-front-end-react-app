
import { Typography,Box, Input, TextField,Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import Review from "./Review";


let initData ={
     name:'',
     email:'',
     text:'',
     news_id:''
}


export default function()
{

     const [comment,setComment]=useState(initData);

     let {id} = useParams();
     let [newsArticle,setNewsArticle]=useState({
          "_id": "618264d6a007774ffe15de73",
          "title": "Scott Morrison denies attacking electric vehicles in 2019 as he unveils new Coalition policy",
          "text": "Scott Morrison has deflected accusations of hypocrisy and denied he attacked electric vehicles before the 2019 federal election when he said Labor would “end the weekend”, as he unveiled the government’s new clean car policy.\n\nThe government on Tuesday ruled out subsidising the expansion of electric and hybrid vehicles through rebates or tax breaks, and said it expected only 30% of new sales to be EVs by 2030 – a date by which a growing number of countries plan to ban the sale of new petrol and diesel cars.\n\nThe “future fuels and vehicles strategy” instead includes $178m of new funding, mostly for new EV and hydrogen refuelling infrastructure and to help businesses set up charging stations for fleets. It said the government would “co-invest with industry” to install an estimated 50,000 smart chargers in homes.\n\nUnder questioning at a press conference in Melbourne, Morrison denied he had criticised EV technology before the last election.",
          "images": [
          "https://img.etimg.com/thumb/msid-87621257,width-300,imgsize-29738,,resizemode-4,quality-100/electric-car-.jpg"
          ],
          "user_id": "61816aaa4310d1c110fec10f",
          "createdAt": "2021-11-03T10:30:46.696Z",
          "updatedAt": "2021-11-03T10:30:46.696Z"
          });


      let [comments,setComments]=useState([]);

      let handleChange=(e)=>{
          let{value,name}=e.target;
          comment[name]=value;          
     }

     let handleSubmit=async (e)=>{
          
          comment["news_id"]=id;
          axios.post("http://localhost:2000/comments/",comment).then(async (resp)=>{console.log(resp);alert("success");
          let data=await axios.get(`http://localhost:2000/news/${id}/comments`);
          console.log(data.data.news);
          setNewsArticle(data.data.news);
          setComments(data.data.comments)

          let k={
               name:'',
               email:'',
               text:'',
               news_id:''
          }

          setComment(k);
          document.getElementById("name").value="";
          document.getElementById("email").value="";
          document.getElementById("text").value="";


     }).catch((e)=>
          {
               console.log(e)
               alert("something wrong occured");
               

          

          });
          //console.log(resp);

     }


     useEffect(async ()=>{
          let data=await axios.get(`http://localhost:2000/news/${id}/comments`);
          console.log(data.data.news);
          setNewsArticle(data.data.news);
          setComments(data.data.comments)
          
          
     },[]);

     return(<>
          
          <Navbar/>


          <Box style={{margin:'auto',width:'80%',padding:'50px'}}>


          <Typography variant="h3"  style={{fontFamily:"rozha one",textAlign:"start"}}>{newsArticle.title} </Typography>
          <Typography variant="h6"  style={{fontFamily:"Montserrat",textAlign:"start",fontWeight:'700'}}>{newsArticle.createdAt}</Typography>
          <Typography variant="body2"  style={{fontFamily:"Montserrat",textAlign:"start",fontWeight:'400'}}>{newsArticle.text}</Typography>
          <Typography variant="body2"  style={{fontFamily:"Montserrat",textAlign:"start",fontWeight:'400'}}>{newsArticle.text}</Typography>
          <Typography variant="body2"  style={{fontFamily:"Montserrat",textAlign:"start",fontWeight:'400'}}>{newsArticle.text}</Typography>

          <div style={{textAlign:'center',padding:'20px'}}>
               

                    { newsArticle.images.map((src)=>{
                         return <img  src={src}/>
                    })}  
                    

          </div>


          
          <Typography variant="body2"  style={{fontFamily:"Montserrat",textAlign:"start",fontWeight:'400'}}>{newsArticle.text}</Typography>
          <Typography variant="body2"  style={{fontFamily:"Montserrat",textAlign:"start",fontWeight:'400'}}>{newsArticle.text}</Typography>
          <Typography variant="body2"  style={{fontFamily:"Montserrat",textAlign:"start",fontWeight:'400'}}>{newsArticle.text}</Typography>



          <Typography variant="h6"  style={{fontFamily:"Montserrat",textAlign:"center",fontWeight:'700',marginTop:'100px'}}>Leave a Comment</Typography>
          <div style={{textAlign:'start',display:'flex',flexDirection:'column',gap:20,width:'80%',margin:'auto'}}>
          <Typography varaint="body2"  style={{fontWeight:500}}>Enter Name</Typography>          
          <TextField label="Name" name="name" variant="filled" color="primary" focused onChange={handleChange} id="name"/>
          <Typography varaint="body2" style={{fontWeight:500}} >Enter Email</Typography>          
          <TextField label="email" name="email" variant="filled" color="primary" focused onChange={handleChange}  id="email"/>
          <Typography varaint="body2" style={{fontWeight:500}} >Enter Comment</Typography>          
          <TextField label="Comment" name="text" variant="filled" color="primary" focused  style={{height:'150px'}} onChange={handleChange} id="text"/>


          <div style={{textAlign:'center',gap:20,width:'80%',margin:'auto'}}>          
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
               
          </div>     



          <Typography variant="h3"  style={{fontFamily:"rozha one",textAlign:"start",textDecoration:'underline'}}>Comments </Typography>

          {
               comments.map((comment)=>{
                    return <Review name={comment.name} email={comment.email} star={5} text={comment.comment} date={comment.date}/>
               })
          }
          </Box>



     
     </>)


}