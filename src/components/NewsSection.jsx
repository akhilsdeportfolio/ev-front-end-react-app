import forward from './image/forward.jpeg'
import NewsImage from './image/newsimage.jpeg'
import { Card } from "@mui/material"
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"
import CardContent from '@mui/material/CardContent';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import styled from 'styled-components';

const styles = {
    /*  cont: {
         width: "988px",
         height: "293px",
         display: "flex",
         boxShadow: "1px 1px 6px #aaaaaa",
     }, */
     head:{
        textAlign: 'center'
     },
    cards: {
        backgroundColor: '#FFFF',
        width: '80%',
        marginTop: '2%',
        height: '270px',
        marginLeft: '3%',
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
        marginTop: '10%',
    },
    comments: {
        marginLeft: '20px'
    },

    icon: {
        marginTop: '-150px',
        marginLeft: '95%',
        width: '50px',
        height: '50px'
    },
    mLeft: {
        marginLeft: '85%',
        marginTop: '-217%'
    },
    trendingHeading: {
        height: "37px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "25px",
        lineHeight: "37px",
        color: "#000000",
        margin: "0px 10px",
    },
    all: {
        height: "24px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "15px",
        lineHeight: "24px",
        color: "#000000",
        margin: "10px 10px",
    },
    battery: {
        height: "24px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontSize: "17px",
        fontWeight: "normal",
        lineHeight: "24px",
        color: "#000000",
        margin: "10px 10px",
    },
    archives: {
        height: "37px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "25px",
        lineHeight: "24px",
        color: "#000000",
        margin: "0px 10px",
        marginTop: "73px"
    }
}

const Hr = styled.hr`
    width: 13%;
    margin-top: 1%;
    margin-left: 43.5%;
    border: 2px solid #FF546D;
    margin-bottom: 30px;
`
const Bottom = styled.div`
    margin-bottom: 2700px;
`


function NewsSection(){

    const [newsArticles, setNewsArticles] = useState([])
    const [likes, setLikes] = useState(0)
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
        <Navbar />
            <h1 style={styles.head}>NEWS</h1>
            <Hr />
            <div /* style={styles.cont} */>
                {newsArticles.map((e, index) => {
                     let url = String(e.images).split("\\")
                     let path = url[url.length-1]
                     path = path;
                    return (
                        <div key={index} >
                            <NavLink to={`/News/${e._id}`} style={styles.autodata}>
                                <Card sx={{ display: 'flex' }} style={styles.cards}>

                                    <img style={styles.image} src={path} alt={NewsImage} />
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <h4 style={styles.text}>{e.title}</h4>
                                        <h5 style={styles.date}>12/08/2010</h5>
                                        <p style={styles.matter}>{ e.text.substring(0,80) } ...</p>
                                        <h5 style={styles.likes}>{likes} Likes<span style={styles.comments}>{comments} Comments</span><span><img style={styles.icon} src={forward} alt={forward} /></span></h5>
                
                                    </CardContent>
                                </Card>
                            </NavLink>
                        </div>
                    )
                })}
                
                <div style={styles.mLeft}>
                    <h2 style={styles.trendingHeading}>Trending</h2>
                    <div style={styles.all}>All</div>
                    <div style={styles.battery}>Battery Swapping</div>
                    <div style={styles.battery}>Charging Stations</div>
                    <div style={styles.battery}>Government EV Policies</div>
                    <div style={styles.archives}>Archives</div>
                    <div style={styles.all}>August 2021</div>
                    <div style={styles.battery}>July 2021</div>
                    <div style={styles.battery}>June 2021</div>
                    <div style={styles.battery}>April 2021</div>
                    <div style={styles.battery}>March 2021</div>
                </div>
            </div>
            <Bottom />
            <Footer />
        </>
    )
}
 
export { NewsSection }