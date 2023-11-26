import "./ChipotlePage.scss";

import { Link } from 'react-router-dom';

import arrow from '../../assets/arrow.png'
import chipotleArt from '../../assets/chipotle-art.jpg'
import cactusWhite from '../../assets/cactus-white.png'

function ChipotlePage() {

    return (
    
        <section className='chipotle'>

            <div className='chipotle__header'>
                <Link to='../discover'>
                    <img className='chipotle__header--arrow' src={arrow}/>  
                </Link>              
                <h1 className='chipotle__header--text'>Indigo</h1>
            </div>

            <div className='chipotle__body'>
                <img className='chipotle__art' src={chipotleArt}/>

                <h2 className='chipotle__subheader'>Rewards</h2>

                <div class='chipotle__bar'>
                    <div class='chipotle__fill1'>
                        <div class='chipotle__fill-text--zero'>0</div>
                    </div>
                </div>

                <p className='chipotle__subheader--text'>Make your first purchase to start collecting rewards!</p>

                <div className='chipotle__redeem-container'>
                    <p className='chipotle__redeem-text'>Guacamole</p>
                    <div className='chipotle__points-button'>
                        <p className='chipotle__points-icon-text'>100</p>
                        <img className='chipotle__points-icon' src={cactusWhite}/>
                    </div>
                </div>

                <div className='chipotle__redeem-container'>
                    <p className='chipotle__redeem-text'>Fountain drink</p>
                    <div className='chipotle__points-button'>
                        <p className='chipotle__points-icon-text'>200</p>
                        <img className='chipotle__points-icon' src={cactusWhite}/>
                    </div>
                </div>

                <div className='chipotle__redeem-container'>
                    <p className='chipotle__redeem-text'>Burrito</p>
                    <div className='chipotle__points-button'>
                        <p className='chipotle__points-icon-text'>300</p>
                        <img className='chipotle__points-icon' src={cactusWhite}/>
                    </div>
                </div>
            </div>

        </section>

    );
}
    
export default ChipotlePage;