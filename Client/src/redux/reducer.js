import { ADD_FAV, FILTER_CARDS, REMOVE_FAV ,ORDER_CARDS } from "./actions";

const initialState= {
    myFavorites:[],
    allCharacters:[]

}

const reducer= (state=initialState, {type, payload}) =>{
switch(type) {
    case ADD_FAV:
        return{...state,
                myFavorites:[...state.allCharacters,payload],
                allCharacters:[...state.allCharacters,payload]
            };

            case REMOVE_FAV:
                return{...state,
                myFavorites:state.myFavorites.filter(fav => fav.id !== Number(payload))
            };

            case FILTER_CARDS:            // en estos dos case que uso el filter, no pongo array porque el filter ya me devuelve un nuevo array
                const allCharactersFilter= state.allCharacters.filter(character => character.gender === payload)
                return{...state,
                    myFavorites:
                    payload === "allCharacters"
                    ?[...state.allCharacters]
                    :allCharactersFilter
                    
                }


                case ORDER_CARDS:
                    const allCharactersFavCopy= [...state.allCharacters]
                    return{
                        ...state,
                        myFavorites: payload === "A" 
                        ? allCharactersFavCopy.sort((a,b) =>a.id - b.id )
                        : allCharactersFavCopy.sort((a,b) => b.id- a.id )
                    }

        default:
        return{...state}
}
}





export default reducer;