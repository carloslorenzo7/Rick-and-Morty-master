import { useState } from "react";
import Validation from "./Validation";

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    const validateErrors = Validation({
      ...userData,
      [event.target.value]: event.target.name,
    });
    setErrors(validateErrors);
  };


const handleSubmit= (event) =>{
event.preventDefault();
login(userData);
}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Igrese su email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email ? <p> {errors.email}</p> : ""}



        
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Ingrese su password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password ? <p> {errors.password}</p> : ""}

        
      </div>

      <button>Login</button>
    </form>
  );
};

export default Form;
