import React from 'react'
import "./fourdetail.css"
import { Link } from 'react-router-dom'
function Fourwheelerdetail() {


  
  return (
   <>
   <div className="detail-div">
       <div className="bike-detail">
        <header className="bike-detail__header">
            <h1 className="bike-detail__title">Four Wheelers</h1>
        </header>
         <main className="bike-detail__content">
            <img src='https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80' className='bike-detail__image'/>
            
            <h2 className="bike-detail__name">Verna </h2>
            
            <div className="bike-detail__info">
                <p><span className="bike-detail__label">Brand:</span>Hyundai</p>
                <p><span className="bike-detail__label">Category:</span>Sedan</p>
                <p><span className="bike-detail__label">Seat Capacity:</span>5</p>
                <p><span className="bike-detail__label">Rent Price per Day:</span>$2000</p>
            </div>
            
            <p className="bike-detail__description">good looking Car</p>
            
            <Link to={"/fourbook"}><button className="bike-detail__book">Book Now</button></Link>
        </main>
    </div>
    </div>
   </>
  )
}

export default Fourwheelerdetail

