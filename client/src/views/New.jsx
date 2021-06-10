import axios from "axios";
import { navigate } from "@reach/router";
import { useState } from "react";
import CrewForm from "../components/CrewForm";
import { Link } from "@reach/router";


const New = (props) => {
  // 1. create variables and useState
  const [formInputs, setFormInputs] = useState({
    name: "",
    imgUrl : "",
    num :0,
    name2:"",
    crewpostion:'captin',
    peg :true,
    eye:true,
    hook:true
   
  });
  const [errors, setErrors] = useState([]);
  // formInputs.category;
  // 2. useEffect

  // 3. Other Functions
  const submitFunction = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/crew", formInputs)
      .then((res) => {
        console.log("sending res:", res);
        navigate(`/pirates/${res.data._id}`);
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  const changeFunction = (e) => {
    if (e.target.name === "peg") {
        console.log("e.target.checked", e.target.checked);
        setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.checked,
});
}

else if (e.target.name === "hook") {
        console.log("e.target.checked", e.target.checked);
        setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.checked,
        });
} 

else if (e.target.name === "eye") {
        console.log("e.target.checked", e.target.checked);
        setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.checked,
});
} 
else {
        setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.value,
})}
    console.log("e.target.name", e.target.name);
    console.log("e.target.value", e.target.value);
    console.log("e.target.type:", e.target.type);
    
}
  // 4. return
  return (
    <>
           <Link to="/pirates"><button>Crew board</button></Link>

      <h1>Add Pirate </h1>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      <CrewForm
        formInputs={formInputs}
        changeFunction={changeFunction}
        submitFunction={submitFunction}
        buttonText={"Add"}
      />
      

    </>
  );
  };

export default New;