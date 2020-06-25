import React from 'react';
import './style.scss';
import { menu, submenu } from '../../data/navigation';
import bg from '../../assets/img/_background/home_bg.png';
import navBtn from '../../assets/img/_button/nav-btn.svg';
import banner1 from '../../assets/img/_banner/banner.png';

const Header = () => {
    return (
        <>
            <div className='header' style={{ backgroundImage: `url(${bg})` }}>
                <div className='banner_slider'>
                    <img src={banner1} className='banner' alt='banner'/>
                </div>
                <p className='bannerText'>测试测试测试 测试测试 测试测试 测试测试 测试测试 测试</p>
                <div className='accountSummary'>
                    <div className='username'>u2testraki</div>
                    <div className='balance'>
                        测试: <span>¥ <span class='amount'>44.0</span></span>
                    </div>
                </div>
                <div className='navMain'>
                    <ul className='mainmenu'>
                        { menu.map((m, index) =>
                            <li className={`nav_${m.name}`} key={`menu_${index}`}>
                                <img src={m.icon} alt={m.name}/>
                                <span>{m.title}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className='navSub'>
                <div className='activeButton'>
                    <img src={navBtn} alt='submenu_button' />
                </div>
                <div className='submenu'>
                    { submenu.map((s, index) =>
                        <li className={`subnav_${s.name} ${index === 0 ? 'active' : ''}`} key={`submenu_${index}`}>
                            {s.title}
                        </li>
                    )}
                </div>
            </div>
        </>
    )
}
    

export default Header;
