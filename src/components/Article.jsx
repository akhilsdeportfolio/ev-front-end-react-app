
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function()
{

     let {id} = useParams();
     let [newsArticle,setNewsArticle]=useState({});


     useEffect(async ()=>{
          let data=await axios.get(`http://localhost:2000/news/${id}/comments`);

          setNewsArticle(data.data.news);
     },[]);

     return(<>
          {JSON.stringify(newsArticle)};
     </>)


}