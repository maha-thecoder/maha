import React,{useState} from "react";
import airbnb from './imgaes/airbnb 1.png'
import email from './imgaes/email.png'




export default function State(){
    
    const[startimg,chngim]=useState({image:true})


    const imgpos=startimg.image? airbnb : email

    function chnim(){
        chngim(previmg=>({
           image:!previmg.image}))
    }

  


    return(
        <div>
        <button onClick={chnim}>click to change the image</button>
        <img src={imgpos} alt="omag"></img>
        </div>
    )
    
}