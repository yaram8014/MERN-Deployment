import { useEffect, useState } from "react";
import axios from "axios";
import CrewList from "../components/CrewList";

const Home = (props) => {
  // 1. variables and useState
  const [crew, setCrew] = useState([]);
  //   2. useEffect
  useEffect(() => {
    axios.get("http://localhost:8080/api/crew")
      .then((res) => {
        console.log("getting the stuff:", res);
        //   do something with res.data
        setCrew(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // 3. other Functions needed

  // 4. Return
  return (
    <>

      <CrewList crew={crew} setCrew={setCrew} />
    </>
  );
};

export default Home;