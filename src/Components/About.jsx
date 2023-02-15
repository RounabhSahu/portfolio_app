import React from 'react';
import {motion} from "framer-motion";

const About = () => {
    const variants = {
        hidden: { opacity: 0, x: 0},
        visible: { opacity: 1, x: 0 },
    };
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <div className="text-8xl font-serif text-center top-1/2 h-screen w-full bg-black text-white">
                This is about
            </div>
        </motion.div>

    );
};

export default About;
