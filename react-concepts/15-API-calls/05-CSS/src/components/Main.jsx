import React from 'react'
import '../styles/Main.css'


function Main() {
    return (
        <div className="card">
            <div className="left">
                <div className="box">
                    <h1>Ruturaj Powar</h1>
                    <h3>Full Stack developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="box2">
                        <div className="mern">
                            <p>MERN</p>
                        </div>
                        <div className="dsa">
                            <p>DSA</p>
                        </div>
                        <div className="comm">
                            <p>Communication</p></div>


                    </div>
                    <img src='https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D' alt='amzaon' />
                </div>
            </div>
            <div className="right">

                <img src="https://images.unsplash.com/photo-1602359337719-a8bcbd1f7b51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW1hem9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" alt="amzon" />

            </div>
        </div>
    )
}

export default Main