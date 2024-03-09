import Link from 'next/link';

export default function SideBarItem({name, href} : { name: string, href: string }) {
    return (
        <Link
        href={href}
        className="font-karla not-italic font-medium text-2xl flex items-center text-black flex-none order-none grow-0 mb-4"
        >{name}</Link>
    );
}