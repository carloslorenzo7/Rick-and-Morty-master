import Card from "../Card/Card";
import style from "./cards.module.css"


export default function Cards({characters, onClose}) {
 
  
  return (

    
    <div className={style.container}>
        
      {
        characters.map((c, index) => (
         <Card 
          name= {c.name}
          status={c.status}
          species={c.species}
          gender={c.gender}
          origin={c.origin}
          image= {c.image}
          key={index}
          id={c.id}
          onClose={()=>onClose(c.id)}
        />
      ))}
    </div>
    
  );
}
