import React from 'react'
function Register() {
  return (

   
    <div className="admin-box">
        <div className="login-container">
        <h1 className="login-title">New Register</h1>
    <form className="login-form" action="#" method="post">
        <div className="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required/>
        </div>
        <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required/>
        </div>
        <div className="form-group">
            <label for="password">Confirm Password</label>
            <input type="password" id="password" name="password" required/>
        </div>
        <div className="btn-div">
        <button type="submit" className="login-button" >Register</button>
        </div>
        
    </form>
    </div>
    </div>
    
    

  )
}

export default Register