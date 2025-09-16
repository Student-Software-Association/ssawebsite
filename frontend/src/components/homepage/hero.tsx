import Image from 'next/image';

export default function Hero() {
    return (
        <div 
        className=""
        >
            <Image
                src="https://placehold.co/1920x1080/png"
                alt="Hero Placeholder"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover relative"
            />
        </div>
    );
}