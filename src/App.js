import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import BlinkBox from "./components/BlinkBox";

const App = () => {
    return (
        <div className='bg-no-repeat bg-cover z-10 bg-site'>
            <BlinkBox percent={0.3} width={20} radii={'15%'}/>
            <Nav/>
            <Banner/>

            <About/>
            <Work/>
            <Services/>
            <Contact/>
            <div className='h-[4000px]'></div>
        </div>
    );
};

export default App;