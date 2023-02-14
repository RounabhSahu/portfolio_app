import React, {useEffect} from 'react';
import BlinkBox from "./Components/BlinkBox";
import Typewriter from 'typewriter-effect';
import Star from './Components/star'
import './Components/ufo.png'
const App = () => {

    return (<div className="w-full h-screen p-0 m-0 bg-gradient-to-b   to-sky-800/20 from-transparent">
            <BlinkBox speed={100} percent={0.45} width={20} radii={"7%"}/>
        {/*className="flex flex-col items-center justify-center px-4 py-2 text-sky-300 relative mx-auto border-y rounded border-green w-fit"*/}
        <div className="top-1/4 relative items-center justify-center px-4 py-2 text-sky-300 mx-auto w-fit">
            <div className="h-64 w-64 mx-auto -mb-20 duration-200 animation-bounce"><Star></Star></div>
            <div>
                <h1 className="text-center text-sky-200/70 my-2 text-lg">Hi, I am
                    <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300 font-extrabold"> Rounabh Sahu
                    </span>
                </h1>
            </div>

            <div className="text-center px-4 py-2 text-sky-300 mx-auto border-y rounded border-green w-fit text-lg w-[300px]">
                <Typewriter
                    options={{loop: true}}
                    onInit={(typewriter) => {
                        typewriter.typeString('Hello World!')
                            .callFunction(() => {
                                // console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .deleteAll()
                            .callFunction(() => {
                                // console.log('All strings were deleted');
                            })
                            .start();
                    }}
                />
            </div>





            </div>
            {/*<div className="h-64 w-64"><Star percentage={70} topic={'helo'} time={1} radius={30} innerCircleWidth={4}/></div>*/}

            {/*<Star></Star>*/}
        </div>);
};

export default App;
