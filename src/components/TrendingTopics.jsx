import forward from './image/forward.jpeg'
import NewsImage from './image/newsimage.jpeg'
import { Card } from "@mui/material"
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';

const styles = {
    /*  cont: {
         width: "988px",
         height: "293px",
         display: "flex",
         boxShadow: "1px 1px 6px #aaaaaa",
     }, */
     head: {
        fontWeight: '600',
        marginLeft: '8%',
        marginTop: '-4%',
        marginBottom: '4%'
    },
    cards: {
        backgroundColor: '#FFFF',
        width: '80%',
        marginTop: '2%',
        height: '270px',
        marginLeft: '10%',
        textAlign: 'center',
        boxShadow: '0 50px 20px rgba(0,0,0,.12), 0 14px 8px rgba(0,0,0,.06)',
    },
    text: {
        textAlign: 'left',
        marginTop: '15px',
    },
    date: {
        textAlign: 'left'
    },
    matter: {
        textAlign: 'left',
        lineHeight: '30px'
    },
    autodata: {
        textDecoration: 'none',
    },
    image: {
        width: '20%',
        height: '100%',
        padding: '20px',
        marginTop: '-20px',
        marginLeft: '-15px'
    },
    likes: {
        textAlign: 'left',
        marginTop: '7%',
    },
    comments: {
        marginLeft: '20px'
    },

    icon: {
        marginTop: '-150px',
        marginLeft: '95%',
        width: '50px',
        height: '50px'
    }
}

const Line = styled.hr`
    width: 15px;
    height: 65px;
    background: #FF546D;
    margin-left: 5%;
    margin-bottom: -4%;
`



const Trending = () => {
    const [newsArticles, setNewsArticles] = useState([])
    const [comments, setComments] = useState(0)

    useEffect(() => {
        getNews()
    }, [])

    const getNews = async () => {
        let res = await fetch('http://localhost:2000/news')
        let newsData = await res.json()
        setNewsArticles(newsData)
    }

    

    return (
        <>
             <Line />
                <h1 style={styles.head}>Trending Topics</h1>
            <div /* style={styles.cont} */>
                {newsArticles.slice(5).map((e, index) => {
                     let url = String(e.images).split("\\")
                     let path = url[url.length-1]
                     path = path
                    return (
                        <div key={index} >
                            <NavLink to={`/News/${e._id}`} style={styles.autodata}>
                                <Card sx={{ display: 'flex' }} style={styles.cards}>

                                    <img style={styles.image} src={path} alt={NewsImage} />
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <h4 style={styles.text}>{e.title}</h4>
                                        <h5 style={styles.date}>12/08/2010</h5>
                                        <p style={styles.matter}>{ e.text.substring(0,80) } ...</p>
                                        <h5 style={styles.likes}>{e.likes? e.likes : 0} Likes<span style={styles.comments}>{comments} Comments</span><span><img style={styles.icon} src={forward} alt={forward} /></span></h5>
                                    </CardContent>
                                </Card>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Trending
