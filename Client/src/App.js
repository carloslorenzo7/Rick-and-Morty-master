import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Favorites  from "./components/Favorites/Favorites";


function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  
  useEffect(() => {
    !access && navigate("/");
  },[access ,navigate])

  // ! Credenciales fake
  const email = "carloslorenzo@hotmail.com";
  const password = "123456";

  const location = useLocation();

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (characters) => characters.id !== Number(id)
      );
      setCharacters(charactersFiltered);
    };
    
    //! funcion para usuario fake
    
    const login = (userData) => {
      if (userData.email === email && userData.password === password) {
        setAccess(true);
        navigate("/home");
      } else {
        alert("Usuario incorrecto");
      }
    };
    
    function random() {
      let randomId = Math.ceil(Math.random() * 826);
      onSearch(randomId);
    }

 //! RENDER
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} random={random} />}

      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
