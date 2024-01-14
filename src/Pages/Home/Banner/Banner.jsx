import img1 from '../../../assets/slider1.jpg'
import img2 from '../../../assets/slider2.jpg'
import img3 from '../../../assets/slider3.jpg'
import img4 from '../../../assets/slider4.jpg'
import './Banner.css'

const Banner = () => {
  return (
//     <div className="carousel w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img src={img1} className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//     <div className="slider-content">
//           <h2>SnapSkill Camp</h2>
//           <p>Unleash your creativity and capture the beauty of summer!</p>
//           <a href="/camp-details" className="btn btn-primary">Learn More</a>
//         </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//     <img src={img2} className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full">
//     <img src={img3} className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a> 
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide4" className="carousel-item relative w-full">
//     <img src={img4} className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide3" className="btn btn-circle">❮</a> 
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
<div className="carousel w-full mb-8">
<div id="slide1" className="carousel-item relative w-full">
  <img src={img1} className="w-full" />
  <div className="overlay mt-16">
    <h2 className='shadow-2xl lg:text-2xl font-black sm:text-xs '>Create Your Own Portfolio</h2>
    <p>Unleash your creativity and capture the beauty of summer!</p>
    <button className="btn btn-primary">See More</button>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide4" className="btn btn-circle">❮</a> 
    <a href="#slide2" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide2" className="carousel-item relative w-full">
  <img src={img2} className="w-full" />
  <div className="overlay mt-16">
    <h2 className='shadow-2xl text-2xl font-black'>A close-up of a camera lens.</h2>
    <p>Our experienced instructors will teach you everything </p>
    <button className="btn btn-primary">See More</button>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a> 
    <a href="#slide3" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
  <img src={img3} className="w-full" />
  <div className="overlay mt-16">
    <h2 className='shadow-2xl text-2xl font-black'>Sign Up Today!</h2>
    <p>Space is limited, so sign up today!</p>
    <button className="btn btn-primary">See More</button>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle">❮</a> 
    <a href="#slide4" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide4" className="carousel-item relative w-full">
  <img src={img4} className="w-full" />
  <div className="overlay mt-16">
    <h2 className='shadow-2xl text-2xl font-black'>Summer Photography Camp</h2>
    <p>Unleash your creativity and capture the beauty of summer!</p>
    <button className="btn btn-primary">See More</button>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide3" className="btn btn-circle">❮</a> 
    <a href="#slide1" className="btn btn-circle">❯</a>
  </div>
</div> 
</div>
  );
}

export default Banner;
