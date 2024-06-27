import React from 'react'
import footer from './../assets/footer-bg.jpg';
import formpattern from './../assets/form-pattern.png';
import footerFormBg from './../assets/footer-form-bg.png';
import footerFormPattern from './../assets/footer-form-pattern.svg';
import logo from './../assets/logo.svg';





const Footer = () => {
  return (
    <div className='container-fluid position-relative' style={{backgroundImage:`url(${footer})` , width:"99.4vw" , height:"100vh"}}>
      <div className='middle-row '>
        <div className='row footer'>
            <div className='col-lg-3 flex-colum'>
                <h4 className='text-white'>Home</h4>
                <h4 className='text-white'>Menus</h4>
                <h4 className='text-white'>About Us</h4>
                <h4 className='text-white'>Our Chefs</h4>
                <h4 className='text-white'>Contact</h4>
            </div>
            <div className='col-lg-6 flex-between footer-middle' style={{backgroundImage:`url(${footerFormBg})`,width:"30vw" , height:"50vh"}}>
              <img src={footerFormPattern} alt="" className='img-fluid' width={10}height={200} />
              <div className=''>
                <img src={logo} alt="" />
                <p>Restaurant St, Delicious City, London 9578, UK</p>
                <p>booking@grilli.com</p>
                <p>Booking Request: + 81258963245</p>
                <p>Open : 09:00 am - 01:00 pm</p>
                <h1>Get News & Offers</h1>
                <p>Subscribe us & Get 25% Off.</p>
                <div>
                    <input type="text" />
                    <button>Subscribe</button>
                </div>
              </div>
              <img src={footerFormPattern} alt="" className='img-fluid' width={10}/>
            </div>
            <div className='col-lg-3'>
                <h4 className='text-white'>Facebook</h4>
                <h4 className='text-white'>Instagram</h4>
                <h4 className='text-white'>Twitter</h4>
                <h4 className='text-white'>Youtube</h4>
                <h4 className='text-white'>Google Map</h4>
            </div>
        </div>
      </div>
   
    </div>
  )
}

export default Footer
