import React from 'react'
import Navbar from './Navbar'

const Add = () => {
    
  return (
    <div>
        <Navbar/>
        <center><h3>USER LOGIN</h3></center>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Username</label>
                <input type="text" className="form-control"  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">password</label>
                <input type="password" name="" id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success">Login</button>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <a href='/Register'>New user click here</a>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Add