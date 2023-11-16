import Image from 'next/image'
import React, { FC } from 'react'

const data = [
    { name: "RuiZafon", green: "43.3%", red: "100%", Image: "", ContentGreen: "1,313,082", ContentRed: "45,494", color: "#D29001" },
    { name: "Segramer", green: "1.2%", red: "28.5%", Image: "", ContentGreen: "36,976", ContentRed: "12,991", color: "#959595" },
    { name: "Samara", green: "95%", red: "20%", Image: "", ContentGreen: "3,030,632", ContentRed: "10,460", color: "#01B4E4" },
    { name: "Shei", green: "25%", red: "21%", Image: "/Leaderboard/Shei.jpg", ContentGreen: "655,157", ContentRed: "9,211", color: "" },
    { name: "talestalker", green: "30%", red: "15%", Image: "/Leaderboard/talestalker.jpg", ContentGreen: "1,003,495", ContentRed: "5,233", color: "" },
    { name: "ILoveDollyParton", green: "10%", red: "13%", Image: "/Leaderboard/ILoveDollyParton.jpg", ContentGreen: "30,386", ContentRed: "4,799", color: "" },
    { name: "qualitylover", green: "30%", red: "20%", Image: "", ContentGreen: "499,777", ContentRed: "4,698", color: "#01C6AC" },
    { name: "SAFD", green: "10%", red: "10%", Image: "/Leaderboard/SAFD.jpg", ContentGreen: "159,864", ContentRed: "4,301", color: "" },
    { name: "jack-kn", green: "5%", red: "10%", Image: "", ContentGreen: "5,256", ContentRed: "3,850", color: "#D40242" },
    { name: "tmdb77059018", green: "50%", red: "100%", Image: "", ContentGreen: "15,038", ContentRed: "3,588", color: "#0177D2" },
];
const LeaderboardSection:FC =()=> {

    return (
        <section>
            <div className="container mb-8 px-6 sm:px-0">
                <div className='flex gap-4'>
                    <h2 className=' font-semibold text-2xl'>Leaderboard</h2>
                    <div>
                        <p><span className='inline-block rounded-full bg-LighterGreen-to-Green mx-3 w-2 h-2 '></span>All Time Edits</p>
                        <p><span className='inline-block rounded-full bg-Orange-to-Red mx-3 w-2 h-2 '></span>Edits This Week</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center'>
                    {
                        data?.map((item, index) =>
                            <div key={index} className='flex items-center justify-center gap-2'>
                                <div className=' h-full flex items-center'>
                                    {item.Image ?
                                        <Image className='rounded-full' src={item.Image} width={56} height={56} alt='this is avatar image' /> :
                                        <div className='text-white grid place-items-center rounded-full h-14 w-14' style={{ background: item?.color}} >{item?.name[0]}</div>
                                    }
                                </div>
                                <div className='flex flex-col w-full'>
                                    <h3>{item?.name}</h3>
                                    <div className='flex items-center gap-2'>
                                        <span className='inline-flex h-2 rounded-full bg-LighterGreen-to-Green min-w-[40px]' style={{width:item?.green}}></span>
                                        <h4 className='inline-flex'>{item?.ContentGreen}</h4>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span className='inline-flex h-2 rounded-full bg-Orange-to-Red min-w-[40px]' style={{width:item?.red}}></span>
                                        <h4 className='inline-flex'>{item?.ContentRed}</h4>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    )
}
export default LeaderboardSection;