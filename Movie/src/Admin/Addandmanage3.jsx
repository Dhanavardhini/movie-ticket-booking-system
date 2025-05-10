import React from 'react'
import { Link } from 'react-router-dom'

function Addandmanage3() {
  return (
   <>

  
    <div className="two-book">
      
        <div className="btn-container1">
            
            <Link to={"/addfours"}><a href="#" className="btn1 btn-primary1">Add Action Movies</a></Link>
            <Link to={"/manage"}><a href="#" className="btn1 btn-secondary2">User List</a></Link>
          
            </div>
        </div>
    
 
   </>
  )
}

export default Addandmanage3