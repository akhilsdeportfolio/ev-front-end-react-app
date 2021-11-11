
import { useState, useEffect } from "react"

function News(){
    const [newsArticles, setNewsArticles] = useState([])

    useEffect(() => {
        getNews()
    }, [])

    const getNews = async() => {
      let res = await fetch('http://localhost:2000/news')
        let newsData =  await res.json()
        setNewsArticles(newsData)
    }
    

    return (
        <div>
                {newsArticles.map((e)=>{
                    console.log(e)
                   let url = String(e.images).split("\\")
                   let path = url[url.length-2]
                   console.log(path)
                   return (
                       <>
                       <img src={`http://localhost:2000/static/${path}`} alt="masai" />
                       </>
                   )
            })}
        </div>
    )
}

export {News}