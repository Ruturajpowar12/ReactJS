
import { Check } from 'lucide-react'

function Box(props) {
    return (
        <div
            className="box bg-cover   shrink-0 bg-center rounded-2xl p-2 h-90 w-70 transition-transform duration-600 hover:scale-102"
            style={{ backgroundImage: `url(${props.url})` }}
        >
            <div className="id bg-white rounded-3xl w-7 h-7 text-center">
                {props.id}
            </div>

            <p className='mt-50 text-white font-semibold mr-5 '>
                {props.desc}
            </p>

            <div className="flex justify-between m-4 text-white">

                <div className="who bg-blue-500 h-8 w-30 text-center rounded-2xl mt-1">
                    {props.role}
                </div>

                <button className='bg-blue-500 w-9 h-9 pl-1.5 rounded-3xl'>
                    <Check />
                </button>

            </div>
        </div>
    )
}

export default Box