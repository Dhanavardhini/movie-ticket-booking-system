import React from 'react'
import "./Twodetail.css"
import { Link } from 'react-router-dom'
function Twowheelerdetail() {

  
  return (
    <>
    <div className="detail-div">
         <div className="bike-detail">
        <header className="bike-detail__header1">
            <Link to={"/backtwo"}><button className="bike-detail__back">←</button></Link>
            <h1 className="bike-detail__title">Two Wheelers</h1>
        </header>
        
        <main className="bike-detail__content">
            <img src='https://t4.ftcdn.net/jpg/06/26/80/37/360_F_626803765_fJYIZ4LLkLzFB6xD6XOdBCuACF79GXqL.jpg' className='bike-detail__image'/>
            
            <h2 className="bike-detail__name">Duke 200</h2>
            
            <div className="bike-detail__info">
                <p><span className="bike-detail__label">Brand:</span>KTM</p>
                <p><span className="bike-detail__label">Category:</span>motorcycle</p>
                <p><span className="bike-detail__label">Seat Capacity:</span>2</p>
                <p><span className="bike-detail__label">Rent Price per Day:</span>$1000</p>
            </div>
            
            <p className="bike-detail__description">good looking bike</p>
            
           <Link to={"/bookform"}><button className="bike-detail__book">Book Now</button></Link> 
        </main>
    </div>
    </div>
    </>
  )
}

export default Twowheelerdetail