import {React,useState,useEffect,useRef} from 'react'


import Images from "./image";


import gsap from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger";










export default function Titilecard({title,description,url,img,random}) {

  function pop(){
    alert('are u sure u want to open')
  }

  
 

  let [imageee,setimg]=useState("'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQXKcl8MUTFor49pP6eRoIwRPMELlyCbDmw&s'")

  useEffect(() => {
   
    const newImgs = Images.data.images;
    const rannum = Math.floor(Math.random() * newImgs.length);
    const ranImg = newImgs[rannum].url;
    
    setimg(ranImg); 
  }, []); 
  let cardload=useRef(null)


  useEffect(()=>{
  
   gsap.fromTo(cardload,4,{
    x:50,
    opacity:0,
   },
  {
    x:0,opacity:1
  })
      
    },[])

    useEffect(()=>{
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(cardload,{
        x:0,
        duration:3,
        scrollTrigger:cardload,
       
        
            })
    })
 
  return (

    <div className="col  col-lg-4 col-md-6 col-sm-12">
    <div className="card inline-block my-3"  ref={el=>{cardload=el}} style={{maxWidth:"500px",height:"400px",opacity:0}} >
  <img src={img?img:imageee} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title?title:"no data found"}</h5>
    <p className="card-text">{description?description.slice(0,50):"sorry no description found"}</p>
    <a href={url} className="btn btn-outline-primary"  target="_blank" onClick={pop}>read more</a>
  </div>
</div>


    </div>
  

  

    )
}
