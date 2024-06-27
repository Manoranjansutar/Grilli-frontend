import React from "react";
// import './../Slider.css';
import image1 from "./../assets/hero-slider-1.jpg";
import image2 from "./../assets/hero-slider-2.jpg";
import image3 from "./../assets/hero-slider-3.jpg";
import Carousel from "react-bootstrap/Carousel";
import separator from "./../assets/separator.svg";
import service1 from "./../assets/service-1.jpg";
import service2 from "./../assets/service-2.jpg";
import service3 from "./../assets/service-3.jpg";
import pattern from "./../assets/img-pattern.svg";
import shape1 from "./../assets/shape-1.png";
import shape2 from "./../assets/shape-2.png";
import shape3 from "./../assets/shape-3.png";
import about1 from "./../assets/about-abs-image.jpg";
import about2 from "./../assets/about-banner.jpg";
import badge1 from "./../assets/badge-2-bg.png";
import badge2 from "./../assets/badge-2.png";
import badge3 from "./../assets/badge-1.png";
import dishbanner from "./../assets/special-dish-banner.jpg";
import shape4 from "./../assets/shape-4.png";
import shape5 from "./../assets/shape-5.png";
import shape6 from "./../assets/shape-6.png";
import shape7 from "./../assets/shape-9.png";
import menu1 from "./../assets/menu-1.png";
import menu2 from "./../assets/menu-2.png";
import menu3 from "./../assets/menu-3.png";
import menu4 from "./../assets/menu-4.png";
import menu5 from "./../assets/menu-5.png";
import menu6 from "./../assets/menu-6.png";








const Home = () => {
  return (
    <div className="carousel bg-black" >
      <Carousel indicators={false}>
        <Carousel.Item>
          <img src={image1} alt="" className="slide-carousel carousel-img" />
          <div className="middle animation-div">
            <p
              className="text-uppercase letter-spacing"
              style={{ color: "hsl(38, 61%, 73%)" }}
            >
              Amazing & Delicious
            </p>
            <img src={separator} alt="" style={{ width: "100px" }} />
            <h3 className="">For the love of delicious food</h3>
            <h6 className="text-sm text-md text-lg">
              Come with family & feel the joy of mouthwatering food
            </h6>
            <button className="main-btn text-uppercase mt-3">
              View Our Menu
            </button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img src={image2} alt="" className=" slide-carousel carousel-img"/>
          <div className="middle animation-div">
            <p
              className="text-uppercase letter-spacing"
              style={{ color: "hsl(38, 61%, 73%)" }}
            >
              TRADATIONAL & HYGINE
            </p>
            <img src={separator} alt="" style={{ width: "100px" }} />
            <h3>Flavors Inspired by the Seasons</h3>
            <h6 className="text-sm text-md text-lg">
              Come with family & feel the joy of mouthwatering food
            </h6>
            <button className="main-btn text-uppercase mt-3">
              View Our Menu
            </button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img src={image3} alt="" className="slide-carousel carousel-img"/>
          <div className="middle animation-div">
            <p
              className="text-uppercase letter-spacing"
              style={{ color: "hsl(38, 61%, 73%)" }}
            >
              DELIGHTFUL EXPERIENCE
            </p>
            <img src={separator} alt="" style={{ width: "100px" }} />
            <h3>Where every flavor tells a story</h3>
            <h6 className="text-sm text-md text-lg">
              Come with family & feel the joy of mouthwatering food
            </h6>
            <button className="main-btn text-uppercase mt-3">
              View Our Menu
            </button>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="container-fluid bg-black position-relative z-0">
        <div className="row mt-5 bg-black ">
          <img src={shape1} alt="" className="img-fluid shape2" />
          <img src={shape2} alt="" className="img-fluid shape1" />
          <div className="flex-center flex-column">
            <p
              className="text-uppercase letter-spacing mt-5 "
              style={{ color: "hsl(38, 61%, 73%)" }}
            >
              FLAVORS FOR ROYALTY
            </p>
            <img
              src={separator}
              alt=""
              style={{ width: "100px" }}
              className="text-center "
            />
            <h4 className="text-white m-4 animate" style={{ fontSize: "60px" }}>
              We Offer Top Notch
            </h4>
          </div>
        <div className="d-flex justify-content-around align-content-center flex-lg-row flex-sm-column gap-lg-2 gap-sm-2">
        <div className="col-lg-4 col-12"  >
            <div className="flex-column position-relative  d-flex img-hover justify-content-center align-items-center">
              <img
                src={pattern}
                alt=""
                className="img-fluid img1"
                width={150}
              />
              <img src={service2} alt="" className="img-move" />
              <h3 className="text-white mt-3">Breakfast</h3>
              <p
                className="text-uppercase letter-spacing"
                style={{ color: "hsl(38, 61%, 73%)" }}
              >
                VIEW MENU
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12">
          <div className="flex-column position-relative img-hover  flex-center">
          <p className="text-white text-center fs-5 w-75 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever.</p>
              <img
                src={pattern}
                alt=""
                className="img-fluid img1"
                width={150}
              />
              <img src={service3} alt="" className="img-move1" />
              <h3 className="text-white mt-3">Appetizers</h3>
              <p
                className="text-uppercase letter-spacing"
                style={{ color: "hsl(38, 61%, 73%)" }}
              >
                VIEW MENU
              </p>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="flex-column position-relative  d-flex img-hover justify-content-center align-items-center">
              <img
                src={pattern}
                alt=""
                className="img-fluid img1"
                width={150}
              />
              <img src={service1} alt="" className=" img-move" />
              <h3 className="text-white mt-3">Drinks</h3>
              <p
                className="text-uppercase letter-spacing"
                style={{ color: "hsl(38, 61%, 73%)" }}
              >
                VIEW MENU
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

      
     <div className="container mt-5 " >
       <div className="row justify-content-center">
        <div className="col-lg-2 d-flex justify-content-center align-items-center">
          <img src={shape3} alt="" />
        </div>
        
        <div className="col-lg-4  align-items-center d-flex  flex-column ">
           <p className="text-uppercase letter-spacing mt-5"  style={{color:'hsl(38, 61%, 73%)'}} >OUR STORY</p>
              <img src={separator} alt="" style={{width:"100px"}} />
              <h1 className="text-white text-center" style={{fontSize:"60px"}}>Every Flavor Tells a Story</h1>
              <p className="text-white">
              Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.
              </p>
              <p className="text-white">Book Through Call</p>
              <p  style={{color:'hsl(38, 61%, 73%)'}}>+80 (400) 123 4567</p>
            <button className="main-btn text-uppercase mt-4">Read More</button>
           </div>
       
        <div className="position-relative col-lg-6 mt-5 "> 
              <img src={about2} alt="" />
              {/* <div className="col-lg-4 flex-column position-relative  d-flex img-hover justify-content-center align-items-center img-move2" >
                    <img src={pattern} alt="" className="img-fluid img1"  width={100}/>
                    <img src={about1} alt="" className=" img-move4" width={200}/>
              </div> */}
              <div className=" position-relative img-move3">
                <div className="">
                  <img src={badge1} alt="" className="rotate-img" />
                  <img src={badge2} alt="" className="img-badge" />
                </div>
              </div>
         </div>
        
       </div>
     </div>


    <div className="container-fluid " >
      <div className="row">
        <div className="col-lg-6">
          <img src={dishbanner} alt="" className="img-fluid"/>
        </div>
        <div className="col-lg-6  flex-center gap-5 position-relative">
          <img src={badge3} alt="" className="img-move5 img-fluid"/>
          <div className="resp-container">
              <p className="text-uppercase letter-spacing mt-5" style={{color:'hsl(38, 61%, 73%)'}} >SPECIAL DISH</p>
              <img src={separator} alt="" style={{width:"100px"}} />
              <h1 className="text-white mt-3 mb-3" style={{fontSize:"60px"}}>Lobster Tortellini</h1>
              <p className="text-white" style={{textAlign:"justify"}}>Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.</p>
              <p className="d-flex align-items-center gap-3 fs-4 mt-3 mb-3" style={{color:"hsla(30, 3%, 34%, 1)"}}>$40.00 <span className="fs-3" style={{color:'hsl(38, 61%, 73%)'}}>$20.00</span></p>
              <button className="main-btn">View All menu</button>
          </div>
          <img src={shape4} alt="" className="img-fluid updown"/>
        </div>
      </div>
    </div>


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
  );
};

export default Home;
