import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10 mt-[600px] flex flex-col items-center">
        
        <div className="flex flex-col items-center mb-6 text-center">
            <h2 className="text-3xl">Gadget Heaven</h2>
            <p className="mt-2 text-sm md:text-base">Leading the way in cutting-edge technology and innovation</p>
            <hr className="my-4 border-t-2 border-dashed border-white w-full" />
        </div>
        
        
        <div className="hidden md:flex justify-around w-full mb-6">
            <nav className="flex flex-col items-center gap-3">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="flex flex-col items-center gap-3">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="flex flex-col items-center gap-3">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </div>
        
        
        <div className="md:hidden flex flex-col items-center mb-4">
            <nav className="flex flex-col items-center  gap-3">
                <h6 className="footer-title text-[#9538E2]">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="flex flex-col items-center  gap-3">
                <h6 className="footer-title text-[#9538E2]">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="flex flex-col items-center gap-3">
                <h6 className="footer-title text-[#9538E2]">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </div>
    
        <div className="mt-6 text-center">
            <p className="text-sm">© 2024 Gadget Heaven. All rights reserved.</p>
        </div>
    </footer>
    



    );
};

export default Footer;