import Image from 'next/image'
import Link from 'next/link';
import SideBarItem from '../components/sidebar-item';

export default function Sidebar() {
    return (
        <div className="w-1/5 h-dvh bg-[#61FF7E]" role="sidebar">
            <Image 
                    src="/Logo.png"
                    width={550}
                    height={275}
                    quality={100}
                    alt="A Logo for the company"
                    className="relative top-0 left-0"
            />
            <div className="flex flex-col items-start p-0 gap-2.5 left-8 relative">
                <SideBarItem name="Overview" href="/" />
                <SideBarItem name="Tire" href="/tire" />
                <SideBarItem name="Track" href="/track" />
                <SideBarItem name="Weather" href="/weather" />
            </div>
        </div>
    );
}