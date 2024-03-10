export default function DataBox({dataName, data, symbol, textBlack}: {dataName: string, data: string, symbol: string, textBlack: boolean}) {
    return (
        <div>
            <p className={`font-kanit non-italic font-normal text-xl items-center pl-2 pt-3 ${textBlack ? 'text-black' : 'text-white'}`}>{dataName}:</p>
            <p className={`text-6xl font-kanit non-italic font-semibold items-center text-center p-5 ${textBlack ? 'text-black' : 'text-white'}`}>{data}{symbol}</p>
        </div>
    );
}