export default function Heading() {
    return (
        <div className="flex top-0 bg-white h-24 w-full">
            <p className="font-kanit font-semibold non-italic text-4xl flex items-center align-middle h-full pl-5">Tyres</p>
            <p className="font-kanit font-medium non-italic text-2xl flex items-center align-middle h-full ml-auto mr-1">Current Selected Driver:</p>
            <div className="bg-[#F29E4C] my-4 rounded-2xl mr-6">
                <p className="font-kanit non-italic font-semibold text-4xl flex items-center align-middle h-full p-2.5">Hamilton</p>
            </div>
        </div>
    );
}