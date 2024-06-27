import React, { useState } from 'react'
import banner from './../assets/cart_banner (1).jpg';
import about1 from './../assets/about-banner.jpg';
import about4 from './../assets/special-dish-banner.jpg';
import about2 from './../assets/menu-2.jpg';
import about3 from './../assets/img-5.jpg';
import { IoRestaurant } from "react-icons/io5";
import feature1 from './../assets/features-icon-1.png';
import feature2 from './../assets/features-icon-2.png';
import feature3 from './../assets/features-icon-3.png';
import feature4 from './../assets/features-icon-4.png';
import separator from './../assets/separator.svg';
import img1 from './../assets/img-1.png';
import img2 from './../assets/img-2.png';
import chef1 from './../assets/chef1.png';
import chef2 from './../assets/chef2.png';
import chef3 from './../assets/chef3.png';
import chef4 from './../assets/chef4.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import testimonial1 from './../assets/testimonial1.jpg';
import testimonial2 from './../assets/testimonial2.jpg';
import testimonial3 from './../assets/testimonial3.jpg';
import testimonial4 from './../assets/testimonial4.jpg';


const About = () => {
  

  return (
   <div className='bg-black'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-12">
            {/* <img src={banner} alt="" className='img-fluid w-100'/> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex  mt-5">
        <div className="col-lg-6 d-flex  gap-4">
            <div className={`d-flex flex-column align-items-end gap-4 `}>
              <img src={about1} alt="" className='about1' width={300}/>
              <img src={about2} alt="" className='about2' height={200}/>
            </div>
            <div className='d-flex flex-column align-items-start gap-4' style={{marginTop:"100px"}}>
              <div width={300}>
               <img src={about3} alt="" className='about2' width={200} height={200}/>
              </div>
              <img src={about4} alt="" className='about1' width={300}/>
            </div>
          </div>
          <div className="col-lg-6">
           <div className='flex-center flex-column'>
              <p
                className="text-uppercase letter-spacing"
                style={{ color: "hsl(38, 61%, 73%)" }}
              >
                ABOUT US
              </p>
              <img
                src={separator}
                alt=""
                style={{ width: "100px" }}
                className='mb-3'
              />
           </div>
            <h1 className='fs-1 text-center text-white fw-bolder'>Welcome to <span><IoRestaurant className='text-warning fs-1'/></span> Grilli Restaurant</h1>
            <p className='text-white fs-5' style={{textAlign:"justify"}}>Grilli Restaurant is a restaurant that opened its doors in 2000 with a passion for serving delicious food made from the freshest ingredients. Our cozy and inviting atmosphere paired with our creative seasonal menus crafted by our talented chefs provides an exceptional dining experience.</p>
            <p className='text-white fs-5' style={{textAlign:"justify"}}>We take pride in our commitment to using locally-sourced, high-quality produce and meats whenever possible. From our open kitchen to our warm and welcoming dining room,Grilli Restaurant is dedicated to ensuring every guest feels right at home while enjoying flavorful dishes and impeccable service</p>
            <p className='text-white fs-5' style={{textAlign:"justify"}}>Join us and taste the passion behind every plate at Grilli Restaurant. We look forward to serving you a truly memorable meal.</p>
            <div className='d-flex flex-between experience'>
              <div>
                <div className='d-flex flex-between gap-3'>
                <div className='exp-vertical-line'></div>
                  <h1 className='text-warning' style={{fontSize:"40px"}}>25</h1>
                  <div>
                    <p className='text-light'>Years of</p>
                    <p className='text-white fw-bolder' style={{letterSpacing:"3px"}}>EXPERIENCE</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='d-flex flex-center gap-3'>
                  <div className='exp-vertical-line'></div>
                  <h1 className='text-warning' style={{fontSize:"40px"}}>50</h1>
                  <div>
                    <p className='text-light'>Popular</p>
                    <p className='text-white fw-bolder ' style={{letterSpacing:"3px"}} >MASTER CHEFS</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='d-flex flex-center gap-3'>
                  <div className='exp-vertical-line'></div>
                  <h1 className='text-warning' style={{fontSize:"40px"}}>200K+</h1>
                  <div>
                    <p className='text-light'>Number of</p>
                    <p className='text-white fw-bolder' style={{letterSpacing:"3px"}}>ORDERS</p>
                  </div>
                </div>
              </div>
            </div>
            <p className='text-warning text-decoration-underline fs-5'>Read More</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row flex-between">
        <div className='flex-center flex-column'>
              <p
                className="text-uppercase letter-spacing mt-5"
                style={{ color: "hsl(38, 61%, 73%)" }}
              >
                WHY CHOOSE US
              </p>
              <img
                src={separator}
                alt=""
                style={{ width: "100px" }}
                className='mb-3'
              />
              <h1 className='text-white fs-1 mb-4'>Our Strength</h1>
           </div>
          <div className="col-lg-3 flex-center flex-column gap-1 choose-us" style={{height:"200px"}}>
            <img src={feature1} alt="" className={`img-fluid`}/>
            <p className='fs-5 text-white'>Hygienic Food</p>
          </div>
          <div className="col-lg-3 flex-center flex-column gap-1 choose-us" style={{height:"200px",backgroundColor:"hsla(210, 4%, 9%, 1)"}}>
            <img src={feature2} alt=""  className='img-fluid'/>
            <p className='fs-5 text-white'>Fresh Environment</p>
          </div>
          <div className="col-lg-3 flex-center flex-column gap-1 choose-us" style={{height:"200px"}}>
            <img src={feature3} alt=""  className='img-fluid'/>
            <p className='fs-5 text-white'>Skilled Chefs</p>
          </div>
          <div className="col-lg-3 flex-center flex-column gap-1 choose-us" style={{height:"200px",backgroundColor:"hsla(210, 4%, 9%, 1)"}}>
            <img src={feature4} alt=""  className='img-fluid'/>
            <p className='fs-5 text-white'>Event & Party</p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <img src={img1} alt="" className='img-fluid rounded-3'/>
          </div>
          <div className="col-lg-6 flex-center flex-column text-white p-5">
            <h2 className=' text-white fw-bold'>We Pride Ourselves On Making Real Food From The Best Ingredients.</h2>
            <p className='fs-5 mt-2 text-align'>At our restaurant, we take immense pride in crafting authentic, flavorful dishes using only the finest and freshest ingredients. Our commitment to quality and sustainability is unwavering, as we source our produce, meats, and other components from trusted local purveyors and farms that share our values. Every dish is prepared with care and attention to detail, ensuring that the natural flavors of our premium ingredients shine through. We believe in the power of real, wholesome food to nourish and delight, and that dedication is reflected in every bite.</p>
            <p></p>
          </div>
          <div className="col-lg-6 flex-center flex-column text-white p-5">
            <h2 className=' text-white fw-bold'>We Make Everything By Hand With The Best Ingredients.</h2>
            <p className='fs-5 mt-3 text-align'>Our kitchen is a testament to the art of handcrafted cuisine. Every dish is meticulously prepared by our skilled chefs using traditional techniques and the highest quality, locally-sourced ingredients. From artisanal breads and pasta made fresh daily to sauces simmered to perfection and desserts baked with love, we take pride in creating each item by hand. This hands-on approach ensures that every bite is bursting with authentic flavors and unparalleled freshness. We believe that great food comes from a commitment to quality, and that's why we never compromise on the ingredients or the craft behind our creations.</p>
          </div>
          <div className="col-lg-6">
            <img src={img2} alt="" className='img-fluid'/>
          </div>
        </div>
      </div>

      <div className='contsiner'>
        <div className="row">
        <div className='flex-center flex-column'>
              <p
                className="text-uppercase letter-spacing mt-5"
                style={{ color: "hsl(38, 61%, 73%)" }}
              >
                TEAM MEMBER
              </p>
              <img
                src={separator}
                alt=""
                style={{ width: "100px" }}
                className='mb-3'
              />
              <h1 className='text-white fs-1 mb-4'>Our Master Chefs</h1>
              <div className="col-lg-12 flex-center flex-wrap gap-5 chef-container">
                <div className='chef'>
                <img src={chef1} alt="" className='img-fluid mt-5' width={200 }/>
                <p className='text-warning fs-5 mt-4'>Derek Kent</p>
                <p className='text-white'>Executive Chef</p>
                <div className='chef-social-link gap-2 flex-center'>
                  <FaFacebook className='text-white fs-2 social'/>
                  <FaInstagram className='text-white fs-2 social'/>
                  <FaLinkedin className='text-white fs-2 social'/>
                </div>
                </div>
                <div className='chef'>
                <img src={chef2} alt="" className='img-fluid mt-4' width={250}/>
                <p className='text-warning fs-5'>Julieta Hunter</p>
                <p className='text-white'>Head Chef</p>
                <div className='chef-social-link gap-2 flex-center'>
                  <FaFacebook className='text-white fs-2 social'/>
                  <FaInstagram className='text-white fs-2 social'/>
                  <FaLinkedin className='text-white fs-2 social'/>
                </div>
                </div>
                <div className='chef'>
                <img src={chef3} alt="" className='img-fluid mt-5'width={200}/>
                <p className='text-warning fs-5 mt-4'>Milan Donovan</p>
                <p className='text-white'>Sous Chef</p>
                <div className='chef-social-link gap-2 flex-center'>
                  <FaFacebook className='text-white fs-2 social'/>
                  <FaInstagram className='text-white fs-2 social'/>
                  <FaLinkedin className='text-white fs-2 social'/>
                </div>
                </div>
                <div className='chef'>
                <img src={chef4} alt="" className='img-fluid mt-5'width={200}/>
                <p className='text-warning fs-5 mt-4'>Terry Livingston</p>
                <p className='text-white'>Station Chef</p>
                <div className='chef-social-link gap-2 flex-center'>
                  <FaFacebook className='text-white fs-2 social'/>
                  <FaInstagram className='text-white fs-2 social'/>
                  <FaLinkedin className='text-white fs-2 social'/>
                </div>
                </div>
              </div>
           </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
        <div className='flex-center flex-column'>
              <p
                className="text-uppercase letter-spacing mt-5"
                style={{ color: "hsl(38, 61%, 73%)" }}>
                TESTIMONIALS
              </p>
              <img
                src={separator}
                alt=""
                style={{ width: "100px" }}
                className='mb-3'/>
              <h1 className='text-white fs-1 mb-4'>What Our Customer say</h1>
           </div>
           <div className="col-lg-12">
           <Carousel className=''>
             <Carousel.Item >
                <div className='flex-center'><img src={testimonial1} alt="" className='img-fluid w-50'/></div>
             </Carousel.Item>
             <Carousel.Item >
             <div className='flex-center'><img src={testimonial2} alt="" className='img-fluid w-50'/></div>
             </Carousel.Item>
             <Carousel.Item >
             <div className='flex-center'><img src={testimonial3} alt="" className='img-fluid w-50'/></div>
             </Carousel.Item>
             <Carousel.Item >
             <div className='flex-center'><img src={testimonial4} alt="" className='img-fluid w-50'/></div>
             </Carousel.Item>
          </Carousel>
           </div>
        </div>
      </div>
   </div>
  )
}

export default About
