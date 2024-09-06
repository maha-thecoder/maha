import React from "react";
import Data from "./data";

export default function Testing(){
  
  return(
    <div>
      <table> 
        
          <thead>
            <tr>
        
          <th>name</th>
          <th>age</th>
          <th>village</th>
          </tr>
          </thead>               

       
        
        {
          Data.map(
            (students)=>(<tbody key={students.id}>
            <tr key={students.name} >
              <td key={students.id}>{students.name}</td>
              <td>{students.age}</td>
              <td>{students.village}</td>
            </tr>
            </tbody>
          
          )
        )}
        
      </table>
    </div>

  )
}
