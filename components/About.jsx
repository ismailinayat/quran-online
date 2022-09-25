import React from 'react'

function About() {
  return (
    <div className='about'>

        <div className="about__left">
            <div className="about__left--container">
                <img src="/images/about-image.jpg" alt="" />
            </div>
        </div>

        <div className="about__right">
            <div className="about__right--container">

                <div className="about__title">
                    <h3>About QuranWithAyesha.pk</h3>
                </div>

                <div className="about__text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam quo autem, veritatis cupiditate rem iste, quibusdam impedit possimus temporibus itaque suscipit, commodi amet nobis. Est voluptatem ratione iusto adipisci?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima omnis quae ducimus harum adipisci labore fugiat exercitationem dolore magnam!
                    </p>
                </div>

                <div className="about--button">
                    <button className='btn'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About