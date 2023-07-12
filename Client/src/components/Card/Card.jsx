import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);

  //use Efect para comprobar si el personaje que contiene la card ya esta en favoritos
  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites ,props.id]);

  // estado de boton favorito
  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav({
        name: props.name,
        status: props.status,
        gender: props.gender,
        species: props.species,
        origin: props.origin,
        image: props.image,
        id: props.id,
      });
    }
  }

  return (
    <div className={style.container}>


      <img src={props.image} alt="imagen" />

      <Link to={`/detail/${props.id}`} className={style.name}>
        <h2>{props.name}</h2>
      </Link>
      {/* <h4> Status:{props.status} </h4>
         <h4> Species:{props.species} </h4> 
         <h4> Gender:{props.gender} </h4>
        <h4> Origin Name:{props.origin.name}</h4>*/}
        {isFav ? (
          <button className={style.boton} onClick={handleFavorite}>❤️</button>
        ) : (
          <button className={style.boton} onClick={handleFavorite}>🤍</button>
        )}

      <button className={style.boton} onClick={props.onClose}>
        X
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (personajes) => {
      dispatch(addFav(personajes));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
