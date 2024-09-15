import {React,useState,useEffect} from "react";
import Titilecard from "./titilecard";
import Slidebar from "./slidebar";





export default function Newsdata({allnews}){

    const [articledata,setarticledata]=useState([])

    const [generalslide,setgeneralslide]=useState('general')

    const [slidenews,setslidenews]=useState([])

    const [gns,sgns]=useState([])

    console.log(gns.length)

useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${allnews}&apiKey=87185c0ec43c43048cbe9ff8d6fd33e9`)
        .then(res=>res.json())
        .then(data=>setarticledata(data.articles))

    },[allnews])

    
   

   

useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${allnews}&apiKey=87185c0ec43c43048cbe9ff8d6fd33e9`)
    .then(res=>res.json())
    .then(data=>sgns(data.articles.slice(0,10)))
},[allnews])


const slidearticleimg=gns.filter(artio=>artio.urlToImage)


const slideData = slidearticleimg.length > 0 ? slidearticleimg : [{}, {}, {}, {}, {}];



const articlewithimg=articledata.filter(arti=>arti.urlToImage)


console.log(slideData)
















   
    return(
        <div className="edit">
        <div className="conatiner">
            <div className="row" >

        
               <Slidebar
                title={slideData[0].title}
                description={slideData[0].description}
                img={slideData[0].urlToImage}
                url={slideData[0].url}
                title1={slideData[1].title}
                description1={slideData[1].description}
                img1={slideData[1].urlToImage}
                url1={slideData[1].url}
                title2={slideData[2].title}
                description2={slideData[2].description}
                img2={slideData[2].urlToImage}
                url2={slideData[2].url}
                title3={slideData[3].title}
                description3={slideData[3].description}
                img3={slideData[3].urlToImage}
                url3={slideData[3].url}
                title4={slideData[4].title}
                description4={slideData[4].description}
                img4={slideData[4].urlToImage}
                url4={slideData[4].url}
               


/>
           
            {
                articlewithimg.map((article)=>{
                    return <Titilecard title={article.title} key={article.title} description={article.description} img={article.urlToImage} url={article.url}/>
                })
             

               
            }
 

        </div>
        </div>
        </div>
    )
}