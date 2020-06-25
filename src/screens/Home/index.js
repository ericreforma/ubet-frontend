import React from 'react';
import './style.scss';
import { submenu } from '../../data/navigation';
import { homelist } from '../../data/homelist';

const Home = () => 
    <div className='home'>
        <div className='content'>
            { homelist.map((h, index) =>
                <div className={`home_list ${h.name}_home_list`}>
                    <object data={`${process.env.PUBLIC_URL}/img/${h.bg}.svg`} type="image/svg+xml">
                    </object>
                </div>
            )}
        </div>
    </div>

export default Home;