import { Bookmark } from 'lucide-react'

function Card(props) {
    return (
        <div className='card'>

            <div className="top">
                <img
                    src={props.url}
                    alt={props.com}
                />

                <button>
                    Save <Bookmark size={16} />
                </button>
            </div>

            <div className="center">

                <h3>
                    {props.com}
                    <span>5 days ago</span>
                </h3>

                <h2>Senior UI/UX Designer</h2>

                <div className="tags">
                    <h4>Part Time</h4>
                    <h4>Senior Level</h4>
                </div>

            </div>

            <div className="bottom">

                <div className="salary">
                    <h3>${props.sal}/hr</h3>
                    <p>Mumbai, India</p>
                </div>

                <button className='apply-btn'>
                    Apply Now
                </button>

            </div>

        </div>
    )
}

export default Card