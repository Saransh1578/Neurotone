/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
const ColorScale=({width, height, min,max}:{
    width?:number,
    height?:number,
    min?:number,
    max?:number
})=>{
    return (<div className="flex items-center gap-3">
        <span className="text-xs text-stone-500">{min}</span>
        <div className="rounded border border-stone-500" style={{
            width:`${width}px`,
            height:`${height}px`,
            background:"linear-gradient(to right, rgb(255,128,51), rgb(255,255,255), rgb(51,128,255)"
        }}/>
        <span className="text-xs text-stone-500">{max}</span>
    </div>)
}
export default ColorScale;