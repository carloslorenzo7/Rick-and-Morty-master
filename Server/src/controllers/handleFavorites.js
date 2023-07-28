let myFavorites=[];


const postFav= (req,res)=>{
   
    //agrego personajes a mi arreglo de favoritos
    myFavorites.push(req.body)
    return res.status(200).json(myFavorites)

}

const deleteFav = (req,res)=>{
    const {id}=req.params
   myFavorites= myFavorites.filter((fav) => fav.id !== +id) // si lo pongo el + adelane se transforma en numero
   res.status(200).json(myFavorites)
}


module.exports={
    postFav,
    deleteFav
}