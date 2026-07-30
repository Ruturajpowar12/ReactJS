
import { Link } from 'react-router-dom'

function NotFound() {
  return (
   <div className="  w-full h-143 ">
      <div id='oopss'>
    <div id='error-text'>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
        <span>404 PAGE</span>
        <p className="p-a">
           . The page you were looking for could not be found</p>
        <p className="p-b">
            ... Back to previous page
        </p>
        <Link to='/' className="back">... Back to previous page</Link>
    </div>
    </div>
      </div>
  )
}

export default NotFound