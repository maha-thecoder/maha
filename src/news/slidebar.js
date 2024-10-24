import React from "react";


export default function Slidebar({title,description,img,title1,title2,title3,title4,description1,description2,description3,description4
,img1,img2,img3,img4,url,url1,url2,url3,url4}){
    return(
        
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner">

  <div className="carousel-item active">
        <div className="content">
      <img src={img?img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfzG84Bvd6rPLcxcH9bF8bmrfhByh06RLVA&s'} className="d-block" alt="..."/>
       <div className="content-text">
        <h3>{title}</h3>
        <p>{description}</p>
       </div>
       <div className="position">
       <a href={url} className="btn btn-outline-info" target="_blank" id="btn">read more</a>
       </div>
    </div>
    </div>

    <div className="carousel-item">
        <div className="content">
      <img src={img1?img1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfzG84Bvd6rPLcxcH9bF8bmrfhByh06RLVA&s'} className="d-block" alt="..."/>
       <div className="content-text">
        <h3>{title1}</h3>
        <p>{description1}</p>
       </div>

       <div className="position">
       <a href={url1} className="btn btn-outline-info" target="_blank" id="btn">read more</a>
       </div>
    </div>
    </div>

    <div className="carousel-item">
        <div className="content">
      <img src={img2?img2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfzG84Bvd6rPLcxcH9bF8bmrfhByh06RLVA&s'} className="d-block" alt="..."/>
       <div className="content-text">
        <h3>{title2}</h3>
        <p>{description2}</p>
       </div>
       <div className="position">
       <a href={url2} className="btn btn-outline-info"  target="_blank" id="btn">read more</a>
       </div>
    </div>
    </div>

    <div className="carousel-item">
        <div className="content">
      <img src={img3?img3:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfzG84Bvd6rPLcxcH9bF8bmrfhByh06RLVA&s'} className="d-block" alt="..."/>
       <div className="content-text">
        <h3>{title3}</h3>
        <p>{description3}</p>
       </div>
    
       <div className="position">
       <a href={url3} className="btn btn-outline-info" target="_blank" id="btn">read more</a>
       </div>
    </div>
    </div>

    <div className="carousel-item">
        <div className="content">
      <img src={img4?img4:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfzG84Bvd6rPLcxcH9bF8bmrfhByh06RLVA&s'} className="d-block" alt="..."/>
       <div className="content-text">
        <h3>{title4}</h3>
        <p>{description4}</p>
       </div>
       <div className="position">
       <a href={url4} className="btn btn-outline-info" target="_blank" id="btn">read more</a>
       </div>
    </div>
    </div>

  
   
    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    )
}