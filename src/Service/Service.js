import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Service.css'
const Service = () => {
    const[services,setservices]=useState([]);
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setservices(data))
    },[])
    return (
        <div>
            <h1 className="text-center p-5">Our all service and related course</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 container ms-5">
            {
                services.map(service=><Course key={service.id} service={service}></Course>)
            }
         </div>
        </div>
    );
};

export default Service;