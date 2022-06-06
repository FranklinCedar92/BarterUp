import React from 'react';


const Footer = () => {
return (
    <footer className="">
        <div className="container text-center footer title-font">
            &copy;{new Date().getFullYear()} by Franklin Brown, 
                                                Taylor Vaughn,
                                                Angel Sanchez,
                                                and Giovanna Roach
        </div>
    </footer>
    );
};

export default Footer;

