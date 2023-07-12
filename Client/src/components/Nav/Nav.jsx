import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css"


const Nav = ({ onSearch, random }) => {
  return (

    <nav className={style.nav}>

      <img className={style.image} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="" />

      <SearchBar onSearch={onSearch} random= {random} />

      <button className={style.links}>
        <Link to="/favorites">Favorites</Link>
      </button>

      <button className={style.links}>
      <Link to="/about">About</Link>
      </button>

      <button className={style.links}>
        <Link to="/home">Home</Link>
      </button>
    </nav>
  );
};

export default Nav;
