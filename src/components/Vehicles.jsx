
import { Card } from "@mui/material"
import { useState, useEffect } from "react"
import Grid from '@mui/material/Grid';
import Carousel from "react-elastic-carousel";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import './arrow.css'

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
        height: '470px',
        marginLeft: '3%',
        textAlign: 'center',
        boxShadow: '0 50px 20px rgba(0,0,0,.12), 0 14px 8px rgba(0,0,0,.06)',
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
        setVehicleArticles(vehiclesData)
    }

     return (
        <>
            <div style={styles.content}>
                <Line />
                <h1 style={styles.head}>Vehicles</h1>
                <Grid container direction='row' justify='center' alignItems='center' >
                    <Carousel breakPoints={breakPoints} >
                        {vehicleArticles.map((e, index) => {
                             let url = String(e.images).split("\\")
                             let path = url[url.length-1]
                             path = path.split(",")[0]
                            return (
                                <div key={index} >
                                    <Grid container>
                                        <NavLink to={`/Vehicles/:${e.name}`} style={styles.autodata}>
                                            <Card style={styles.cards}>
                                                <img style={styles.image} src={path} alt={path} />
                                                <h3>{e.name}</h3>
                                                <h3>Rs. {e.price}</h3>
                                                <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
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