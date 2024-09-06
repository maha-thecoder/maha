import React,{useState} from "react";
import Memsdata from "./memesdata";


export default function Example(){

    let data=Memsdata.data.memes

    function addtop(props){
    let tableheading=document.getElementById('th').value
     let tabledata=document.getElementById('td').value

                    
    }

    

  
    return(
        <>
        <table border="1" className="table1">
        <tr>
            
                <th>name</th>
                <th>id.no</th>
                <th>width</th>
                <th>height</th>
                <th>{}</th>

                
            
            </tr>

            {data.map(tabl=>(
           
    
        <tr>
           
               <td>{tabl.name}</td>
               <td>{tabl.id}</td>
               <td>{tabl.width}</td>
               <td>{tabl.height}</td>
                               
           
        
        </tr>

       
       
        ))
 }
            
    
    </table>

    <div>
            <label>heading</label>
        <input type="text" id="th"/>
        </div>

         <div>
            <label>table data</label>
        <input type="text" id="td"/>
        </div>

<button onClick={addtop}>submit</button>
  
    </>

    )

}

