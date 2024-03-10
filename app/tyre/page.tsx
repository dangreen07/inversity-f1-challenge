import React from "react";
import Heading from "../ui/heading";
import DataBox from "../components/databox";
import TirePressures from "../components/tire_pressures";
import TirePerformanceGraph from "../components/tire_performance";

export default function TyrePage() {
    return (
        <main className="flex flex-col w-full h-full">
            <Heading pageName="Tyre" />
            <div className="flex flex-row justify-center items-center gap-20 pt-7">
                <div className="rounded-2xl bg-[#5386E4] w-1/4">
                    <DataBox dataName="Current Surface Temperature" data="98" symbol="°C" textBlack={true}/>
                </div>
                <div className="rounded-2xl bg-[#0F0326] w-1/4">
                    <DataBox dataName="Current Tire Compound" data="C3" symbol="" textBlack={false} />
                </div>
                <div className="rounded-2xl bg-[#8EE3EF] w-1/4">
                    <DataBox dataName="Pit Stop In" data="8" symbol=" Laps" textBlack={true}/>
                </div>
            </div>
            <div className="flex flex-row w-full">
                <TirePressures />
                <TirePerformanceGraph />
            </div>
        </main>
    );
}