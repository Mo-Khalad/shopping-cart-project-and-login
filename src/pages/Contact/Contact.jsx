import React from 'react'
import style from './Contact.module.css'
export const Contact = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 p-5'>
           <h2 className='fs-4'> Contacts Us </h2>
           <p className={`p-2 ${style.paragraph}`}>Contrary to popular belief, Lorem Ipsum is simply random text. It has roots in a piece of classical Latin literature from 45 BC, maki years old.</p>
 
         

           <div className={`${style.data} mt-3 d-flex`}>
            <div>
             <i class={`${style.icon} fa-solid fa-location-dot py-3 px-2`}></i>
        
            </div>

            <div className='ms-2'>
              <span className={style.span}>Address:</span>
              <h5>60-49 Road 11378 New York</h5>
            </div>
           </div>

           <div className={`${style.data} mt-3 d-flex`}>
            <div>
            <i className={`${style.icon} fa-solid fa-mobile py-3 px-2`}></i>
            </div>

            <div className='ms-2'>
              <span className={style.span}>Phone:</span>
              <h5>+65 11.188.888</h5>
            </div>
           </div>

           <div className={`${style.data} mt-3 d-flex`}>
            <div>
              <i className={`${style.icon} fa-regular fa-message py-3 px-2`}></i>
            </div>

            <div className='ms-2'>
              <span className={style.span}>Email:</span>
              <h5>hellocolorlib@gmail.com</h5>
            </div>
           </div>
          
          </div> 
         
          <div className='col-12 col-md-6 p-5'>
            <h2 className='fs-4'> Leave A Comment </h2>
            <p className={`${style.paragraph}`}>Our staff will call back later and answer your questions.</p>
            <form className='d-flex flex-wrap justify-content-between'>
                <input className={`${style.input}`} type='text' name='Your name' placeholder='Your name'/>
                <input className={`${style.input}`} type='text' name='Your email' placeholder='Your name'/>
                <textarea className={`${style.input_message} w-100 `} type='text' name="Your message" placeholder='Your Message'/>
            </form>

           <button className={`${style.send_Message_btn }`}>Send Message</button> 
          </div>
        </div>
      </div>
    </div>
  )
}
