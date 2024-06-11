import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const[data,setData]=useState([])
    
    const fetchData=()=>{
      axios.get("http://localhost:8081/view").then(
          (response)=>{
              setData(response.data)
          }
      ).catch().finally()
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <center><h3>VIEW DETAILS</h3></center>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">DOB</th>
      <th scope="col">BLOOD GROUP</th>
      <th scope="col">MOB NO</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">PINCODE</th>
      <th scope="col">PLACE</th>
      <th scope="col">DISTRICT</th>
      <th scope="col">EMAIL-ID</th>
      <th scope="col">USER NAME</th>
      <th scope="col">PASSWORD</th>
    </tr>
  </thead>
  <tbody>
  {data.map((value,index)=>
    {
        return  <tr>
        <td scope="row">{value.name}</td>
        <td>{value.dob}</td>
        <td>{value.bloodgroup}</td>
        <td>{value.mobileNo}</td>
        <td>{value.address}</td>
        <td>{value.pincode}</td>
        <td>{value.district}</td>
        <td>{value.place}</td>
        <td>{value.emailid}</td>
        <td>{value.username}</td>
        <td>{value.password}</td>
      </tr>
    })
    }
   
   
  </tbody>
</table>
                </div>
            </div>
        </div> 

    </div>
  )
}

export default View