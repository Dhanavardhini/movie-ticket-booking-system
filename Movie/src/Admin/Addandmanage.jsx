import React from 'react'
import "./twobook.css"
import { Link } from 'react-router-dom'
function Addandmanage() {
  return (
    <>
  
    <div className="two-book">
      
        <div className="btn-container1">
            
            <Link to={"/addtwo"}><a href="#" className="btn1 btn-primary1">Add Kids Movies</a></Link>
            <Link to={"/managetwo"}><a href="#" className="btn1 btn-secondary2">User List</a></Link>
          
            </div>
        </div>
    
    </>
  )
}

export default Addandmanage