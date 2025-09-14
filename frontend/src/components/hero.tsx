export default function Hero() {
    return (
        <div className="w-full h-screen flex flex-col font-['PP_Neue_Montreal'] relative">
            {/* Background Layer */}
            <div 
                data-layer="1 (4) 1" 
                className="absolute inset-0 w-full h-full bg-black"
            >
            </div>

            {/* Content Layer - positioned absolutely over background */}
            <div className="relative z-10 flex flex-col h-full">
                <div className="w-full flex justify-center p-4">
                    <div data-layer="Nav Items" className="NavItems w-[632px] h-6 relative">
                        <div data-layer="Student Projects" className="StudentProjects w-40 h-6 left-0 top-0 absolute text-center justify-start text-white text-xl font-normal">Student Projects</div>
                        <div data-layer="Resources" className="Resources w-28 h-6 left-[194px] top-0 absolute text-center justify-start text-white text-xl font-normal">Resources</div>
                        <div data-layer="Events" className="Events w-16 h-6 left-[351px] top-0 absolute text-center justify-start text-white text-xl font-normal">Events</div>
                        <div data-layer="Blogs" className="Blogs w-16 h-6 left-[457px] top-0 absolute text-center justify-start text-white text-xl font-normal">Blogs</div>
                        <div data-layer="About" className="About w-16 h-6 left-[564px] top-0 absolute text-center justify-start text-white text-xl font-normal">About</div>
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div data-layer="Student Software Association" className="StudentSoftwareAssociation w-[843px] h-36 text-center justify-start text-white text-8xl font-bold">Student Software Association</div>
                </div>
            </div>
        </div>
    );
}