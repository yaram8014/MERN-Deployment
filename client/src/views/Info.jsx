import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Info = ({id}) => {
    const [crew , setCrew] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8080/api/crew/${id}`)
            .then(res => setCrew(res.data))
            .catch(err => console.log(err))
    }, [id])

    

    return(
        <div>
            <h1>About</h1>
            <img
                src={crew.imgUrl}
                alt={crew.name}
                style={{ width: "300px" }}
              />
            <h1>{crew.name}</h1>
            <h2>Postion : {crew.crewpostion}</h2>
            <h2>Treasure : {crew.num}</h2>

            <h4>Peg leg : {crew.peg ? "Yes" : "No" }</h4>
            <h4>Eye Patch : {crew.eye ? "Yes" : "No" }</h4>
            <h4>Hook Hand:  {crew.hook ? "Yes" : "No" }</h4>



        </div>
    )
}

export default Info;