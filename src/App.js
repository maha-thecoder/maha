import React, { useState } from "react";
/*import Testing from "./App.test";*/

/* import Interface from "./memegenerator/interface";
import State from "./usestateexample/state";
import Infer from "./example/infer";
import Example from "./memegenerator/example";
import Box from "./example/box";
import Exampl2 from "./memegenerator/exampl2";


 */
import Nav from "./news/nav";
import Titilecard from "./news/titilecard";
import Newsdata from "./news/newsdata";
import Head from "./news/head";
import Slidebar from "./news/slidebar";

export default function App(){
const [allnews,setnews]=useState('general')

let [prename,aftername]=useState('General News')


  return(
  <div>
    
  <Nav setnews={setnews} aftername={aftername}/>
<Head prename={prename}/>

  <Newsdata allnews={allnews}/>
  

    
  </div>
  )
}