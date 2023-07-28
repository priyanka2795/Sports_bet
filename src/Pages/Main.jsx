import React from 'react';
import Account from './Account';
import Bet from './Bet';
import BetTypes from './BetTypes';
import BonusPromotion from './BonusPromotion';
import Casino from './Casino';
import Faq from './Faq';
import Features from './Features';
import Games from './Games';
import GeneralInfo from './GeneralInfo';
import Hero from './Hero';
import Introduction from './Introduction';
import PlayBet from './PlayBet';
import Sports from './Sports';
import WinSection from './WinSection';
import ScrollButton from '../Common/ScrollButton';
const Main = () => {
    return(
        <>
        <Hero/>
        <Introduction/>
        {/* <PlayBet/> */}
        <Account/>
        <BonusPromotion/>
        <Bet/>
        <BetTypes/>
        <Sports/>
        <Casino/>
        <Games/>
        <WinSection/>
        {/* <Features/> */}
        <GeneralInfo/>
        <Faq/>
        <ScrollButton/>
        </>
    )
}



export default Main;