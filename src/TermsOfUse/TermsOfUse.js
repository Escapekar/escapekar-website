import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Logo from '../Assets/Logo';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TermsOfUse = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='flex flex-col w-full h-screen'>

      <div className="Header flex flex-row h-[100px] w-full px-5 lg:px-20 items-center justify-between bg-[#ffffff]" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.06)' }}>
        <a href="/" className=" cursor-pointer">
          <Logo />
        </a>
        <button className="bg-[#20B08F] hover:bg-[#1b967a] text-white text-base font-bold py-[8px] sm:py-[14px] px-[20px] sm:px-[46px] rounded-[4px] sm:rounded-[10px] font-Mulish" onClick={handleClickOpen}>Subscribe</button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle><p className=' text-2xl font-bold font-Mulish'>{"Subscribe"}</p></DialogTitle>
          <DialogContent>
            <p className='text-xl font-normal font-Mulish' id="alert-dialog-slide-description">
              Let's get connected for more enhanced experience
            </p>
            <input className='flex text-base font-Mulish pt-[20px] pb-[8px] w-full outline-none border-b-2' placeholder='Enter your email address' />
          </DialogContent>
          <DialogActions>
            <button className="bg-[#20B08F] hover:bg-[#1b967a] text-white text-base font-bold py-[8px] sm:py-[14px] px-[20px] sm:px-[46px] rounded-[4px] sm:rounded-[10px] font-Mulish">Subscribe</button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="Fold1 flex flex-col h-full max-w-[300px] md:max-w-[600px] lg:max-w-[740px] px-5 lg:px-20 items-center mt-5 lg:mt-20 m-auto">
        <h1 className='text-[32px] md:text-[46px] text-center lg:text-right font-bold font-Mulish'>Escapekar Terms of Use</h1>
      </div>
    </div>
  );
}

export default TermsOfUse;