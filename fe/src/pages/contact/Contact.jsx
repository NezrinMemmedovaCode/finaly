import React from 'react'
import { Helmet } from 'react-helmet-async'
import "./Contact.scss"

function Contact() {
  

 
  
  return (

    
    
    <div className='body'>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      






<div class="contact-page">
        <div class="contact-header">
            <h1>Contact Us</h1>
            <p>If you have any questions, please contact us using the form below</p>
        </div>

        <div class="contact-form">
          <form id='contactForm'>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required></input>

          <label for="email">E-Mail Address:</label>
                <input type="email" id="email" name="email" required></input>


                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit">Send</button>
        


          </form>


      
          
        </div>

        <div class="contact-info">
            <h2>Our Contact Information </h2>
            <p><strong>Address:</strong> NathCoffee PortBaku, Port Mall, 151 Neftchilar Ave, Baku</p>
            <p><strong>Telephone:</strong> +994 55 903 2491</p>
            <p><strong>E-mail:</strong> nezrinmemmedova4112@gmail.com </p>
        </div>

        <div class="contact-map">
            <h2>Our location</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83903626274!2d28.731992125392788!3d41.00498235607917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3b3b3b3b3b3%3A0x3e0b3e0b3e0b3e0b!2sİstanbul!5e0!3m2!1str!2str!4v1597998482096!5m2!1str!2str"
               ></iframe>
        </div>

        <div class="contact-social">
            <h2>Follow us</h2>
            
           
            <a href="https://www.instagram.com/nathreeen/?utm_source=ig_web_button_share_sheet">Instagram</a>
        </div>
    </div>
    
    </div>
    
    
  )
}

export default Contact