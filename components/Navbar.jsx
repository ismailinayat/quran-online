import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <h3>Quran<span>withayesha.pk</span></h3>
        </div>

        <div className="nav__links">

            <div className="link home">
                <Link href="">
                    <a>Home</a>
                </Link>
            </div>

            <div className="link home">
                <Link href="">
                    <a>About</a>
                </Link>
            </div>

            <div className="link home">
                <Link href="">
                    <a>Values</a>
                </Link>
            </div>

            <div className="link home">
                <Link href="">
                    <a>Tafsir</a>
                </Link>
            </div>

            <div className="link home">
                <Link href="">
                    <a>Translation</a>
                </Link>
            </div>
        </div>

        <div className="contact__button">
            <button className='btn btn--primary'>Contact me</button>
        </div>
    </div>
  )
}

export default Navbar