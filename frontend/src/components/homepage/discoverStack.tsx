"use client";
import ScrollStack, {ScrollStackItem} from '../ScrollStack';
import { ReactNode, ReactElement, useState } from 'react';
import { H2, H3 } from '../Typographies';

export interface DiscoverStackItemProps {
    desc: string;
    num: number;
    imgUrl: string;
    itemClassName?: string;
    numColor?: string;
    descColor?: string;
    children?: ReactNode;
}

export const DiscoverStackItem: React.FC<DiscoverStackItemProps> = ({
    desc,
    num,
    imgUrl,
    itemClassName = '', 
    numColor = '#FFFFFF0D',
    descColor = '#F8F01E',
    children,
}) => (
    <ScrollStackItem itemClassName={`
                                    flex flex-col
                                    w-[calc(90vw)] max-w-[90vw]
                                    h-[calc[80vh]] max-w-[80vh]
                                    mx-auto pt-[2.5vh] pb-[2.5vh] pr-[5vw] pl-[5vw] 
                                    bg-[${imgUrl}] 
                                    bg-no-repeat bg-center bg-contain
                                    ${itemClassName}`.trim()} 
    >
        {/* z index is here to make sure the shadow is between the image and the text */}
        <div className="absolute z-0 inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div> {/*Shadow overlay */}
        <h3 style={{color: numColor}} className={`absolute z-1 font-bold text-4xl right-3 top-35`}>{num}</h3> 
        <p style={{color: descColor}} className={`z-1 mt-auto`}>{desc}</p>
        {children}
    </ScrollStackItem>
);

export interface DiscoverStackProps {
    children?: ReactElement<DiscoverStackItemProps> | ReactElement<DiscoverStackItemProps>[]; // Only accepts DiscoverStackItem
    descriptions?: [string, string, string];
};


function DiscoverStack({
    descriptions = ["Browse what our members are building, real-world apps, bots, and creative experiments from students just like you.",
                    "Join coding workshops, community nights, and speaker sessions. Build skills and connect with other devs.",
                    "Whether you're a beginner or a builder, there’s a place for you. Join our Discord, find a project, or attend your first meetup."], 
    children
} : DiscoverStackProps) {

    let testBrdr = "border-cyan-400 border-2 border-solid"; {/* This is purely for testing, remove once no longer useful or the component is done*/ }
    

    // const [stackComplete, setStackComplete] = useState(false); 
    return (
        <div className={`m-0 p-0 flex flex-col h-[100vh]  `}>
            <header className={`flex flex-col items-center h-[20vh] `}>
                <H2 className={`text-white w-[76%] `}>
                    <span className={`block font-medium`}>Discover The</span> Software Society
                </H2>
                <h3 className={`block text-white w-[76%] text-base font-normal`}>
                    Built by students. For students. Powered by curiosity.
                </h3>
            </header>
            {/* <div className={`${stackComplete ? '' : 'overflow-hidden'} block`}> */}
            <ScrollStack 
                className = {`block p-0 max-x-w-[100vw] overflow-x-hidden overflow-y-hidden overscroll-auto ${testBrdr}`}
                itemDistance={100}
                // useWindowScroll={true} 
                itemStackDistance={30}   
                scaleEndPosition='0%' 
            >
                <DiscoverStackItem desc={descriptions[0]} num={1} imgUrl='url(https://cdn-icons-png.flaticon.com/512/4838/4838856.png)' itemClassName={``}/>
                <DiscoverStackItem desc={descriptions[1]} num={2} imgUrl='url(https://cdn-icons-png.flaticon.com/512/4838/4838856.png)' itemClassName={``}/>
                <DiscoverStackItem desc={descriptions[2]} num={3} imgUrl='url(https://cdn-icons-png.flaticon.com/512/4838/4838856.png)' itemClassName={``}/>
            </ScrollStack>
            {children}
        </div>
    );
}


export default DiscoverStack;