import DataBox from "./components/databox";
import Heading from "./ui/heading";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <Heading pageName="Dashboard" />
      <div className="flex flex-row justify-center items-center gap-20 pt-7">
          <div className="rounded-2xl bg-[#5386E4] w-1/4">
            <DataBox dataName="Current RPM" data="14,560" symbol="" textBlack={true}/>
          </div>
          <div className="rounded-2xl bg-[#0F0326] w-1/4">
            <DataBox dataName="Position" data="5" symbol="" textBlack={false} />
          </div>
          <div className="rounded-2xl bg-[#8EE3EF] w-1/4">
            <DataBox dataName="Completed Laps:" data="9" symbol=" Laps" textBlack={true}/>
          </div>
      </div>
      <div className="flex w-full justify-center items-center mt-5">
      <div className="flex flex-col rounded-2xl h-full mx-6 bg-white w-1/2">
        <p className="text-3xl font-kanit not-italic font-normal flex items-center justify-center">Current Driver Position</p>
        <div className="justify-center w-full items-center flex">
          <Image src="/MonacoTrack.png" width={480} height={200} alt="Image of monaco f1 track" />
        </div>
      </div>
      </div>
    </main>
  );
}
