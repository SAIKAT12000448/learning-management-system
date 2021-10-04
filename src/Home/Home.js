import React from 'react';
import Parts from '../Parts/Parts';
import './Home.css'
const Home = () => {
    return (
        <div >
          
            <div style={{backgroundImage:`url(https://rmc.cl/wp-content/uploads/IA-background.jpg)`}}  id="carouselExampleControls" class="carousel slide caro-container" data-bs-ride="carousel">
     <div class="carousel-inner ">
       <div class="carousel-item active p-5 rounded ">

    <div className="d-flex justify-content-between align-items-center  caro ">
    <img width="300px" src="https://elearningindustry.com/wp-content/uploads/2019/12/lms-software-solutions-for-your-organization.jpg" class="d-block w-50 rounded-pill" alt="..."/>
      <h1 className="ms-5 me-5 text-light">Select Your Carrer path.Learn from very basic</h1>
    </div>

     </div>
      <div class="carousel-item p-5">
      <div className="d-flex justify-content-between align-items-center caro">
      <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg" class="d-block w-50 rounded-pill" alt="..."/>
      <h1  className="ms-5 me-5 text-light">take your most Fundamental courses 2021</h1>
</div>

      </div>
    <div class="carousel-item p-5">
    <div className="d-flex justify-content-between align-items-center caro">
      <img src="https://elearningindustry.com/wp-content/uploads/2020/08/elearning-vs-classroom-based-learning.png" class="d-block w-50 rounded-pill" alt="..."/>
      <h1 className=" ms-3 me-5 text-white">Get touched with digital world and grow your career</h1>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<Parts></Parts>
        </div>
    );
};

export default Home;