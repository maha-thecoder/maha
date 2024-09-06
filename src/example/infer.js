import React from "react";



export default function Infer(){

    let [formdata,setformdata]=React.useState({
        name:"",
        email:"",
        checkbox:true
    })

    function handlechange(event){

        const {name,value,type,checked}=event.target
        setformdata(prevdata=>{
            return{
                ...prevdata,
                [name]:type === "checkbox"? checked :value
            }
        })
    }
             
    return(
        <div>
            <input type="text" name="name" onChange={handlechange} value={formdata.name}/>
            <input type="email" name="email" onChange={handlechange} value={formdata.email}/>
            <input type="checkbox" name="checkbox" onChange={handlechange} checked={formdata.checkbox}/>
        </div>
    )
}