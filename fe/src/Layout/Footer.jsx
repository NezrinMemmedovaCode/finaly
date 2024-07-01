import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
        <div className="box1">
            <h3>About Us</h3>
            <p>Our coffee shop, which was established in 2024, has always become a favorite of customers, because there are smiling, lovely employees and customers here, you can come here with your friends, lover, family and have fun, gossip and chat as you like.</p>
            <span>Sincerely, Nazrin</span>
        </div>
        <div className="box2">
            <h3>Follow us</h3>
            <p>Let us be social</p>
            <div className="icons"><i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>

        </div>
        <div className="box3">
            <h3>Location</h3>
            <p>NathCoffee PortBaku, Port Mall, 151 Neftchilar Ave, Baku</p>
            <a href="https://maps.app.goo.gl/YsV24kk6zhne9PZT8">https://maps.app.goo.gl/YsV24kk6zhne9PZT8</a>
            
        </div>




    </div>
  )
}

export default Footer