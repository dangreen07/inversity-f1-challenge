import React from "react";
import Heading from "../ui/heading";
import DataBox from "../components/databox";
import TirePressures from "../components/tire_pressures";
import TirePerformanceGraph from "../components/tire_performance";
import { getLatestTireData } from "@/lib/data";

// Null error output object
const errorOutput = {
    id:"Error",
    surfaceTemp: 27.6,
    tireCompound: "C1",
    pitStopIn: -1,
    frontLeftTirePressure: 2,
    frontRightTirePressure: 2,
    backLeftTirePressure: 2,
    backRightTirePressure: 2,
    date: new Date("2004-10-19 10:23:54")
};


export default async function TirePage() {
    const latestData = await getLatestTireData();
    return (
        <main className="flex flex-col w-full h-full">
            <Heading pageName="Tire" />
            <div className="flex flex-row justify-center items-center gap-20 pt-7">
                <div className="rounded-2xl bg-[#5386E4] w-1/4">
                    <DataBox dataName="Current Surface Temperature" data={latestData?.surfaceTemp.toString() ?? "87"} symbol="°C" textBlack={true}/>
                </div>
                <div className="rounded-2xl bg-[#0F0326] w-1/4">
                    <DataBox dataName="Current Tire Compound" data={latestData?.tireCompound ?? "C1"} symbol="" textBlack={false} />
                </div>
                <div className="rounded-2xl bg-[#8EE3EF] w-1/4">
                    <DataBox dataName="Pit Stop In" data={latestData?.pitStopIn.toString() ?? "8"} symbol=" Laps" textBlack={true}/>
                </div>
            </div>
            <div className="flex flex-row w-full h-full gap-16 justify-center mt-5">
                <TirePressures latestData={latestData ?? errorOutput}/>
                <TirePerformanceGraph />
            </div>
        </main>
    );
}