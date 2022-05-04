import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { Container, Typography } from '@material-ui/core'
import Carousel from '../Carousel'




function Banner() {
    const useStyles = makeStyles(()=>({
        banner:{
            // backgroundImage: 'url(./banner.jpg)',
            background: '#001E3C'
        },
        bannerContent:{
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 25,
            justifyContent: 'space-around'
        },
        tagline:{
            display:'flex',
            height: '40%',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }
    
    }))
    const classes = useStyles()
  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography variant='h2' style={{fontWeight: 'bold', marginBottom: 15, fontFamily: 'Montserrat'}}>
                    React Crypto
                </Typography>
                <Typography variant='subtitle2' style={{color: 'darkgrey',textTransform:'capitalize', fontFamily: 'Montserrat'}}>

                   This is a React Cryptocurrency Application
                </Typography>

            </div>
            <Carousel/>

        </Container>

    </div>
  )
}

export default Banner