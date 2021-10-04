import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css'
const Course = (props) => {
    const{name,teacher,tk,img,first,second,third}=props.service;
  
    return (
     
        <div className="col">
          <div className="card">
           <img width="100%"height="300px" src={img} alt="" />
                <h2 className="text-wrap text-danger">{name}</h2><br />
            <div className="card-body">
            <h3>Teacher:{teacher}</h3>
          <h5>CONTENT:</h5>
          <li>{first}</li>
          <li>{second}</li>
          <li>{third}</li>
          <h2>Rs:{tk}</h2><br />
            </div>
          <button type="button" class="btn btn-primary">ADD</button>
          </div>
        </div>

           

    );
};

export default Course;