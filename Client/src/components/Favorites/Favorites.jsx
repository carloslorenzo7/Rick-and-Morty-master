import Card from "../Card/Card";
import{connect} from "react-redux"
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites =({myFavorites,onClose})=> {
 const dispatch= useDispatch()

 const[aux,setAux]=useState(false);

 const handleOrder= (event) =>{
    dispatch(orderCards(event.target.value));
    setAux(true);
}

const handleFilter= (event) =>{
    dispatch(filterCards(event.target.value))
}



return(
    <div>
        <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">All Character </option>
        </select>


      {myFavorites.map((e,i)=>
      <Card 
      name= {e.name}
      status={e.status}
      species={e.species}
      gender={e.gender}
      origin={e.origin}
      image= {e.image}
      key={e.id}
      id={e.id}
      onClose={()=>onClose(e.id)}/>
    
      )}
    </div>
)
}

const mapStateToProps= (state)=>{
    return{
        myFavorites: state.myFavorites
    }

};


export default connect(mapStateToProps,null)(Favorites);








