import React from "react";

export default function Box(){
    let [datafo,setdatafo]=React.useState({
        email:"",
        pass:"",
        confpass:"",
        newaletter:true

    })

    console.log(datafo)

    function handlechange(event){

        const {name,value,type,checked}=event.target
        setdatafo(prevdata=>{
            return{
                ...prevdata,
                [name]:type === "checkbox"? checked:value
            }
        })
    }

    function submiting(){
        if (datafo.pass === datafo.confpass && datafo.newaletter ===true){
            alert(
                'successfully login and thanks for opting our product'
            )
        } 
        else{
            alert('enter correct details')
        }
    } 

    return(

      
        <div>
      

        <form onSubmit={submiting}>
      
        <input type="email" name="email" placeholder="EMAIL" id="email"  onChange={handlechange} value={datafo.email}/>
        <input type="password" name="pass" placeholder="PASSWORD" id="password" onChange={handlechange} value={datafo.pass}/>
        <input type="password" name="confpass" placeholder="CONFIRM PASSWORD" id="password" onChange={handlechange} value={datafo.confpass}/>
   
        <label><input type="checkbox" id="spass" className="passrel" name="newaletter" onChange={handlechange} checked={datafo.newaletter}/>Show password</label>
        
        <button id="btn">sign in</button>

        </form>
      
    
    
      </div>
    )
}