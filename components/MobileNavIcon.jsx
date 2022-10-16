import React, {useState} from 'react';

import Link from 'next/link'

function MobileNavIcon({navOpen, setNavOpen}) {


    const handleNavClick = () => {
        setNavOpen((prev) => !prev);
    }


    return (
        <div>
            <div className="mobile__nav--icon" onClick={handleNavClick}>

                
                <div className='navigation__icon--button'>
                    <span className={navOpen ? 'navigation__icon open' : 'navigation__icon'}></span>
                </div>
            

            </div>
        </div>
  )
}

export default MobileNavIcon