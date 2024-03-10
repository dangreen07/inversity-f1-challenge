import { TireData } from "../tire/page";

export default async function TirePressures({latestData}: {latestData: TireData}) {
    return (
        <div className="bg-white rounded-2xl w-2/5 flex flex-col" role="tire_pressures">
            <p className="font-kanit not-italic font-medium text-5xl flex items-center justify-center">Tire Pressures</p>
            <div className="flex flex-row gap-16 justify-center items-center py-6">
                <div className="flex flex-col w-2/5 bg-[#0F0326] rounded-2xl">
                    <p className={`font-kanit non-italic font-normal text-xl items-center pl-2 pt-3 text-white`}>Front Left:</p>
                    <p className={`text-4xl font-kanit non-italic font-semibold items-center text-center p-5 text-white`}>{latestData?.frontLeftTirePressure} psi</p>
                </div>
                <div className="flex flex-col w-2/5 bg-[#8EE3EF] rounded-2xl">
                    <p className={`font-kanit non-italic font-normal text-xl items-center pl-2 pt-3 text-black`}>Front Right:</p>
                    <p className={`text-4xl font-kanit non-italic font-semibold items-center text-center p-5 text-black`}>{latestData?.frontRightTirePressure} psi</p>
                </div>
            </div>
            <div className="flex flex-row gap-16 justify-center items-center py-6">
                <div className="flex flex-col w-2/5 bg-[#8EE3EF] rounded-2xl">
                    <p className={`font-kanit non-italic font-normal text-xl items-center pl-2 pt-3 text-black`}>Back Left:</p>
                    <p className={`text-4xl font-kanit non-italic font-semibold items-center text-center p-5 text-black`}>{latestData?.backLeftTirePressure} psi</p>
                </div>
                <div className="flex flex-col w-2/5 bg-[#0F0326] rounded-2xl">
                    <p className={`font-kanit non-italic font-normal text-xl items-center pl-2 pt-3 text-white`}>Back Right:</p>
                    <p className={`text-4xl font-kanit non-italic font-semibold items-center text-center p-5 text-white`}>{latestData?.backRightTirePressure} psi</p>
                </div>
            </div>
        </div>
    );
}