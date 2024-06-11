import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {
    const[data,setData]=useState(
        {
    "name":"",
    "dob":"",
    "bloodgroup":"",
    "mobileNo":"",
    "address":"",
    "pincode":"",
    "district":"",
    "place":"",
    "emailid":"",
    "username":"",
    "password":""
    })
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>
        {
            console.log(data)
            axios.post("http://localhost:8081/add",data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("successfullly added")
                        
                    } else {
                        alert("error")
                        
                    }
                }
            ).catch().finally()
            
        }
        
  return (
    <div>
        <Navbar/>
        <center><h3>REGISTRAION FORM</h3></center>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">DOB</label>
                <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Blood Group</label>
                          <select  id="" className="form-control" name='bloodgroup' value={data.bloodgroup} onChange={inputHandler}>
                          <option value=""></option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O-">O-</option>
                            <option value="O+">O+</option>
                            
                          </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Mobile No</label>
                <input type="text" className="form-control" name='mobileNo' value={data.mobileNo} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Address</label>
                <textarea  id="" className="form-control"name='address' value={data.address} onChange={inputHandler}></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Pincode</label>
                <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler}/>
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">District</label>
                <select  id="" className="form-control"name='district' value={data.district} onChange={inputHandler}>
                <option value=""></option>   
                            <option value="KASARGODE">KASARGODE</option>   
                            <option value="KANNUR">KANNUR</option>
                            <option value="WAYANAD">WAYANAD</option>
                            <option value="KOZHIKODE">KOZHIKODE</option>
                            <option value="MALAPPURAM">MALAPPURAM</option>
                            <option value="PALAKKAD">PALAKKAD</option>
                            <option value="THRISSUR">THRISSUR</option>
                            <option value="ERNAKULAM">ERNAKULAM</option>
                            <option value="IDUKKI">IDUKKI</option>
                            <option value="KOTTAYAM">KOTTAYAM</option>
                            <option value="PATHANAMTHITTA">PATHANAMTHITTA</option>
                            <option value="ALAPPUZHA">ALAPPUZHA</option>
                            <option value="KOLLAM">KOLLAM</option>
                            <option value="THIRUVANANTHAPURAM">THIRUVANANTHAPURAM</option>
                            </select>
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Place</label>
                            <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler}/>

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Email Id</label>
                <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Username</label>
                <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" id="" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">ConfirmPassword</label>
                <input type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success" onClick={readValue}>Register</button>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <Link to='/Add'>Go To Home Page</Link>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Register