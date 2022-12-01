import React, { useState } from 'react';
import Data from './Data.json';
import './App.css';


const App = () => {  

  const [searchTem, setSearchTem] = useState("");
 
  return (
    <div className="container"> 
    <center> 
     <h1> La Casa De Papel Oyuncuları </h1>
     <div className="inputContainer">
     <input  className="search" type="text" placeholder="Oyuncu ismi giriniz..."
       onChange={(e)=> setSearchTem(e.target.value)}
       /> 
     </div>   
     <div className='dataContainer'>
      {
        Data.filter((val)=>{
         if(searchTem=="")
         {
          return val;   
         }

         else if(val.title.toLocaleLowerCase().includes(searchTem.toLocaleLowerCase())){
          return val;
         }

        }).map((val)=>{
          return( 
            <div className='data' key={val.id}>
              <img id="img" src={val.image}/>
              <h3>{val.title}</h3>
            </div> 
          )
        })

      }
     </div>
      </center> 
    </div>
  ) 
}

export default App
 