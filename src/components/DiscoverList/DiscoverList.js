import React from 'react';
import { Link } from 'react-router-dom';

import './DiscoverList.scss';
import DiscoverListItem from './DiscoverListItem'

import logo1 from '../../assets/starbucks.png'
import logo2 from '../../assets/lululemon.png'
import logo3 from '../../assets/mcdonalds.png'
import logo4 from '../../assets/aritzia.png'
import logo5 from '../../assets/indigo.jpg'
import logo6 from '../../assets/sephora.png'
import logo7 from '../../assets/sportchek.png'

function DiscoverList() {

    return (

        <section className='discover-list'>
 
            <DiscoverListItem />

        </section>
    );
};

export default DiscoverList;