import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';
import './Parts.css'
const Parts = () => {
    const[parts,setparts]=useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setparts(data))
    })
    return (
        <div className="service">
            <h1 className="text-center">Our kind of services</h1>
            <div class="row row-cols-2 row-cols-md-2 g-4 ">
            {
                parts.map(part =><Part part={part}></Part>)
            }
        </div>
        </div>
    );
};

export default Parts;