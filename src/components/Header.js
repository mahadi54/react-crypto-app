import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {useNavigate} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@material-ui/core';
import {AppBar, Container, Toolbar,Select, MenuItem, Typography} from '@material-ui/core'
import { CryptoState } from '../CryptoContext';

function Header() {
    const useStyles = makeStyles(()=>({
        title:{
            flex:1,
            color:'gold',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            cursor: 'pointer'

        }
    }))
    const classes = useStyles();
    const navigate = useNavigate(); 
    
const darkTheme = createTheme({
    palette: {
     primary:{
         main: '#fff',
     },
     type: 'dark',
    },
  });

  const {currency, setCurrency} = CryptoState()
  console.log(currency)
  return (
      <ThemeProvider theme={darkTheme}>
          <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography onClick={()=> navigate('/')} className={classes.title}>React-Crypto</Typography>
                    <Select value={currency} onChange={(e)=> setCurrency(e.target.value)} variant='outlined' style={{width: 100, height:40, marginRight: 15}}>
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'BDT'}>BDT</MenuItem>
                    </Select>

                </Toolbar>
            </Container>

    </AppBar>

      </ThemeProvider>
    
  )
}

export default Header