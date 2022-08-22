import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


/* Paginas */
import Home from './Inicio/Home';

function App(){ 
    return <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>;
}
export default App
