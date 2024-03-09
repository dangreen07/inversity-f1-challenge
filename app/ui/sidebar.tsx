import Image from 'next/image'

export default function Sidebar() {
    return (
        <div className="absolute w-1/5 h-full bg-[#61FF7E]">
            <Image 
                    src="/PrecisionPit Prometrics.png"
                    width={550}
                    height={275}
                    quality={100}
                    alt="A Logo for the company"
                    className="absolute top-0 left-0"
            />
            <div className=""></div>
        </div>
    );
}