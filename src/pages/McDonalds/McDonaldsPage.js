import "./McDonaldsPage.scss";

import { Link } from 'react-router-dom';

import arrow from '../../assets/arrow.png'
import mcdonaldsArt from '../../assets/mcdonalds-art.jpg'
import cactusWhite from '../../assets/cactus-white.png'

function McDonaldsPage() {

    return (
    
        <section className='mcdonalds'>

            <div className='mcdonalds__header'>
                <Link to='../discover'>
                    <img className='mcdonalds__header--arrow' src={arrow}/>  
                </Link>              
                <h1 className='mcdonalds__header--text'>McDonalds</h1>
            </div>

            <div className='mcdonalds__body'>
                <img className='mcdonalds__art' src={mcdonaldsArt}/>

                <h2 className='mcdonalds__subheader'>Rewards</h2>

                <div class='mcdonalds__bar'>
                    <div class='mcdonalds__fill1'>
                        <div class='mcdonalds__fill-text'>900</div>
                    </div>
                </div>

                <div className='mcdonalds__redeem-container'>
                    <p className='mcdonalds__redeem-text'>Coffee or tea</p>
                    <div className='mcdonalds__points-button'>
                        <p className='mcdonalds__points-icon-text'>100</p>
                        <img className='mcdonalds__points-icon' src={cactusWhite}/>
                    </div>
                </div>

                <div className='mcdonalds__redeem-container'>
                    <p className='mcdonalds__redeem-text'>Jr Chicken</p>
                    <div className='mcdonalds__points-button'>
                        <p className='mcdonalds__points-icon-text'>200</p>
                        <img className='mcdonalds__points-icon' src={cactusWhite}/>
                    </div>
                </div>

                <div className='mcdonalds__redeem-container'>
                    <p className='mcdonalds__redeem-text'>McMuffin</p>
                    <div className='mcdonalds__points-button'>
                        <p className='mcdonalds__points-icon-text'>300</p>
                        <img className='mcdonalds__points-icon' src={cactusWhite}/>
                    </div>
                </div>

                <div className='mcdonalds__redeem-container'>
                    <p className='mcdonalds__redeem-text'>Big Mac</p>
                    <div className='mcdonalds__points-button'>
                        <p className='mcdonalds__points-icon-text'>400</p>
                        <img className='mcdonalds__points-icon' src={cactusWhite}/>
                    </div>
                </div>

                <div className='mcdonalds__redeem-container'>
                    <p className='mcdonalds__redeem-text'>Big Mac Value Meal</p>
                    <div className='mcdonalds__points-button'>
                        <p className='mcdonalds__points-icon-text'>500</p>
                        <img className='mcdonalds__points-icon' src={cactusWhite}/>
                    </div>
                </div>
            </div>

        </section>

    );
}
    
export default McDonaldsPage;