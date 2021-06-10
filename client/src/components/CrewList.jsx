import DeleteButton from "../components/DeleteButton";
import { Link } from "@reach/router";

const CrewList = ({ crew, setCrew }) => {
  const removeFromDom = (id) => {
    setCrew(crew.filter((crews) => crews._id !== id));
  };
  return (
    <>
    <div style={{ width: "500px" , margin:"auto" }}>
    <Link to="/new"><button >Add Pirate</button></Link>
    <h1>Pirate Crew</h1>
      {crew.length > 0 &&
        crew.sort((a, b) => a.name.localeCompare(b.name)).map((crews) => {
          return (
            
            <div key={crews._id}>
              {console.log(crews)}
              <img
                src={crews.imgUrl}
                alt={crews.name}
                style={{ width: "200px" }}
              />
              <h3>{crews.name}</h3>
            
              <Link to={`/pirates/${crews._id}`}><button>View Priate</button></Link>
              <DeleteButton
                id={crews._id}
                successCallBack={() => removeFromDom(crews._id)}
              />
            </div>
            
          );
        })}
        </div>
    </>
  );
};

export default CrewList;