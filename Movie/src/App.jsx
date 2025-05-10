import Adminlogin from './Admin/Adminlogin'
import Rentlanding from './Admin/Homelogin'
import Userlogin from './Admin/Userlogin'
import {  Route, Routes, useLocation } from 'react-router-dom'
import Register from './Admin/Register'
import Userlanding from './Userpanel/Userlanding'
import Twobooking from './Userpanel/Twobooking'
import Twowheelerdetail from './Userpanel/Twowheelerdetail'
import Fourbooking from './Userpanel/Fourbooking'
import Fourwheelerdetail from './Userpanel/Fourwheelerdetail'
import Mybooking from './Userpanel/Mybooking'
import Bookfrom from './Userpanel/Bookfrom'
import Dbmain from './Admin/Dbmain'
import Fourbooks from "./Userpanel/Fourbook"
import { Component } from 'react'
import Actionbooking from './Userpanel/Actionbooking'
import Booked from './Userpanel/Actionbook'



function App() {
const location = useLocation()
  console.log(location.pathname);
  const route = [
    {
      path:'/',
      Component:Rentlanding
    },
    {
      path:'/ad',
      Component:Adminlogin
    },
    {
      path:'/userlogin',
      Component:Userlogin
    },
    {
      path:'/reg',
      Component:Register
    },
   
    {
      path:'/userlanding',
      Component:Userlanding
    },
   
    {
      path:"/booktwo",
      Component:Twobooking
    },
    {
      path:"/bookaction",
      Component:Actionbooking
    },
    {
      path:"/bookfour",
      Component:Fourbooking
    },

    {
      path:'/twodetail',
      Component:Twowheelerdetail
    },
    {
      path:'/bookform',
      Component:Bookfrom
    },

    {
      path:'/fourdetail',
      Component:Fourwheelerdetail
    },
    {
      path:'/backfour',
      Component:Fourbooking
    },
    {
      path:'/backtwo',
      Component:Twobooking
    },
    {
      path:'/fourdetail',
      Component:Fourbooking
    },
   
    {
      path:'/mybooking',
      Component:Mybooking
    },
    {
      path:'/fourbook',
      Component:Fourbooks 
    },

  ]

  const routePaths = route.map((r) => r.path);
  console.log(!routePaths.includes(location.pathname));
  
  return (
    <>
      <Routes>
        {
          route.map((data,index)=>(
            <Route key={index} path={data.path} element={<data.Component/>}/>
          ))
        }
        </Routes>

    {routePaths.includes(location.pathname) ? null : <Dbmain />}

    </>
    
    )
  }
export default App
