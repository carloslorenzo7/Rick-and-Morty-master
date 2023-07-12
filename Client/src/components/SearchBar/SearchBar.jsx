import { useState } from "react";
import style from   "./searchBar.module.css"



export default function SearchBar({onSearch, random}) {

   const [id, setId] =useState("")

   const handleChange= (event) =>{
      setId(event.target.value)
   }


   return (
      <div className={style.container}>
                     <input type='search' onChange={handleChange} value={id}/> 
        {/*6.4 */} <button onClick={() => onSearch(id)}>Agregar</button> 
        <button onClick={random}>Random id</button>
      </div>
   );
}


