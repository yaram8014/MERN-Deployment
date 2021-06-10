
const CrewForm = ({
    formInputs,
    changeFunction,
    submitFunction,
    buttonText,
  }) => {
    return (
      <>
        <form onSubmit={submitFunction}>
          <p>
            Pirate Name:{" "}
            <input
              type="text"
              name="name" required
              value={formInputs.name}
              onChange={changeFunction}
            />
            <p>{ formInputs.name.length < 3 ? <p>Pirate Name must be at least 3 characters..</p> : '' }</p>
            <p>{ formInputs.name.length === 0 ? <p>must fill the field</p>:''}</p>
          </p>
          <p>
          Image Url:{" "}
          <input
            type="text"
            name="imgUrl" required
            value={formInputs.imgUrl}
            onChange={changeFunction}
          />
       <p>{ formInputs.name.length < 15 ? <p>Pirate Name must be at least 15 characters..</p> : '' }</p>
            <p>{ formInputs.name.length === 0 ? <p>must fill the field</p>:''}</p>

        </p>
        <p>
          # of Treasure Chests:{" "}
          <input
            type="number"
            name="num" required
            value={formInputs.num}
            onChange={changeFunction}
            min="0"
            step="0.01"
          /> 
          <p> { formInputs.num.length === 0 ? 
          <p>Number of treasure is required !</p>: ''} </p>
         

        </p>
          <p>
          Pirate catch :{" "}
            <input
              type="text"
              name="name2" required
              value={formInputs.name2}
              onChange={changeFunction}
            />
         <p>{ formInputs.name.length < 3 ? <p>Pirate Name must be at least 3 characters..</p> : '' }</p>
            <p>{ formInputs.name.length === 0 ? <p>must fill the field</p>:''}</p>

          </p>
          <div>
					<label>Crew Position: </label>
					<select value={formInputs.crewpostion} name="crewpostion" onChange={changeFunction}>
          
					<option value="captain"> Captain</option>
					<option value="first_mate">First Mate</option>
					<option value="quarter_master">Quarter Master</option>
					<option value="boatswain">Boatswain</option>
					<option value="powder_monkey">Powder Monkey</option>
					</select>	
					

				</div >
          <p>
          <input 
            type="checkbox"
            name="peg"
            checked={formInputs.peg}
            value={formInputs.peg}
            onChange={changeFunction} 
          /> Peg Leg
          </p>
          <p>
          <input 
            type="checkbox"
            name="eye"
            checked={formInputs.eye}
            value={formInputs.eye}
            onChange={changeFunction} 
          /> Eye Patch
          </p>
          <p>
          <input 
            type="checkbox"
            name="hook"
            checked={formInputs.hook}
            value={formInputs.hook}
            onChange={changeFunction} 
          /> hook hand
          </p>

          <button type="submit" >{buttonText}</button>
        </form>
      </>
    );
  };
  
  export default CrewForm;