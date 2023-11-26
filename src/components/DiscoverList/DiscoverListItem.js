import React from 'react';
import { Link } from 'react-router-dom';

import './DiscoverList.scss';

import logo1 from '../../assets/starbucks.png'
import logo2 from '../../assets/lululemon.png'
import logo3 from '../../assets/mcdonalds.png'
import logo4 from '../../assets/aritzia.png'
import logo5 from '../../assets/indigo.jpg'
import logo6 from '../../assets/sephora.png'
import logo7 from '../../assets/chipotle.png'

function DiscoverListItem() {

    return (

        <section>

            <Link to='../discover/starbucks'>  
                <div className='discover-list__container'>
                    <img className='discover-list__logo' src={logo1}/>
                    <div className='discover-list__text-container'>
                        <p className='discover-list__text'>Starbucks</p>
                    </div>
                </div>
            </Link>

            <Link to='../discover/lululemon'> 
                <div className='discover-list__container'>
                    <img className='discover-list__logo' src={logo2}/>
                    <div className='discover-list__text-container'>
                        <p className='discover-list__text'>Lululemon</p>
                    </div>
                </div>
            </Link>

            <Link to='../discover/mcdonalds'> 
                <div className='discover-list__container'>
                    <img className='discover-list__logo' src={logo3}/>
                    <div className='discover-list__text-container'>
                        <p className='discover-list__text'>McDonalds</p>
                    </div>
                </div>
            </Link>

            <Link to='../discover/aritzia'> 
                <div className='discover-list__container'>
                    <img className='discover-list__logo' src={logo4}/>
                    <div className='discover-list__text-container'>
                        <p className='discover-list__text'>Aritzia</p>
                    </div>
                </div>
            </Link>

            <Link to='../discover/chipotle'> 
                <div className='discover-list__container'>
                    <img className='discover-list__logo' src={logo7}/>
                    <div className='discover-list__text-container'>
                        <p className='discover-list__text'>Chipotle</p>
                    </div>
                </div>
            </Link>

            <Link to='../discover/sephora'> 
                <div className='discover-list__container'>
                    <img className='discover-list__logo' src={logo6}/>
                    <div className='discover-list__text-container'>
                        <p className='discover-list__text'>Sephora</p>
                    </div>
                </div>
            </Link>

            <Link to='../discover/indigo'> 
                <div className='discover-list__container'>
                    <img className='discover-list__logo' src={logo5}/>
                    <div className='discover-list__text-container'>
                        <p className='discover-list__text'>Indigo</p>
                    </div>
                </div>
            </Link>

        </section>
    );
};

export default DiscoverListItem;