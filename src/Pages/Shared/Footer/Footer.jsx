import { FaCamera, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaVoicemail, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
    return (
        <section className=' bg-primary text-white'>
        <footer className="font-CreteRound footer mt-12 p-10">
          <div>
            <FaCamera className='text-7xl'></FaCamera>
            <p>SnapSkill<br/>Grow your photography career with us</p>
            <section className='flex gap-4'>
              <a href="https://www.facebook.com/ashraful.hider/">
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube></FaYoutube>
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram></FaInstagram>
              </a>
              <a href="https://twitter.com/">
                <FaTwitter></FaTwitter>
              </a>
              <a href="https://support.google.com/phoneapp/answer/2811844?hl=en">
                <FaVoicemail></FaVoicemail>
              </a>
              <a href="https://www.linkedin.com/in/ashraful-hider-b53b5b193/">
                <FaLinkedin></FaLinkedin>
              </a>
              
              
              
              
              
            </section>
          </div> 
          <div>
            <span className="footer-title">Services</span> 
            <a className="link link-hover">Branding</a> 
            <a className="link link-hover">Design</a> 
            <a className="link link-hover">Marketing</a> 
            <a className="link link-hover">Advertisement</a>
          </div> 
          <div>
            <span className="footer-title">Company</span> 
            <a className="link link-hover">About us</a> 
            <a className="link link-hover">Contact</a> 
            <a className="link link-hover">Jobs</a> 
            <a className="link link-hover">Press kit</a>
          </div> 
          <div>
            <span className="footer-title">Legal</span> 
            <a className="link link-hover">Terms of use</a> 
            <a className="link link-hover">Privacy policy</a> 
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
        <hr />
        <p className='text-center font-medium  p-5'>&copy; {currentYear} SnapSkill, Inc. All rights reserved.</p>
        </section>
    );
};

export default Footer;