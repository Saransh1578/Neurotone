/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { getColor } from "~/lib/colors";

const FeatureMaps=({data, title, internal, spectrogram}:{
    data:number[][],
    title:string,
    internal?:boolean,
    spectrogram?:boolean
})=>{
    if(!data || !data.length || !data[0]?.length)return null;
    const mapHeight=data.length;
    const mapWidth=data[0].length;

    const absMax=data.flat().reduce((acc,val)=>Math.max(acc,Math.abs(val ?? 0)),0);

    return(
        <div>
            <svg
                viewBox={`0 0 ${mapWidth} ${mapHeight}`}
                preserveAspectRatio="none"
                className={`mx-auto block rounded border border-stone-200 ${internal? "w-full max-w-32": spectrogram? "w-full object-contain":"w-full max-w-[500px] max-h-[300px] object-contain"}`}
            >
             {data.flatMap((row,i)=>
                row.map((value,j)=>{
                    const normalizeValues=absMax===0?0:value/absMax;
                    const [r,g,b]=getColor(normalizeValues)
                    return <rect key={`${i}-${j}`} x={j} y={i} width={1} height={1} fill={`rgb(${r},${g},${b})`}/>
                }))}    
            </svg> 
            <p className="mt-1 text-xs text-stone-500">{title}</p>
        </div>
    )
}
export default FeatureMaps;