
import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../Assets/Logo';
import Apple from '../Assets/AppleIcon.png';
import Android from '../Assets/PlayStore.png';

const Footer = () => {

  return (
    <>
      <div className="Footer flex flex-col h-full lg:h-[298px] w-full justify-between bg-[#FAFAFA]">
        <div className='flex flex-col lg:flex-row h-full items-center justify-center lg:justify-between  px-[80px] pt-[32px] lg:pt-0'>
          <div className='flex flex-col items-center justify-start'>
            <a href="/" className="ml-6 sm:ml-0 cursor-pointer">
              <Logo />
            </a>
          </div>
          <div className='flex flex-col items-center lg:items-start mt-[32px] lg:mt-0 gap-[6px] lg:gap-[20px]'>
            <p className='text-[18px] font-bold leading-[28px] font-Mulish mb-1 lg:mb-0'>Quick Links</p>
            <Link to="/terms-of-use" className=' text-[18px] md:text-2xl lg:text-base font-normal font-Mulish text-[#999999] hover:text-[#333333] mb-1 lg:mb-0'>Terms Of Use</Link>
            <Link to="/privacy-policy/#privacy-policy-id" className=' text-[18px] md:text-2xl lg:text-base font-normal font-Mulish text-[#999999] hover:text-[#333333] mb-1 lg:mb-0'>Privacy Policy</Link>
          </div>
          <div className='flex flex-col items-center lg:items-start justify-end mt-[24px] lg:mt-0 mb-[28px]'>
            <p className='text-[18px] font-bold leading-[28px] font-Mulish mb-[16px]'>Download App</p>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <a alt="Play Store" href="https://play.google.com/">
                <div className='flex flex-row h-[48px] w-[160px] bg-[#000000] rounded-[10px] cursor-pointer justify-center'>
                  <img alt="Google play" src={Android} className='my-2' />
                  <div className='flex flex-col items-start justify-center ml-[10px] py-3'>
                    <p className=' text-[8px] font-bold font-Mulish text-[#ffffff]'>GET IT ON</p>
                    <p className=' text-base font-semibold font-Mulish text-[#ffffff]'>Google Play</p>
                  </div>
                </div>
              </a>
              <a alt="Play Store" href="https://www.apple.com/in/app-store/">
                <div className='flex flex-row h-[48px] w-[160px] bg-[#000000] rounded-[10px] cursor-pointer justify-center'>
                  <img alt="App Store" src={Apple} className='my-1' width="20%" />
                  <div className='flex flex-col items-start justify-center ml-[10px] py-3'>
                    <p className=' text-[8px] font-bold font-Mulish text-[#ffffff]'>DOWNLOAD ON THE</p>
                    <p className=' text-base font-semibold font-Mulish text-[#ffffff]'>App Store</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center h-full lg:h-[60px] border-t border-t-[#F1F1F1]  px-[80px]'>
          <p className=' text-[18px] md:text-2xl lg:text-base text-center lg:text-left font-normal font-Mulish text-[#999999] mb-5 lg:mb-0 mt-5 lg:mt-0'>© 2022 Escape Planner Pvt Ltd. All rights reserved</p>
          <div className='socialLinks flex flex-row items-center justify-end mb-[24px] lg:mb-0 gap-[22px]'>
            <InstagramIcon alt="Instagram" width="18px" className='text-[#CCCCCC] hover:text-[#919191] cursor-pointer' />
            <FacebookIcon alt="Facebook" width="18px" className='text-[#CCCCCC] hover:text-[#919191] cursor-pointer' />
            <LinkedInIcon alt="LinkedIn" width="18px" className='text-[#CCCCCC] hover:text-[#919191] cursor-pointer' />
            <TwitterIcon alt="Twitter" width="18px" className='text-[#CCCCCC] hover:text-[#919191] cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;