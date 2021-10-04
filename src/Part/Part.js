import React from 'react';
import './Part.css'
const Part = (props) => {
    const{name,teacher,tk,img}=props.part;
    return (
       
            
  <div class="col p-5 service">
    <div style={{height:"500px",padding:"80px"}} class=" w-60 h-80">
      <img style={{borderRadius:'30px'}} width="60%"height="100%"src={img} class="card-img-top" alt="..."/>
      <div class="card-body w-100">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">Instructor:{teacher}</p>
        <h6>RS:{tk}</h6>
      </div>
    </div>
  </div>
   
    );
};

export default Part;