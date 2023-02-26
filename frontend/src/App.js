import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home';
import { useState } from 'react';
import Checkout from './components/checkout';

function App() {
  const [basket ,setbasket] = useState([]);
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home basket={basket} setbasket={setbasket}/>}/>
    <Route path='/checkout' element={<Checkout  basket={basket} setbasket={setbasket}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
