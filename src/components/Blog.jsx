import React, { useState } from 'react'
import blog1 from './../assets/blog-1.jpg';
import blog2 from './../assets/blog-2.jpg';
import blog3 from './../assets/blog-3.jpg';
import blog4 from './../assets/blog-4.jpg';
import blog5 from './../assets/blog-5.jpg';
import blog6 from './../assets/blog-6.jpg';
import blog7 from './../assets/blog-7.jpg';
import blog8 from './../assets/blog-8.jpg';
import blog9 from './../assets/blog-9.jpg';
import blog10 from './../assets/blog10.jpg';
import blog11 from './../assets/blog11.jpg';
import blog12 from './../assets/blog12.jpg';
import { FaStar } from 'react-icons/fa';
import popular1 from './../assets/popular1.jpg';
import popular2 from './../assets/popular2.jpg';
import popular3 from './../assets/popular3.jpg';
import popular4 from './../assets/popular4.jpg';
import popular5 from './../assets/popular5.jpg';
import popular6 from './../assets/popular6.jpg';
import popular7 from './../assets/popular7.jpg';
import popular8 from './../assets/popular8.jpg';
import popular9 from './../assets/popular9.jpg';
import receipe from './../assets/receipe.png';
import chicken1 from './../assets/chicken1.jpg';
import chicken2 from './../assets/chicken2.jpg';
import chicken3 from './../assets/chicken3.jpg';
import chicken4 from './../assets/chicken4.jpg';
import vegan1 from './../assets/vegan1.jpg';
import vegan2 from './../assets/vagean2.jpg';
import vegan3 from './../assets/vegan3.jpg';
import vegan4 from './../assets/vegan4.jpg';
import easy1 from './../assets/easy1.jpg';
import easy2 from './../assets/easy2.jpg';
import easy3 from './../assets/easy3.jpg';
import easy4 from './../assets/easy4.jpg';
import pop1 from './../assets/popular-1.jpg';
import pop2 from './../assets/popular-2.jpg';
import pop3 from './../assets/pop3.jpg';
import pop4 from './../assets/pop4.jpg';
import teacher1 from './../assets/teacher1.jpg';
import teacherProfile from './../assets/teacher-circle.jpg';
import recipebook from './../assets/recipeBook.png';



const Blog = () => {
  const [blog,setBlog] = useState("chicken")
  return (
    <div className=''>
      <div className="container-fluid bg-black">
        <div className="row " style={{padding:"0 40px"}}>
            <h6 className='text-white ultra-regular blog-sub-heading'>no food no life</h6>
            <h1 className='text-white mb-3 ultra-regular blog-heading overflow-y-hidden' style={{fontSize:"70px"}}>i am a food blog</h1>
            <hr className='text-white'/>

            <div className="col-lg-8 position-relative ">
              <img src={blog1} alt="" className='img-fluid w-100 object-fit-cover' style={{height:"500px"}}/>
              <div className='position-absolute' style={{bottom:"10%",left:"10%"
              }}>
                <p className='text-white bg-black d-inline-block  p-1 fw-bolder  m-0'>Mexican Food</p>
                <p className='text-black bg-light  fs-4 ultra-regular m-0'>Elote(Mexican Street</p>
                <p className='text-black bg-light d-inline-block ultra-regular fs-4 '>Corn) Recipe</p>
              </div>
            </div>
            <div className="col-lg-4 position-relative ">
              <img src={blog2} alt="" className='img-fluid object-fit-cover' style={{height:"500px"}}/>
              <div className='position-absolute ' style={{bottom:"10%",left:"10%"
              }}>
                <p className='text-white bg-black d-inline-block p-1 fw-bolder  m-0' >Baking</p>
                <p className='text-black bg-light  ultra-regular fs-4'>Cinnamon Rolls</p>
              </div>
            </div>

            <div className="col-lg-4 position-relative mt-4">
              <img src={blog3} alt="" className='img-fluid object-fit-cover' style={{height:"500px"}}/>
              <div className='position-absolute ' style={{bottom:"10%",left:"10%"
              }}>
                <p className='text-white bg-black d-inline-block p-1 fw-bolder  m-0' >Pasta</p>
                <p className='text-black bg-light m-0 ultra-regular fs-4'>Easiest Homemade</p>
                <p className='text-black bg-light d-inline-block ultra-regular fs-4 m-0'>Velveeta Mac</p>
                <p className='text-black bg-light w-50 ultra-regular fs-4'>Cheese</p>
              </div>
            </div>

            <div className="col-lg-8 position-relative mt-4">
              <img src={blog4} alt="" className='img-fluid w-100 object-fit-cover' style={{height:"500px"}}/>
              <div className='position-absolute bg-black p-3' style={{top:"10%",left:"5%" ,height:"250px" , width:"280px"
              }}>
                <p className='text-white  p-1 fw-bold  m-0'>Japenese Food</p>
                <p className='bg-white d-inline-block  fw-bolder'>Sushi Blake</p>
                <p className='text-white w-100 d-block  fw-bolder fs-4 m-0'>A savary,creamy, and, super satisfying deconstructed California and baked in a casserole</p>
              </div>
            </div>

            <div className="col-lg-4 position-relative mt-4">
              <img src={blog5} alt="" className='img-fluid object-fit-cover' style={{height:"500px"}}/>
              <div className='position-absolute ' style={{bottom:"10%",left:"10%"
              }}>
                <p className='text-white bg-black d-inline-block p-1 fw-bolder  m-0' >Restaurant Recipes</p>
                <p className='text-black bg-light  ultra-regular fs-4 m-0'>CrunchWrap</p>
              </div>
            </div>
            <div className="col-lg-4 position-relative mt-4 ">
              <img src={blog6} alt="" className='img-fluid object-fit-cover opacity-50' style={{height:"500px"}}/>
              <div className='position-absolute ' style={{bottom:"10%",left:"10%"
              }}>
                <p className='text-white bg-black d-inline-block p-1 fw-bolder  m-0' >Chinese Food</p>
                <p className='text-black bg-light m-0 ultra-regular fs-4'>Mofu Tofu</p>
              </div>
            </div>
            <div className="col-lg-4 position-relative mt-4">
              <img src={blog7} alt="" className='img-fluid object-fit-cover' style={{height:"500px"}}/>
              <div className='position-absolute ' style={{bottom:"10%",left:"10%"
              }}>
                <p className='text-white bg-black d-inline-block p-1 fw-bolder  m-0' >Korean Food</p>
                <p className='text-black bg-light m-0 ultra-regular fs-4'>Buldak Carbonara</p>
              </div>
            </div>

            <div className="col-lg-8 position-relative mt-4">
              <img src={blog8} alt="" className='img-fluid w-100 object-fit-cover' style={{height:"700px"}}/>
              <div className='position-absolute' style={{bottom:"10%",left:"10%"
              }}>
                <p className='text-white bg-black d-inline-block  p-1 fw-bolder  m-0'>Japenese Food</p>
                <p className='text-black bg-light w-25 fs-4 ultra-regular m-0'>Chicken Katsu</p>
                <p className='text-black bg-light d-inline-block ultra-regular w-50 fs-4 '>Juicy, tender chicken,with crispy pankobreadcrumbs,on the outside,fluffy riceand crunchycabbage.It's a super easy dream meal.</p>
              </div>
            </div>
            <div className="col-lg-4 position-relative mt-4">
              <img src={blog9} alt="" className='img-fluid object-fit-cover' style={{height:"700px"}}/>
              <div className='position-absolute ' style={{bottom:"10%",left:"10%"
              }}>
                <p className='text-white bg-black d-inline-block p-1 fw-bolder  m-0' >30 Minutes or less</p>
                <p className='text-black bg-light  ultra-regular fs-4 m-0'>Easy 2 minute</p>
                <p className='text-black bg-light  ultra-regular fs-4 w-75'>Mug Cake</p>
              </div>
            </div>

            <div className="col-lg-4 position-relative mt-4">
              <img src={blog10} alt="" className='img-fluid object-fit-cover' style={{height:"500px"}}/>
              <div className='position-absolute ' style={{bottom:"10%",left:"10%"
              }}>
                <p className='text-white bg-black d-inline-block p-1 fw-bolder  m-0' >Easy</p>
                <p className='text-black bg-light m-0 ultra-regular fs-4'>TikTok Tortilla Wrap</p>
              </div>
            </div>

            <div className="col-lg-4 position-relative mt-4">
              <img src={blog11} alt="" className='img-fluid object-fit-cover' style={{height:"500px"}}/>
              <div className='position-absolute ' style={{bottom:"10%",left:"10%"
              }}>
                <p className='text-white bg-black d-inline-block p-1 fw-bolder  m-0' >Baking</p>
                <p className='text-black bg-light m-0 ultra-regular fs-4'>TikTok Cinnamon Rolls</p>
              </div>
            </div>

            <div className="col-lg-4 position-relative mt-4">
              <img src={blog12} alt="" className='img-fluid object-fit-cover opacity-50' style={{height:"500px"}}/>
              <div className='position-absolute ' style={{bottom:"10%",left:"10%"
              }}>
                <p className='text-white bg-black d-inline-block p-1 fw-bolder  m-0' >Chinese Tke Out</p>
                <p className='text-black bg-light m-0 ultra-regular fs-4 w-75'>The Best kung Pao Chicken</p>
              </div>
            </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row" style={{padding:"0 40px" ,backgroundColor:"hsla(210, 4%, 9%, 1)"}}>
         <h2 className='text-white fw-bolder my-5'>Most popular Recipes This Week</h2>
         <div className="col-lg-8">
            <div className='d-flex flex-wrap  gap-3 mt-3 bg-black'>
                <img src={popular1} alt="" className='img-fluid object-fit-cover' style={{width:"250px",height:"250px"}}/>
                <div className='text-white flex-center gap-4'>
                  <h1 style={{fontSize:"80px"}}>1</h1>
                  <div>
                  <p className='text-white bg-black d-inline-block  p-1 fw-bolder  m-0'>Japanese Food</p>
                  <p className='m-0 fs-1 fw-bolder'>Japanese PanCakes</p>
                  <div className='rating m-0 d-flex gap-3'>
                    <p>Rating- 4.74</p>
                     <p>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                     </p>
                  </div>
                  </div>
                </div>
            </div>
            <div className='d-flex flex-wrap bg-black gap-3 mt-3'>
                <img src={popular2} alt="" className='img-fluid object-fit-cover' style={{width:"250px",height:"250px"}}/>
                <div className='text-white flex-center gap-4'>
                  <h1 style={{fontSize:"80px"}}>2</h1>
                  <div>
                  <p className='text-white bg-black d-inline-block  p-1 fw-bolder  m-0'>Japanese Food</p>
                  <p className='m-0 fs-1 fw-bolder'>Tiktok Ramen</p>
                  <div className='rating m-0 d-flex gap-3'>
                    <p>Rating- 4.54</p>
                     <p>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                     </p>
                  </div>
                  </div>
                </div>
            </div>
            <div className='d-flex flex-wrap bg-black gap-3 mt-3'>
                <img src={popular3} alt="" className='img-fluid object-fit-cover' style={{width:"250px",height:"250px"}}/>
                <div className='text-white flex-center gap-4'>
                  <h1 style={{fontSize:"80px"}}>3</h1>
                  <div>
                  <p className='text-white bg-black d-inline-block  p-1 fw-bolder  m-0'>Japanese Food</p>
                  <p className='m-0 fs-1 fw-bolder'>Easiest Paella Ever</p>
                  <div className='rating m-0 d-flex gap-3'>
                    <p>Rating- 4.94</p>
                     <p>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                     </p>
                  </div>
                  </div>
                </div>
            </div>
            <div className='d-flex flex-wrap bg-black gap-3 mt-3'>
                <img src={popular4} alt="" className='img-fluid object-fit-cover' style={{width:"250px",height:"250px"}}/>
                <div className='text-white flex-center gap-4'>
                  <h1 style={{fontSize:"80px"}}>4</h1>
                  <div>
                  <p className='text-white bg-black d-inline-block  p-1 fw-bolder  m-0'>Japanese Food</p>
                  <p className='m-0 fs-1 fw-bolder'>A Breakdown of the Full English Breakfast</p>
                  <div className='rating m-0 d-flex gap-3'>
                    <p>Rating- 5.0</p>
                     <p>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                     </p>
                  </div>
                  </div>
                </div>
            </div>
            <div className='d-flex flex-wrap bg-black gap-3 mt-3'>
                <img src={popular5} alt="" className='img-fluid object-fit-cover' style={{width:"250px",height:"250px"}}/>
                <div className='text-white flex-center gap-4'>
                  <h1 style={{fontSize:"80px"}}>5</h1>
                  <div>
                  <p className='text-white bg-black d-inline-block  p-1 fw-bolder  m-0'>Japanese Food</p>
                  <p className='m-0 fs-1 fw-bolder'>Easy 2 Minute Chocolate Mug Cake</p>
                  <div className='rating m-0 d-flex gap-3'>
                    <p>Rating- 4.24</p>
                     <p>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                     </p>
                  </div>
                  </div>
                </div>
            </div>
            <div className='d-flex flex-wrap bg-black gap-3 mt-3'>
                <img src={popular6} alt="" className='img-fluid object-fit-cover' style={{width:"250px",height:"250px"}}/>
                <div className='text-white flex-center gap-4'>
                  <h1 style={{fontSize:"80px"}}>6</h1>
                  <div>
                  <p className='text-white bg-black d-inline-block  p-1 fw-bolder  m-0'>Japanese Food</p>
                  <p className='m-0 fs-1 fw-bolder'>The Best Instant Pot Pho</p>
                  <div className='rating m-0 d-flex gap-3'>
                    <p>Rating- 4.5</p>
                     <p>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                     </p>
                  </div>
                  </div>
                </div>
            </div>
            <div className='d-flex flex-wrap bg-black gap-3 mt-3'>
                <img src={popular7} alt="" className='img-fluid object-fit-cover' style={{width:"250px",height:"250px"}}/>
                <div className='text-white flex-center gap-4'>
                  <h1 style={{fontSize:"80px"}}>7</h1>
                  <div>
                  <p className='text-white bg-black d-inline-block  p-1 fw-bolder  m-0'>Japanese Food</p>
                  <p className='m-0 fs-1 fw-bolder'>Easiest Ever Instant Pot Osso Buco</p>
                  <div className='rating m-0 d-flex gap-3'>
                    <p>Rating- 4.9</p>
                     <p>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                     </p>
                  </div>
                  </div>
                </div>
            </div>
            <div className='d-flex flex-wrap bg-black gap-3 mt-3'>
                <img src={popular8} alt="" className='img-fluid object-fit-cover' style={{width:"250px",height:"250px"}}/>
                <div className='text-white flex-center gap-4'>
                  <h1 style={{fontSize:"80px"}}>8</h1>
                  <div>
                  <p className='text-white bg-black d-inline-block  p-1 fw-bolder  m-0'>Japanese Food</p>
                  <p className='m-0 fs-1 fw-bolder'>Sushi Bake</p>
                  <div className='rating m-0 d-flex gap-3'>
                    <p>Rating- 4.8</p>
                     <p>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                     </p>
                  </div>
                  </div>
                </div>
            </div>
            <div className='d-flex flex-wrap bg-black gap-3 mt-3'>
                <img src={popular9} alt="" className='img-fluid object-fit-cover' style={{width:"250px",height:"250px"}}/>
                <div className='text-white flex-center gap-4'>
                  <h1 style={{fontSize:"80px"}}>9</h1>
                  <div>
                  <p className='text-white bg-black d-inline-block  p-1 fw-bolder  m-0'>Japanese Food</p>
                  <p className='m-0 fs-1 fw-bolder'>Tiktok Green Goddess Salad</p>
                  <div className='rating m-0 d-flex gap-3'>
                    <p>Rating- 4.6</p>
                     <p>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                     </p>
                  </div>
                  </div>
                </div>
            </div>
         </div>
         <div className="col-lg-4 text-white">
           <img src={receipe} alt="" className='img-fluid mt-4'/>
           <div className='recipe'>
             <p className='bg-black text-center fs-2 fw-bold'>RECIPE COLLECTION</p>
             <div className='text-center flex-between m-0  mt-1' style={{padding:"0 30px"}}>
              <p className='fs-3'> <span className='  fs-4 mx-2'>1.</span> Instant Pot Recipes</p>
              <p className='fs-5'>68</p>
             </div>
             <div className='text-center flex-between m-0  mt-1' style={{padding:"0 30px"}}>
              <p className='fs-3'> <span className=' mx-2 fs-4'>2.</span>Vegan Recipes</p>
              <p className='fs-5'>199</p>
             </div>
             <div className='text-center flex-between m-0  mt-1' style={{padding:"0 30px"}}>
              <p className='fs-3'> <span className='mx-2  fs-4'>3.</span>Meal prep Recipes</p>
              <p className='fs-5'>35</p>
             </div>
             <div className='text-center flex-between m-0  mt-1' style={{padding:"0 30px"}}>
              <p className='fs-3'> <span className='mx-2  fs-4'>4.</span>Quick & Easy Recipes</p>
              <p className='fs-5'>465</p>
             </div>
             <div className='text-center flex-between m-0  mt-1' style={{padding:"0 30px"}}>
              <p className='fs-3'> <span className='mx-2  fs-4'>5.</span>Pasta Recipes</p>
              <p className='fs-5'>174</p>
             </div>
             <div className='text-center flex-between m-0  mt-1 ' style={{padding:"0 30px"}}>
              <p className='fs-3'> <span className=' mx-2 fs-4'>6.</span> Soup Recipes</p>
              <p className='fs-5'>68</p>
             </div>
             <div className='text-center flex-between m-0  mt-1' style={{padding:"0 30px"}}>
              <p className='fs-3'> <span className='mx-2  fs-4'>7.</span> Most Popular Recipes</p>
              <p className='fs-5'>76</p>
             </div>
           </div>
           <div>
            <div className='bg-black flex-center flex-column mt-5'>
              <img src={teacherProfile} alt="" width={200} height={200} style={{borderRadius:"50%"}}/>
               <h1 className='m-0'>Hi I'm LINDSAY</h1>
               <p className='fs-4 p-2 text-align'>I'm a former 4th grade teacher, now full time blogger. My husband Bjork and I live in Minnesota. Favorite things include my camera, lake days, and dark chocolate.</p>
            </div>
            <img src={teacher1} alt="" className='img-fluid'/>
           </div>
         </div>
        </div>
      </div>

      <div className='row ' style={{padding:"0 40px" ,backgroundColor:"hsla(210, 4%, 9%, 1)"}}>
        <div className="flex-center flex-wrap text-black my-5">
          <div className={`blog-recipe ultra-regular ${blog=== 'chicken' ? "active-blog" : ""}`} onClick={(e)=>setBlog('chicken')}>Chicken</div>
          <div className={`blog-recipe ultra-regular ${blog=== 'vegan' ? "active-blog" : ""}`} onClick={(e)=>setBlog('vegan')}>Vegitarian</div>
          <div className={`blog-recipe ultra-regular ${blog=== 'easy' ? "active-blog" : ""}`} onClick={(e)=>setBlog('easy')}>Quick & Easy</div>
          <div className={`blog-recipe ultra-regular ${blog=== 'popular' ? "active-blog" : ""}`} onClick={(e)=>setBlog('popular')}>Popular</div>
        </div>

       {
          blog ==='chicken' ? 
          <div className='d-flex flex-between flex-wrap gap-2 blog-recipe-box' >
          <div className="col-lg-3  p-4  blog-recipe-container" style={{width:"390px"}} >
            <img src={chicken1} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Japanese Food</p>
            <p className='fs-4 m-0'>Chicken Katsu: Easy Air Fryer, Deep Fried, and Oven Versions</p>
            <div>
              <div className='rating m-0 d-flex gap-3' >
                 <p>Rating- 4.74</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>Juicy, tender chicken, with crispy panko breadcrumbs on the outside, fluffy rice and crunchy cabbage. It's a super easy dream meal!</p>
              </div>
          </div>
          <div className="col-lg-3  p-4  blog-recipe-container" style={{width:"390px"}}>
            <img src={chicken2} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Chinese Take out</p>
            <p className='fs-4 m-0'>The Best Kung Pao Chicken</p>
            <div>
              <div className='rating m-0 d-flex gap-3'>
                 <p>Rating- 4.94</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>This spicy, tangy, and sweet better than takeout no peanut kung pao chicken stir fry recipe is here to brighten up your weeknight (or weekend) dinners! Highly addictive and super easy to make at home.</p>
              </div>
          </div>
          <div className="col-lg-3  p-4 blog-recipe-container " style={{width:"390px"}}>
            <img src={chicken3} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Easy</p>
            <p className='fs-4'>Lemon Pepper Chicken</p>
            <div>
              <div className='rating m-0 d-flex gap-3 '>
                 <p>Rating- 4.74</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>If you’re looking for a flavorful, healthy dinner, this lemon pepper dill cous cous is the answer.</p>
              </div>
          </div>
          <div className="col-lg-3  p-4  blog-recipe-container" style={{width:"390px"}}>
            <img src={chicken4} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Air Fryer Recipes</p>
            <p className='fs-4 m-'>Korean Fried Chicken Wings</p>
            <div>
              <div className='rating m-0 d-flex gap-3'>
                 <p>Rating- 4.54</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>Make crispy crunchy Korean fried chicken in an air fryer with this easy double air fry technique.</p>
              </div>
          </div>
        </div> : ""
       }

{
          blog ==='vegan' ? 
          <div className='d-flex flex-between flex-wrap gap-2 blog-recipe-box' >
          <div className="col-lg-3  p-4  blog-recipe-container" style={{width:"390px"}} >
            <img src={vegan1} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Vegetables</p>
            <p className='fs-4 '>Honeynut Squash</p>
            <div>
              <div className='rating m-0 d-flex gap-3' >
                 <p>Rating- 4.74</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>Move over butternut, it’s time to meet your new favorite squash!</p>
              </div>
          </div>
          <div className="col-lg-3  p-4  blog-recipe-container" style={{width:"390px"}}>
            <img src={vegan2} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Japanese Food</p>
            <p className='fs-4'>Japanese Vegetable Skewers aka Vegetable Yakitori</p>
            <div>
              <div className='rating m-0 d-flex gap-3'>
                 <p>Rating- 4.8</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>If you love grilled vegetables, you’re going to love Japanese grilled vegetable yakitori.</p>
              </div>
          </div>
          <div className="col-lg-3  p-4 blog-recipe-container " style={{width:"390px"}}>
            <img src={vegan3} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Secret Ingredients</p>
            <p className='fs-4'>The Ultimate Guide to Seitan</p>
            <div>
              <div className='rating m-0 d-flex gap-3 '>
                 <p>Rating- 4.24</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>The meaty meat free alternative you never knew you loved</p>
              </div>
          </div>
          <div className="col-lg-3  p-4  blog-recipe-container" style={{width:"390px"}}>
            <img src={vegan4} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Air Fryer Recipes</p>
            <p className='fs-4'>Air Fryer Potatoes</p>
            <div>
              <div className='rating m-0 d-flex gap-3'>
                 <p>Rating- 5</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>These crispy, crunchy, garlic-onion air fryer potatoes are probably the fastest roast potatoes you’ll ever make.</p>
              </div>
          </div>
        </div> : ""
       }

{
          blog ==='easy' ? 
          <div className='d-flex flex-between flex-wrap gap-2 blog-recipe-box' >
          <div className="col-lg-3  p-4  blog-recipe-container" style={{width:"390px"}} >
            <img src={easy1} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Italian Food</p>
            <p className='fs-4'>Easiest Ever Instant Pot Osso Buco</p>
            <div>
              <div className='rating m-0 d-flex gap-3' >
                 <p>Rating- 4.74</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>It doesn’t get any easier than 6 ingredients and 1 hour of cook time.</p>
              </div>
          </div>
          <div className="col-lg-3  p-4  blog-recipe-container" style={{width:"390px"}}>
            <img src={easy2} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Chinese Food</p>
            <p className='fs-4 text-align'>Hainanese Chicken Rice: The Easiest One Pot Chicken and Rice Recipe</p>
            <div>
              <div className='rating m-0 d-flex gap-3'>
                 <p>Rating- 4.74</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>The best kind of food hug: chicken and rice</p>
              </div>
          </div>
          <div className="col-lg-3  p-4 blog-recipe-container " style={{width:"390px"}}>
            <img src={easy3} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Potato Recipes</p>
            <p className='fs-4'>Best Baked Potato</p>
            <div>
              <div className='rating m-0 d-flex gap-3 '>
                 <p>Rating- 4.94</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>The best kind of magic: comforting complex carbs!</p>
              </div>
          </div>
          <div className="col-lg-3  p-4  blog-recipe-container" style={{width:"390px"}}>
            <img src={easy4} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Tacos</p>
            <p className='fs-4'>10 Taco Recipes for You If You Love Birria Tacos</p>
            <div>
              <div className='rating m-0 d-flex gap-3'>
                 <p>Rating- 4.9</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>I think if I could live in a world with only Taco Tuesdays, I would.</p>
              </div>
          </div>
        </div> : ""
       }

{
          blog ==='popular' ? 
          <div className='d-flex flex-between flex-wrap gap-2 blog-recipe-box' >
          <div className="col-lg-3  p-4  blog-recipe-container" style={{width:"390px"}} >
            <img src={pop1} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Chinese Food</p>
            <p className='fs-4'>Classic Chinese Tomato Egg Fry</p>
            <div>
              <div className='rating m-0 d-flex gap-3' >
                 <p>Rating- 4.94</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>A simple homestyle Chinese classic: perfectly soft scrambled eggs contrasted with chunky sweet garlicky tart tomatoes.</p>
              </div>
          </div>
          <div className="col-lg-3  p-4  blog-recipe-container" style={{width:"390px"}}>
            <img src={pop2} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Air Fryer Recipes</p>
            <p className='fs-4'>Air Fryer Chicken Breasts</p>
            <div>
              <div className='rating m-0 d-flex gap-3'>
                 <p>Rating- 5</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>Make crispy crunchy Korean fried chicken in an air fryer with this easy double air fry technique.</p>
              </div>
          </div>
          <div className="col-lg-3  p-4 blog-recipe-container " style={{width:"390px"}}>
            <img src={pop3} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>Easy</p>
            <p className='fs-4'>The Easiest Falafel Recipe</p>
            <div>
              <div className='rating m-0 d-flex gap-3 '>
                 <p>Rating- 4.74</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>These falafels are like fluffy little green clouds encased in the crunchiest coating you ever laid eyes on.</p>
              </div>
          </div>
          <div className="col-lg-3  p-4  blog-recipe-container" style={{width:"390px"}}>
            <img src={pop4} alt="" className='img-fluid m-0'/>
            <p className='bg-white text-black fw-bolder d-inline-block '>10 minutes or less</p>
            <p className='fs-4'>Vegan Taiwanese Popcorn</p>
            <div>
              <div className='rating m-0 d-flex gap-3'>
                 <p>Rating- 4.54</p>
                <p>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </p>
               </div>
               <p className='text-align'>If you love falafel and you love Taiwanese popcorn chicken, you'll falafel in love with this Taiwanese popcorn chickpea snack.</p>
              </div>
          </div>
        </div> : ""
       }

       <div className='flex-center flex-wrap text-white gap-4 recipebook my-5'>
        <picture>
        <img src={recipebook} alt="" className=' object-fit-fill' width={500} height={400}/>
        </picture>
        <div style={{width:"350px"}}>
          <h3 className='fw-bolder'>PINCH OF YUM COOKBOOK</h3>
          <p className='text-align'>The eBook includes our most popular 25 recipes in a beautiful, easy to download format. Enter your email and we'll send it right over!</p>
          <div className='flex-center'>
            <input type="email" name="" id=""  placeholder='Enter your Email' className='form-control rounded-0'/>
            <button className='btn btn-warning rounded-0'>Download</button>
          </div>
        </div>
       </div>
        
      </div>
    </div>
  )
}

export default Blog
