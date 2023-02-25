import React, {useEffect,useState} from 'react';
import Box from './Box';

// Use these as props to modify and make your own blinking box
//
// width --It determines the size of star container --default value 10
// speed --It determines the speed at which starts are rendered -- default 100 --max 100
// percent --It determines count of stars generated --default 1 --max 1
// radii --It determines the scaling radii of stars --default "20%" max--"100%"

const MyComponent = (props) => {
    const speed=props.speed!==undefined?100-props.speed:0;
    const wid=props.width!== undefined? props.width : 10;
    const [l,setL]=useState([1])
    const [flag,setFlag]=useState(false);
    const [flag2,setFlag2]=useState(false);
    const [sty,]=useState(props.radii!==undefined? props.radii : '20%');
    const [gr,setgr]=useState(0)
    const per=props.percent!==undefined?props.percent:0.02;

    const randomNumbers =(quantity, max)=>{
        const set = new Set()
        while(set.size < quantity) {
            set.add(Math.floor(Math.random() * max) + 1)
        }
        return Array.from(set)
    }
    let ans=[];
    useEffect(()=>{

        let ele=document.getElementById('hel');
        let a=[]
        setgr(Math.floor(ele.offsetWidth/wid))

        for (let i=1; i<Math.ceil(((ele.offsetHeight*ele.offsetWidth)/(wid*wid)));i++){
            a.push(i)
        }
        setL(a)

        setFlag(false)

        // eslint-disable-next-line react-hooks/exhaustive-deps
        ans=randomNumbers(Math.floor(l.length*per),l[l.length-1])
        setFlag2(true)

        if(flag2){

        }

    },[flag,flag2])


    useEffect(() => {
        let index=1;

        const light = (flag2)?setInterval(() => {


            if(index<ans.length) {
                let el = document.getElementById(ans[index].toString())
                el.classList.toggle('box')
                index = index + 1
            }
            else{
                clearInterval(light)
            }
        },speed):null
    }, [flag2]);

    return (
        <div
            className="m-0 p-0 w-full h-screen bg-black p-0 absolute overflow-hidden"

            id="hel"
            style={{"display": "grid", "gridTemplateColumns": "repeat(" + (gr) + ",1fr)",zIndex: 2}}>

            {flag2 && l.map((item) => <Box key={item} pid={item} sty={sty} fl={false}></Box>)}

        </div>
    );
};

export default MyComponent;
