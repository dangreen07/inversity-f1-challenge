import prisma from "./prisma";

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

export async function getLatestTireData() {
    try {
        const feed = prisma.tire.findFirst({
            orderBy: {date: 'desc'}
        });
        return feed;
    } catch (error) {
        return errorOutput;
    }
    
}

export type TireData = {
    id: string;
    surfaceTemp: number;
    tireCompound: string;
    pitStopIn: number;
    frontLeftTirePressure: number;
    frontRightTirePressure: number;
    backLeftTirePressure: number;
    backRightTirePressure: number;
    date: Date;
}