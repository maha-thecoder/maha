import React from 'react'



export default function Nav({setnews,aftername}){


  

    return(
        <div>
        <nav className="navbar navbar-expand-md bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="\"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34HlJf28LMAAA_Qr3AJc2GtVNZJ7NV8cRdw&s" alt="Bootstrap" width="80" height="44"/>NewsForU</a>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      <li className="nav-item">
          <div className="nav-link active" onClick={()=>{setnews('business'); aftername("business")}} id='hover1'>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={()=>{setnews('entertainment');aftername('Entertainment')}} id='hover2'>Entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={()=>{setnews('health'); aftername("Health")}} id='hover3'>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={()=>{setnews('sports'); aftername("Sports")}} id='hover4'>Sports</div>
        </li>
       </ul>
      
    </div>
  </div>

</nav>



</div>



    
    )
}