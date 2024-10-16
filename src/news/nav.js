import {React,useEffect,useRef} from 'react'

import gsap from 'gsap'



export default function Nav({setnews,aftername}){

  let cardload=useRef(null)


  useEffect(()=>{
  
      gsap.fromTo(cardload,3,{
        
        x:-50,
        opacity:0,
       
      },

      {
        x:0,
        opacity:1
      })
      
    },[])
  

    return(
      <div className="nav-container" style={{ width: '100%' }}>

        <nav className="navbar navbar-expand-md bg-body-tertiary">
  <div className="container" ref={el=>{cardload=el}}>
    <a className="navbar-brand" href="\"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34HlJf28LMAAA_Qr3AJc2GtVNZJ7NV8cRdw&s" alt="Bootstrap" width="80" height="44"/>NewsForU</a>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      <li className="nav-item">
          <div className="nav-link active neon-button" onClick={()=>{setnews('business'); aftername("business")}} id='hover'>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active neon-button" onClick={()=>{setnews('entertainment');aftername('Entertainment')}} id='hover'>Entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active neon-button" onClick={()=>{setnews('health'); aftername("Health")}} id='hover'>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active neon-button" onClick={()=>{setnews('sports'); aftername("Sports")}} id='hover'>Sports</div>
        </li>
       </ul>
      
    </div>
  </div>

</nav>



</div>



    
    )
}