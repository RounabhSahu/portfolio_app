import React from 'react';
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div className="hidden md:flex flex-row justify-between px-20 pt-8 absolute top-0 w-full font-primary">

                <span className='text-4xl bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300 text-transparent'>Rounabh Sahu</span>
                <div

                    className='font-primary px-4 py-2 text-white bg-gradient-to-r
                from-transparent to-amber-400/60 rounded-xl hover:bg-green-300/70
                transition-all duration-1000 ease-in-out hover:text-slate-900 hover:font-bold'>

                    <a href="https://www.linkedin.com/in/rounabh-sahu/" target={'_blank'}>Work with Me</a>
                </div>

        </div>
    );
};

export default Header;
