
import { Card } from "@mui/material"
import { useState, useEffect } from "react"
import Grid from '@mui/material/Grid';
import Carousel from "react-elastic-carousel";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


const styles = {
    content: {
        marginLeft: '3%',
    },
    head:{
        fontWeight: '600',
        marginLeft: '5%',
        marginBottom: '3%'
    },
    autodata: {
        textDecoration: 'none',
    },
    cards: {
        backgroundColor: '#FFFF',
        width: '450px',
        marginTop: '2%',
        height: '500px',
        marginLeft: '3%',
        textAlign: 'center',
        boxShadow: '0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)',

    },
    image: {
        width: '90%',
        height: '60%',
        padding: '20px',
    },
}

const Hr = styled.hr`
    width: 79%;
    margin-top: 7%;
    margin-left: 13%;
    border: 2px solid #1D5AB4;
    margin-bottom: 100px;
`

const Line = styled.hr`
    width: 15px;
    height: 65px;
    background: #FF546D;
    margin-left: 2%;
    margin-bottom: -6%;
`

const breakPoints = [{ width: 1, itemsToShow: 2 }];

function Vehicles() {
    const [vehicleArticles, setVehicleArticles] = useState([])

    useEffect(() => {
        getVehicle()
    }, [])

    const getVehicle = async () => {
        let res = await fetch('http://localhost:2000/vehicles')
        let vehiclesData = await res.json()
        console.log(vehiclesData.length);
        setVehicleArticles(vehiclesData)
    }



    /* return (
        <div>
                {newsArticles.map((e)=>{
                    console.log(e)
                   let url = String(e.images).split("\\")
                   let path = url[url.length-1]
                   console.log(path)
                   return (
                       <>
                       <img src={`http://localhost:2000/static/${path}`} alt="masai" />
                       </>
                   )
            })}
        </div>
    ) */

    return (
        <>
            <div style={styles.content}>
                <Line />
                <h1 style={styles.head}>Vehicles</h1>
                <Grid container direction='row' justify='center' alignItems='center' >
                    <Carousel breakPoints={breakPoints} >
                        {vehicleArticles.map((e, index) => {
                            return (
                                <div key={index} >
                                    <Grid container>
                                        <NavLink to='' style={styles.autodata}>
                                            <Card style={styles.cards}>
                                                <img style={styles.image} src="https://media.zigcdn.com/media/content/2021/Jan/honda-cb150-2021-1_1_640x480.jpg" alt="cbr" />
                                                <h3>{e.name}</h3>
                                                <h3>Rs. {e.price}</h3>
                                            </Card>
                                        </NavLink>
                                    </Grid>
                                </div>
                            )
                        })}
                    </Carousel>
                </Grid>
            </div>
            <Hr />
        </>
    )
}

export { Vehicles }