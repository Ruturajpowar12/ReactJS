
import Navbar from './Navbar'
import Box from './Box'
import { ArrowUpRight } from 'lucide-react';

function Card() {
    const users = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
            role: "Frontend",
            desc: "Builds responsive websites with modern UI and animations"
        },

        {
            id: 2,
            url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
            role: "Backend",
            desc: "Creates secure APIs databases and server side logic"
        },

        {
            id: 3,
            url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
            role: "Fullstack",
            desc: " web applications using frontend and backend"
        },

        {
            id: 4,
            url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500",
            role: "Designer",
            desc: "Designs attractive interfaces  efficiently"
        },

        {
            id: 5,
            url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
            role: "Analyst",
            desc: "Analyzes business data trends and generates useful insights"
        }
    ];
    return (
        <div>
            <Navbar />
            <div className="card bg-white  mx-30 my-42 p-5  rounded-2xl shadow-2xl h-120 hover:shadow-blue-500/50 transition-all duration-500">
                <div className="top flex justify-between mb-8">
                    <div className="box bg-black text-white rounded-2xl w-40
                    h-8 text-center p-1 ">
                        <p className='text-sm font-bold'>Target Audiance</p>
                    </div>
                    <p className='mr-10 font-semibold'>&#x2937; Digital ranking Platform</p>
                </div>
                <div className="center flex">
                    <div className="data h-full w-1/4 flex flex-col p-3">
                        <h2 className='font-bold text-3xl my-3 leading-9'>Prospective custoimer segmention</h2>
                        <p className='font-semibold text-md mb-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure.</p>
                        <p className='mt-6'><ArrowUpRight /></p>

                    </div>
                    <div className="pics flex justify-evenly gap-20 overflow-x-auto hide-scrollbar">
                        {
                            users.map((item) => (
                                <Box
                                    id={item.id}
                                    url={item.url}
                                    desc={item.desc}
                                    role={item.role}
                                />
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card