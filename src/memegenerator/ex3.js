import React from "react";







export default function Ex3(){

    const [cww,sww]=React.useState(window.innerWidth)


        React.useEffect(()=>{

            function setwidth(){
                sww(window.innerWidth)
            }

            window.addEventListener("resize",setwidth)

            return function(){
                window.removeEventListener('resize',setwidth)
            }

},[])


    return(
        <div>
            <h1>window width:{cww}</h1>

        </div>
    )
}