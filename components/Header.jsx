import React from 'react'
import Image from 'next/image';

function Header() {
  return (
    <div className='header'>

        <div className="header__left">

            <div className="header__title">
                <h1>Learn Quran Everyday.</h1>
                <h1>Add Quran In You Daily</h1>
                <h1> Routine.</h1>
            </div>

            <div className="header__text">
                <p>
                    The Quran is the central religious text of Islam. Muslims believe the Quran is the book of divine guidance and direction for mankind.
                </p>
            </div>

            <div className="header__button">

                <div className="header__button--learn">

                    <button className='btn btn--primary'>Read Quran</button>
                </div>

                <div className="header__button--listen">
                    <button className='btn'>Listen Quran </button>
                </div>
            </div>

            
        </div>

        <div className="header__right">

            <div className="header__right--image">

                <img src="/images/quran.png"></img>
            </div>
        </div>
    </div>
  )
}

export default Header