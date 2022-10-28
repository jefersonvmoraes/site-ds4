import React from "react";
import crud1 from '../../assets/img/flux/CRUD1.webp';
import crud2 from '../../assets/img/flux/CRUD2.webp';
import report from '../../assets/img/flux/Report.webp';
import panel from '../../assets/img/flux/Panel.webp';


const Caroseul = (props) =>{

  return(
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={crud1} className="d-block w-100" alt=""/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="title-caruosel text-dark">{props.img1}</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={crud2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="title-caruosel text-dark">{props.img2}</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={report} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="title-caruosel text-dark">{props.img3}</h5>
            </div>

          </div>
          <div className="carousel-item">
            <img src={panel} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="title-caruosel text-dark">{props.img4}</h5>
            </div>
          </div>
        </div>  
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Caroseul;