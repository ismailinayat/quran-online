import React from 'react'

function Footer() {
  return (
    <div className='footer'>


        <div className="footer__title">
            <h3>Want To get More Information! Contact Us</h3>
        </div>
        <div className="contact__container">

            <div className="contact email">
                <div className="medium">
                    <h3>Email:</h3>
                </div>
                <h3 className='contact__medium__text'>quranwithayesha@gmail.com</h3>
            </div>

            <div className="contact whatsapp">
                <div className="medium">
                    <h3>Whatsapp:</h3>
                </div>
                <h3 className='contact__medium__text'>0092-333-1234567</h3>
            </div>
        </div>

    </div>
  )
}

export default Footer