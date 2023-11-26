import './RewardsList.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import logo1 from '../../assets/starbucks.png'
import logo2 from '../../assets/lululemon.png'
import logo3 from '../../assets/mcdonalds.png'
import logo4 from '../../assets/aritzia.png'

function RewardsList() {

    return (

        <section className='rewards-list'>

            <Link to='../discover/starbucks'>  
                <div className='rewards-list__container'>
                    <img className='rewards-list__logo' src={logo1}/>
                    <div className='rewards-list__text-container'>
                        <p className='rewards-list__text'>Starbucks</p>
                        <div class="rewards-list__bar">
                            <div class="rewards-list__fill1">
                                <div class='rewards-list__fill-text'>600</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link> 

            <Link to='../discover/lululemon'> 
                <div className='rewards-list__container'>
                    <img className='rewards-list__logo' src={logo2}/>
                    <div className='rewards-list__text-container'>
                        <p className='rewards-list__text'>Lululemon</p>
                        <div class="rewards-list__bar">
                            <div class="rewards-list__fill2">
                                <div class='rewards-list__fill-text'>450</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='../discover/mcdonalds'> 
                <div className='rewards-list__container'>
                    <img className='rewards-list__logo' src={logo3}/>
                    <div className='rewards-list__text-container'>
                        <p className='rewards-list__text'>McDonalds</p>
                        <div class="rewards-list__bar">
                            <div class="rewards-list__fill3">
                                <div class='rewards-list__fill-text'>900</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='../discover/aritzia'> 
                <div className='rewards-list__container'>
                    <img className='rewards-list__logo' src={logo4}/>
                    <div className='rewards-list__text-container'>
                        <p className='rewards-list__text'>Aritzia</p>
                        <div class="rewards-list__bar">
                            <div class="rewards-list__fill4">
                                <div class='rewards-list__fill-text'>200</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

        </section>
    );
};

export default RewardsList;