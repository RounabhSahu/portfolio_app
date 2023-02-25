import React, {useEffect, useRef, useState} from 'react';
import Header from "./Header";
import UfoAnime from "./UfoAnime";
import TypeIt from "typeit-react";
import {FiGithub,FiLinkedin,} from "react-icons/fi";
import site from './site-bg.jpg';

const Banner = () => {

    return (
        <div
            className='section relative flex flex-row justify-center overflow-hidden h-screen bg-cover bg-opacity-5 z-10'


            id='home'>
            <div
                className='absolute bg-cover h-screen w-full bg-center bg-cover'
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0)), url(${site})`,
                    zIndex:-10,
                    opacity: 0.3
                }}
            ></div>
            <Header />
            <div className='-mt-28'>
                <div className='w-[250px] h-40 md:w-[350px] md:-ml-10 duration-200 animation-bounce md:h-52 z-0 '>
                    <UfoAnime/>
                </div>
                <div className='text-3xl md:text-6xl font-bold'>
                    ROUNABH SAHU
                    <br/>

                </div>
                <div className='z-10 md:text-3xl mt-4'>


                    <TypeIt
                        getBeforeInit={(instance) => {

                            instance
                                .type('<span>I am a <span class="text-blue-400">Developer</span></span>')
                                .pause(1000)
                                .delete(9)
                                .pause(500)
                                .type('<span class="text-yellow-400">Web Developer</span>')
                                .pause(1000)
                                .delete(13)
                                .pause(500)
                                .type('<span class="text-lime-400">Designer</span>')
                                .pause(1000)
                                .delete(8)
                                .pause(500)
                                .type('<span class="text-pink-400">UI/UX Designer</span>')
                                .pause(1000)
                                .delete(21)
                                .type('<span class="text-yellow-400"><i>CODE&nbsp;&nbsp;&nbsp;</i></span>')
                                .pause(500)
                                .type('<span class="text-pink-400"> " bring ideas to life&nbsp;"</span>')
                                .pause(3000)
                                .go();
                            return instance;
                        }}

                        options={{ speed: 100 ,loop:true}}

                    />
                <div className='flex flex-row mt-8 justify-start space-x-10'>

                    <FiGithub className='z-50 hover:scale-125 transition-all hover:-translate-y-3 hover:text-lime-400 duration-700 ease-in-out'/>


                    <FiLinkedin className='z-50 hover:scale-125 transition-all hover:-translate-y-3 hover:text-sky-400 duration-700 ease-in-out'/>
                </div>


                </div>
            </div>
            <div className='hidden md:flex'>
                <img src={require(`./profile.png`)} alt="" className='h-[600px]'/>
            </div>
        </div>
    );
};

export default Banner;
