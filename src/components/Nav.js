import React from 'react';
import {BiClipboard, BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData,BsBriefcase,BsChatSquare} from "react-icons/bs";
import { Link } from 'react-scroll'
const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
            <div className='container mx-auto'>
                <div className='w-full bg-gradient-to-r from-black/20 via-black/70 to-black/20
                rounded-full max-w-[460px] h-[80px] mx-auto px-5 flex justify-between items-center
                text-2xl text-white/50 border-x-4 border-slate-900'>
                    <Link
                        to='home'
                        activeClass={'active'}
                        smooth={true}
                        spy={true}
                        classname='cursor-pointer flex items-center justify-center'>
                        <BiHomeAlt className='scale-[1.2] hover:scale-150 text-sky-200'/>
                    </Link>
                    <Link
                        to='about'
                        activeClass={'active'}
                        smooth={true}
                        spy={true}
                        classname='cursor-pointer flex items-center justify-center'>
                        <BiUser className='scale-[1.25] hover:scale-[1.75] text-sky-200'/>
                    </Link>
                    <Link
                        to='work'
                        activeClass={'active'}
                        smooth={true}
                        spy={true}
                        classname='cursor-pointer flex items-center justify-center'>
                        <BsClipboardData
                            className='scale-[1.1] hover:scale-150 text-sky-200'/>
                    </Link>
                    <Link
                        to='services'
                        activeClass={'active'}
                        smooth={true}
                        spy={true}
                        classname='cursor-pointer flex items-center justify-center'>
                        <BsBriefcase className='scale-[1.1] hover:scale-150 text-sky-200'/>
                    </Link>
                    <Link
                        to='contact'
                        activeClass={'active'}
                        smooth={true}
                        spy={true}
                        classname='cursor-pointer flex items-center justify-center'>
                        <BsChatSquare className='scale-[1.1] hover:scale-150 text-sky-200'/>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
