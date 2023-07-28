const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    //const {id}= req.params //?distinto planteo
    const id = Number(req.params.id);
    const { data } = await axios(`${URL}/${id}`);

    //if (!data.name) throw new Error(`ID: ${id} Not found`); // caso de que no se encuentre personaje

    const character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };

    return data.name
     ?res.status(200).json(character)
     :res.status(404).send("Not Found") // en el caso de que el usurio ponga mal el 
      
  } catch (error) {
    //return error.message.includes("ID")
    res.status(500).json({error:error.message}); // caso de error
  }
};

module.exports = getCharById;
