import React, { useRef } from 'react'
import book1 from './../assets/book1.jpg';
import book2 from './../assets/book2.jpg';
import book3 from './../assets/book3.jpg';
import { IoRestaurant } from 'react-icons/io5';
// import img1 from './../assets/img-5.jpg';
import img2 from './../assets/blog-1.jpg';
import img3 from './../assets/blog-2.jpg';
import img4 from './../assets/blog-3.jpg';
import img5 from './../assets/blog-4.jpg';
import img6 from './../assets/blog-5.jpg';
import img7 from './../assets/blog-6.jpg';
import img8 from './../assets/blog-7.jpg';
import img9 from './../assets/blog-8.jpg';
import img1 from './../assets/blog-9.jpg';
import img11 from './../assets/blog10.jpg';
import img12 from './../assets/blog11.jpg';
import img13 from './../assets/blog12.jpg';
import separator from "./../assets/separator.svg";
import shape5 from "./../assets/shape-5.png";
import shape6 from "./../assets/shape-6.png";
import shape7 from "./../assets/shape-9.png";
import menu1 from "./../assets/menu-1.png";
import menu2 from "./../assets/menu-2.png";
import menu3 from "./../assets/menu-3.png";
import menu4 from "./../assets/menu-4.png";
import menu5 from "./../assets/menu-5.png";
import menu6 from "./../assets/menu-6.png";
import Carousel from 'react-bootstrap/Carousel';
import table1 from './../assets/table-1.jpg';
import table2 from './../assets/table-2.jpg';
import table3 from './../assets/table-3.jpg';
import table4 from './../assets/table-4.jpg';
import Form from 'react-bootstrap/Form';
import mobileapp from './../assets/mobileapp.png'
import appstore from './../assets/app_store.png';
import playstore from './../assets/play_store.png';



const BookTable = () => {

    const bookTableFormRef = useRef(null);

    const handleBookTableClick = () => {
      bookTableFormRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className='reservation bg-black overflow-hidden'>
      <div className="container-fluid">
        <div className="row">
            <div className=" book1" style={{backgroundImage:`url(${book1})`}}>
              <span className='horizontal-line'></span>
              <h1 className='ultra-regular' style={{letterSpacing:"4px"}}>Enjoy Our Food Experience</h1>
              <span className='horizontal-line'></span>
            </div>
            <div className=' text-center bg-black'>
              {/* <h2>Welcome to Grilli Restaurant</h2> */}
              <h1 className='fs-1 text-center text-white fw-bolder my-5'>Welcome to <span><IoRestaurant className='text-warning fs-1'/></span> Grilli Restaurant</h1>
            </div>
        </div>
      </div>
      <div className="container   text-white">
        <div className="row flex-center">
        <div className='col-lg-6'>
                 <h1 className='ultra-regula' >Finest Place for Traditional food</h1>
                 <p className='text-align'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis amet impedit cumque libero eius nobis natus eos explicabo cum quidem et facilis illo ducimus unde laudantium sint, corporis ipsam deserunt numquam quo! Modi suscipit tempora assumenda, esse commodi voluptate.</p>
                 <p className='text-align'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id cum, debitis quisquam ducimus fuga voluptatem maiores in qui earum perspiciatis neque asperiores corrupti unde accusamus? Numquam, eligendi dolore voluptatibus nobis incidunt officia nesciunt aliquid totam eum delectus rem amet, nulla corrupti facere excepturi porro possimus vel modi laudantium? Cupiditate, voluptatum?</p>
                 <button className='btn btn-warning btn-lg fw-bold' onClick={handleBookTableClick}>Book Table</button>
         </div>
              <div className="col-lg-6 my-5">
              <div className="image-tile flex-center gap-4">
                 <img src={img8} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
                 <img src={img9} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
               </div>
               <div className="image-tile flex-center gap-4">
                 <img src={img1} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
                 <img src={img2} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
                 <img src={img3} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
               </div>
               <div className="image-tile flex-center gap-4">
                 <img src={img4} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
                 <img src={img5} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
                 <img src={img12} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
                 <img src={img13} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
               </div>
               <div className="image-tile flex-center  gap-4">
                 <img src={img6} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
                 <img src={img7} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
                 <img src={img8} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
               </div>
               <div className="image-tile flex-center gap-4">
                 <img src={img8} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
                 <img src={img9} alt="" className='img-flui ' style={{width:"100px",height:"100px"}}/>
               </div>
            </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
        <div className=" book1" style={{backgroundImage:`url(${book2})`}}>
              <span className='horizontal-line'></span>
              <h1 className='ultra-regular' style={{letterSpacing:"4px"}}>Discover Our Menu</h1>
              <span className='horizontal-line'></span>
            </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
        <div className="position-relative z-0 overflow-hidden  " style={{backgroundColor:"hsla(210, 4%, 9%, 1)"}}>
      <img src={shape7} alt="" className="img-fluid img-move8 z-3 shape7" />
      <img src={shape5} alt="" className="img-fluid updown img-move-left "/>
      <img src={shape6} alt="" className="img-fluid updown img-move-bottom-right "/>
      <div className="container" >
       <div className="row">
      <div className="flex-center flex-column">
         <p className="text-uppercase letter-spacing mt-5 z-3"  style={{color:'hsl(38, 61%, 73%)'}} >SPECIAL SELECTION</p>
           <img src={separator} alt="" style={{width:"100px"}} className="z-3"/>
           <h1 className="text-white mt-3 mb-3 z-3" style={{fontSize:"60px"}}>Delicious Menu</h1>
      </div>
      <div className="flex-center resp-container2 z-3">
        <div className="col-lg-4 col-12 flex-column d-flex gap-4 mt-5 ">
          <div className="d-flex align-items-center gap-3">
          <img src={menu1} alt="" className="img-fluid"/>
         <div className="d-flex align-items-start flex-column">
            <div className="flex-between w-100">
              <h4 className="text-white">Greek Salad</h4>
              <div>
                <span style={{color:'hsl(38, 61%, 73%)' ,backgroundColor:"hsla(210, 4%, 9%, 1)"}}>$25.50</span>
              </div>
            </div>
            <p className="text-white">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
         </div>
          </div>
          <div className="d-flex align-items-center gap-3">
          <img src={menu2} alt="" className="img-fluid"/>
         <div className="d-flex align-items-start flex-column">
            <div className="flex-between w-100">
              <h4 className="text-white">Lasagne</h4>
              <div>
                <span style={{color:'hsl(38, 61%, 73%)'}}>$25.50</span>
              </div>
            </div>
            <p className="text-white">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</p>
         </div>
          </div>
          <div className="d-flex align-items-center gap-3">
          <img src={menu3} alt="" className="img-fluid"/>
         <div className="d-flex align-items-start flex-column">
            <div className="flex-between w-100">
              <h4 className="text-white">Butternut Pumpkin</h4>
              <div>
                <span style={{color:'hsl(38, 61%, 73%)'}}>$25.50</span>
              </div>
            </div>
            <p className="text-white">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</p>
         </div>
          </div>
        </div>
        <div className="col-lg-2 dnone ">
          <span className="vertical-line"></span>
        </div>
        <div className="col-lg-4 col flex-column d-flex gap-4 mt-5">
        <div className="d-flex align-items-center gap-3">
          <img src={menu4} alt="" className="img-fluid"/>
         <div className="d-flex align-items-start flex-column">
            <div className="flex-between w-100">
              <h4 className="text-white">Greek Salad</h4>
              <div>
                <span style={{color:'hsl(38, 61%, 73%)'}}>$25.50</span>
              </div>
            </div>
            <p className="text-white">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
         </div>
          </div>
          <div className="d-flex align-items-center gap-3">
          <img src={menu5} alt="" className="img-fluid"/>
         <div className="d-flex align-items-start flex-column">
            <div className="flex-between w-100">
              <h4 className="text-white">Tokusen Wagyu</h4>
              <div>
                <span style={{color:'hsl(38, 61%, 73%)'}}>$25.50</span>
              </div>
            </div>
            <p className="text-white">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</p>
         </div>
          </div>
          <div className="d-flex align-items-center gap-3">
          <img src={menu6} alt="" className="img-fluid"/>
         <div className="d-flex align-items-start flex-column">
            <div className="flex-between w-100">
              <h4 className="text-white">Opu Fish</h4>
              <div>
                <span style={{color:'hsl(38, 61%, 73%)'}}>$25.50</span>
              </div>
            </div>
            <p className="text-white">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</p>
         </div>
          </div>
        </div>
      </div>
       </div>
      <div className="flex-center mt-3 mb-5"> <button className="main-btn">View All menu</button></div>
      </div>
     
   </div>
        </div>
      </div>
      <div className="container-fluid" ref={bookTableFormRef} >
        <div className="row">
        <div className=" book1" style={{backgroundImage:`url(${book3})`}}>
              <span className='horizontal-line'></span>
              <h1 className='ultra-regular' style={{letterSpacing:"4px"}}>Book Our Table</h1>
              <span className='horizontal-line'></span>
            </div>
        </div>
      </div>
      <div className="container-fluid" >
        <div className="row">
          <div className="col-lg-8">
          <Carousel className=''>
             <Carousel.Item >
                <div className='flex-center'><img src={table1} alt="" className='img-fluid w-100'/></div>
             </Carousel.Item>
             <Carousel.Item >
             <div className='flex-center'><img src={table2} alt="" className='img-fluid w-100'/></div>
             </Carousel.Item>
             <Carousel.Item >
             <div className='flex-center'><img src={table3} alt="" className='img-fluid w-100'/></div>
             </Carousel.Item>
             <Carousel.Item >
             <div className='flex-center'><img src={table4} alt="" className='img-fluid w-100'/></div>
             </Carousel.Item>
          </Carousel>
          </div>
          <div className="col-lg-4 flex-center flex-column">
            <h1 className='ultra-regular text-white mt-5'>Book A Table</h1>
            <Form>
              <input type="text" name="" id="" placeholder='Enter Name' className='text-black form-control my-3 fw-bolder' style={{width:"320px"}}/>
              <select name="" id="" className='text-black fw-bolder form-control my-3' style={{width:"320px"}}>
                <option value="">1 person</option>
                <option value="">2 person</option>
                <option value="">3 person</option>
                <option value="">4 person</option>
              </select>
              <input type="date" name="" id="" className='text-black form-control fw-bolder my-3' style={{width:"320px"}}/>
              <select  className='text-black form-control fw-bolder  my-3' style={{width:"320px"}}>
                <option value="">9:00Am</option>
                <option value="">2 person</option>
                <option value="">3 person</option>
                <option value="">4 person</option>
              </select>
              <input type="number" name="" id="" placeholder='Enter Phone Number' className='text-black form-control my-3 fw-bolder' style={{width:"320px"}}/>
               <button className='btn btn-warning fw-bolder' style={{width:"320px"}}>Book Now</button>
              </Form>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
        <div className="col-lg-6 flex-center">
            <img src={mobileapp} alt="" className='' width={450}/>
          </div>
          <div className="col-lg-6 text-center flex-center flex-column text-white py-4">
             <h2 className='ultra-regular'>For better Experience download our Mobile App</h2>
             <div className='d-flex mt-3 gap-4'>
              <img src={appstore} alt="" className='border border-secondary rounded-3'/>
              <img src={playstore} alt="" className='border border-secondary rounded-3'/>
             </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BookTable
