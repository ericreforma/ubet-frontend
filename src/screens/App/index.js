import React from 'react';
import Header from '../../components/Header';
import FooterNav from '../../components/FooterNav';
import Home from '../Home';
import './style.scss';

const App = () => 
    <div className='app'>
        <div className='app_container'>
            <Header />
            <Home />
        </div>
        <FooterNav />
    </div>

export default App;