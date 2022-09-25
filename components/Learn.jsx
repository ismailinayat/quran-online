import React from 'react'

function Learn() {
  return (
    <div className='learn'>

        <div className="learn__left">

            <div className="learn__title">
                <h3>
                    Learn Reading Holy Quran With Translation and Tafsir of Every Ayat
                </h3>
            </div>

            <div className="learn__text">
                <p>
                At  QuranWithAyesha, we offer an affordable and accessible method for children and adults (only women) to learn Quran online at the comfort of
                there home. Along with helping our students learning reading of quran we also teach them the meaning of each Quranic ayat in detail. This is necessary because
                our aim is not only to teach our students how to read quran but also to use it in there every day lives.
                </p>
            </div>

            <div className="book__now">
                <button className='btn btn--primary'>
                    Book Your Online Class Now
                </button>
            </div>
        </div>

        <div className="learn__right">
            <div className='learn__right--container'>

                <img src="/images/learn.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Learn