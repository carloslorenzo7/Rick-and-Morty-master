


const Validation = (userData) =>{
 const errors={}

 if(!/\S+@\S+\.\S+/.test(userData.email)){
    errors.email= "El email ingresado no es valido"
 }

 if(!userData.email){
    errors.email="Debe ingresar un mail"
 }

 if(userData.email.length >35){
    errors.email="No puede ingresar mas de 35 caracteres"
 }


if (!/(?=.*\d).+/.test(userData.password)) {
  errors.password = "La contraseña debe tener al menos un número";
}
 if(userData.password.length < 6 && userData.password.length >10){
    errors.password="La contraseña debe tener una logitud entre 6 y 10 caracteres"
 }


return errors;
}



export default Validation ;