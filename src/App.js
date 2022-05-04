
import './App.css';
import {makeStyles} from '@material-ui/core/styles'
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';

function App() {
  const useStyles = makeStyles(()=>({
    App:{
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh'
    }
  }))
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>} exact/>
          <Route path='/coins/:id' element={<Coinpage/>}/>
        
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
