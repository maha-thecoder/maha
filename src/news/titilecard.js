import {React,useState,useEffect} from 'react'
import Newsdata from './newsdata'
import photo from "./imgh/PawanKalyan.jpg"

import Images from "./image";







export default function Titilecard({title,description,url,img,random}) {

  let [imageee,setimg]=useState("'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQXKcl8MUTFor49pP6eRoIwRPMELlyCbDmw&s'")

  useEffect(() => {
   
    const newImgs = Images.data.images;
    const rannum = Math.floor(Math.random() * newImgs.length);
    const ranImg = newImgs[rannum].url;
    
    setimg(ranImg); 
  }, []); 

  return (

    <div className="col  col-lg-4 col-md-6">
    <div className="card inline-block my-3" style={{maxWidth:"500px",height:"400px"} } >
  <img src={img?img:imageee} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title?title:"no data found"}</h5>
    <p className="card-text">{description?description.slice(0,50):"sorry no description found"}</p>
    <a href={url} className="btn btn-primary">read more</a>
  </div>
</div>


    </div>
  

  

    )
}
