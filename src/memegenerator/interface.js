
import React,{useState} from "react";
import Memsdata from "./memesdata";
import photo from './photos/rgukt.jpeg'


export default function Interface(){

    const [memimg,setmemimg]=useState(photo);
    const[fword,nword]=useState('hello there')
    




    function newimg() {
        // Ensure that Memsdata and Memsdata.data.memes are defined and structured correctly
        if (Memsdata && Memsdata.data && Array.isArray(Memsdata.data.memes)) {
            const memarray = Memsdata.data.memes;
            const ranimg = Math.floor(Math.random() * memarray.length); // Correctly use the array length
            const selectedmem=memarray[ranimg];
            setmemimg(selectedmem.url)
            let firstword=document.getElementById('first').value 
    let secondword=document.getElementById('second').value

    nword(firstword)
            
            
        } else {
            console.error("Memsdata or its structure is not defined correctly.");


        }
    }

   


    const [currentword,newword]=useState({
        firstword:"",
        secondword:""

    })


    function handlechange(event){
        const {name,value}=event.target
        newword(prevdata=>{
            return{
                ...prevdata,
                [name]:value
            }

        })


    }





    return(
        <div>
            <ul className="horizontal">
                <li>MemeGenerator</li>
                <li className="end-li">project-1-begin</li>
                
                
            </ul>

            <form>
                <div className="form">
                <input type="text" placeholder="first word" id="first" name="firstword" onChange={handlechange} value={currentword.firstword}/>
                <input type="text" placeholder="last word" id="second" name="secondword" onChange={handlechange} value={currentword.secondword}/>
                </div>
            </form>
            <center>

            <button className="new-img" onClick={newimg}>Get A New Image</button></center>
           

            <div className="img">
                <img src={memimg} alt="img" className="img-src"></img>
                <div className="word">
                    <p>{currentword.firstword}</p>
                </div>
            </div>
           
        </div>
    )
}