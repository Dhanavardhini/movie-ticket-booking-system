import React from 'react'
import { Link } from 'react-router-dom'

function Addandmanage2() {
  return (
   <>

  
    <div className="two-book">
      
        <div className="btn-container1">
            
            <Link to={"/addfour"}><a href="#" className="btn1 btn-primary1">Add Horror Movies</a></Link>
            <Link to={"/managefour"}><a href="#" className="btn1 btn-secondary2">User List</a></Link>
          
            </div>
        </div>
    
 
   </>
  )
}

export default Addandmanage2