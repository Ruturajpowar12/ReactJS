import React from 'react'

function card(props) {

    console.log(props.user)



    return (
        <div className="parent">
            <div className="card">
                <img src='https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'></img>
                <h1>{props.user}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button> View Profile</button>
            </div>

        </div>
    )
}

export default card