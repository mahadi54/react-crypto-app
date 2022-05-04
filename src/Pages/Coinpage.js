import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../config/Api'
import { CryptoState } from '../CryptoContext'
import CoinInfo from '../components/CoinInfo'
import {Typography, LinearProgress, makeStyles} from '@material-ui/core'

function Coinpage() {
  const {id }= useParams()
  const {currency, symbol} = CryptoState()
  const [coin, setCoin] = useState()
  const fetchCoin = ()=>{
    fetch(SingleCoin(id))
    .then(res => res.json())
    .then(data => setCoin(data))
  }
  useEffect(()=>{
    fetchCoin()

  }, [])
  console.log(coin)
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }));
  const classes = useStyles();
  if(!coin) return <LinearProgress style={{backGroundColor: 'gold'}} />
 


  const numberWithCommas = (x)=> {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
      <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {coin?.description.en}
        </Typography>
        <div className={classes.marketData}>
        <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>Rank:</Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat",}}>
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>Current Price:</Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{fontFamily: "Montserrat",}}>
              {symbol}{" "}
              {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat",}}>
              {symbol}{" "}
              {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))}
              M
            </Typography>
          </span>

        </div>
      </div>
      {/* <CoinInfo coin={coin} /> */}

    </div>
  )
}

export default Coinpage