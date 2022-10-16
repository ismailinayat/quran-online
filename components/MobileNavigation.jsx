import React, {useState} from 'react'
import Link from 'next/link';



function MobileNavigation({navOpen, setNavOpen}) {






  const handleOverlayClick = () => {
    setNavOpen((prev) => !prev);
  }


  return (
    <div className='mobile__navigation__container'>

    
      <div className={navOpen ? 'mobile__navigation open' : 'mobile__navigation'}>
        
        <div className="links">

          <div className="link" onClick={() => setNavOpen(false)}>
            <Link href="#" >
              <a>Home</a>
            </Link>
          </div>

          <div className="link" onClick={() => setNavOpen(false)}>
            <Link href="#" >
              <a>About</a>
            </Link>
          </div>

          <div className="link" onClick={() => setNavOpen(false)}>
            <Link href="#" >
              <a>Values</a>
            </Link>
          </div>

          <div className="link"  onClick={() => setNavOpen(false)}>
            <Link href="#">
              <a>Tafsir</a>
            </Link>
          </div>

          <div className="link"  onClick={() => setNavOpen(false)}>
            <Link href="#">
              <a>Translation</a>
            </Link>
          </div>

          <div className="link"  onClick={() => setNavOpen(false)}>
            <button className='btn btn--primary'>
              Contact Me
            </button>
          </div>

          
        </div>
        
      


      </div>

        <div className={navOpen ? "overlay" : "overlay hidden"} onClick={handleOverlayClick}></div>
    </div>
  )
}

export default MobileNavigation