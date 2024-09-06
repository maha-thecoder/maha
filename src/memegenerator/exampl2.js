import React, { useState } from "react";
import Ex3 from "./ex3";



export default function Exampl2(){

    const [show,setshow]=useState(false)

function toogle(){
    setshow(prevdata=>!prevdata)
}

   
    return(
        <div>
            <div className="container1">
                <button onClick={toogle}>
                    Toggle window tracker
                </button>

                {show && <Ex3/>}

            </div>

        </div>
    )
}