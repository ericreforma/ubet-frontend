import React, { useState } from 'react';
import { footerNavigation } from '../../data/navigation';
import './style.scss';

const FooterNav = () => {
    const [ page, setPage ] = useState(0);

    return (
        <div className='footerNav'>
            <ul className='footerNavMenu'>
                { footerNavigation.map((f, index) => 
                    <li 
                        onClick={() => {
                            setPage(index);
                        }}
                        key={`${index}_footernav`}
                        className={`${page === index ? 'active' : ''}`}
                    >
                        <img src={page === index ? f.icon_active : f.icon} />
                        <span>{f.title}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}
    

export default FooterNav;