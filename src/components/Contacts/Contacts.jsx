import React from 'react'
import './Contact.css'

const Contacts = () => {
  function callit(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw4DJyUNhK1Yr0TRRlL_GyE-gCLWtbyAcBNdKq2Qh0y3r7ro28R1837qWeTz8H4D_34/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
  }

  return (
    <div className="Contact">
        <div className="links-contact">
            <h1>Contact Me</h1>
            <i class="bi bi-envelope"></i>
            <span >pranaydhanke33@gmail.com</span>
            <br />
            <br />
            <i class="bi bi-person-circle"></i>
            <span>+918329123649</span>
            <br />
            <br />
            <a href="https://twitter.com/pranaydhanke33">
              <i style={{color:'aqua'}} class="bi bi-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/pranay-dhanke-176a66263">
              <i style={{color:'rgb(92, 92, 245)'}} class="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/PranayDhanke">
            <i  class="bi bi-github"></i>
            </a>

        </div>
        <div className="Email-contact">
            <form name='submit-to-google-sheet' onSubmit={callit} >
            <input type="text" name='Name'  placeholder='Your Name'/>
            <br />
            <input type="text" name='Email' placeholder='Your Email' />
            <br />
            <textarea name='Message' cols="30" rows="10" placeholder='Your Message' ></textarea>
            <br />
            <button type='submit' >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contacts