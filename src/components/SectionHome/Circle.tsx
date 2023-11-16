
export default function Circle({ vote_average }:{vote_average:number}) {

    return (
        <>
        <svg className='absolute top-[2%] left-[4%] w-8 h-8 rounded-full' style={{ transform: "rotate(270deg)" }} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" className=" stroke-[#204529] stroke-[10%]  " />
            <circle cx="50" cy="50" r="48" className="  stroke-[#21CB77] stroke-[10%] " strokeDasharray="305" strokeDashoffset={305-(30.5 * vote_average)} />
        </svg>
        <span className="absolute top-[3%] left-[8.5%] text-white font-semibold">
                {Math.round(vote_average * 10) == 100 ? 99 : Math.round(vote_average * 10)}
        </span>
        </>
    ) 
}
// 
//

