import React from 'react'
import contact from './../assets/contact.jpg';
import { FaLocationDot } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import globe from './../assets/contact-globe.png';
import icon1 from './../assets/icon-1.png';
import icon2 from './../assets/icon2.png';
import con1 from './../assets/con-1.jpg';
import con2 from './../assets/con-2.jpg';
import con3 from './../assets/con-3.jpg';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
   <div className='bg-black text-white contact overflow-hidden'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-12 bg-black position-relative">
           <img src={contact} alt="" className='img-fluid opacity-25'/>
           <div className='position-absolute text-white ultra-regular' style={{bottom:"50%",left:"20%" , letterSpacing:"5px"}}>
              <h1 className='ultra-regular ' style={{letterSpacing:"4px"}}>Contact Us</h1>
           </div>
          </div>
        </div>
      </div>
      <div className="container p-4">
        <div className="row flex-center gap-4">
          <div className="col-lg-4 contact-cont flex-center flex-column p-3" style={{backgroundColor:"hsla(210, 4%, 9%, 1)" , width:"350px" , height:"250px"}}>
          <FaLocationDot className='fs-1 mb-2' />
          <h2>Our Location</h2>
          <p className='fs-5 text-center'>684 West College St. Sun City, United States America.</p>
          </div>
          <div className="col-lg-4 contact-cont flex-center flex-column p-3" style={{backgroundColor:"hsla(210, 4%, 9%, 1)",width:"350px", height:"250px"}}>
           <RiCustomerServiceFill className='fs-1 mb-2'/>
           <h2>Phone number</h2>
           <p className='fs-5'>(+91) 1234567890</p>
          </div>
          <div className="col-lg-4 contact-cont flex-center flex-column p-3" style={{backgroundColor:"hsla(210, 4%, 9%, 1)",width:"350px", height:"250px"}}>
          <IoIosMail className='fs-1 mb-2'/>
          <h2>Email Address</h2>
          <p className='fs-5'>grilli@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 position-relative" style={{backgroundColor:"hsla(210, 4%, 9%, 1)"}} >
        <div className="row">
          <div className=" globe" >
            <img src={globe} alt="" className=' opacity-25'/>
            <FaLocationDot className='fs-2 text-warning mb-2 position-absolute' style={{top:"20%",left:"70%" }}/>
              <FaLocationDot className='fs-2 text-warning mb-2 position-absolute' style={{top:"40%",left:"55%"}}/>
              <FaLocationDot className='fs-2 text-warning mb-2 position-absolute' style={{top:"40%",left:"72%"}}/>
            <div className='position-absolute col-lg-4' style={{top:"10%",left:"5%" , letterSpacing:"2px"}}>
               <h3 className='ultra-regular'>Find Location</h3>
               <h1>Locations of Restaurants All Over the City</h1>
               <hr  width={150}/>
               <p  className='text-align'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe beatae suscipit delectus dolore, iure sunt eos vel laboriosam velit facilis quasi qui quam placeat ratione asperiores excepturi dolorem nesciunt totam enim quia rerum expedita nulla explicabo? Sint, a magni.</p>
               <div className='flex-between'>
                <button className='btn btn-warning rounded-0 fw-bolder btn-lg'>Learn More</button>
                <div className='flex-center gap-4'>
                  <img src={icon2} alt="" className='img-fluid ' style={{width:"50px",height:"50px"}}/>
                  <div className='flex-column'>
                    <p className='m-0 text-warning fs-4 fw-bolder'>(+91) 1234567890</p>
                    <p>Reservation Calls</p>
                  </div>
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>

       <div className='flex-center flex-wrap gap-4 py-5'>
        <img src={con1} alt="" width={350} height={350} />
        <img src={con2} alt="" width={350} height={350}/>
        <img src={con3} alt="" width={350} height={350}/>
      </div>

      <div className='flex-center flex-wrap py-5  gap-5' style={{backgroundColor:"hsla(210, 4%, 9%, 1)"}}>
        <img src={icon1} alt="" />
        <div>
          <h3>We Have 25+ Years of Experience, Give Better Quality Results</h3>
          <p className='text-align'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci culpa quasi!</p>
        </div>
        <Link to='/bookatable'><button className='btn btn-warning btn-lg fw-bolder rounded-0'>Book Table</button></Link>
      </div>
   </div>
   
  )
}

export default Contact
