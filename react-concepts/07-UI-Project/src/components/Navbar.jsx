

function Navbar() {
    return (
        <div className='w-full h-5 flex  p-8 '>
            <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt=" profile" className='w-30 h-30  object-cover rounded-full ml-40 mr-10 my-10' />
            <div className="data flex flex-col my-12 text-white">
                <h1 className='text-4xl font-bold mb-2'> Full-Stack Developer</h1>
                <p className='text-lg font-extralight'>Contact Me on : ruturaj@038@gamil.com</p>
            </div>
        </div>
    )
}

export default Navbar