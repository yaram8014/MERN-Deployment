import axios from "axios";
import { navigate } from "@reach/router";

const DeleteButton = ({ id, successCallBack }) => {
  const clickFunction = (id) => {
    axios.delete(`http://localhost:8080/api/crew/${id}`)
      .then((res) => {
        // do something after delete
        console.log(res);
        successCallBack();
        navigate("/pirates");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button class="btn btn-secondary" onClick={() => clickFunction(id)}>Delete</button>
    </>
  );
};

export default DeleteButton;