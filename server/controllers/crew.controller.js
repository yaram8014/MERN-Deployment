const { Crew } = require("../models/crew.model");
module.exports = {
    createCrew: (req, res) => {
        const { name ,imgUrl , num , name2 , crewpostion,peg,eye,hook} = req.body
        Crew.create({name,imgUrl,num,name2,crewpostion,peg,eye,hook})
            .then((crew) => res.json(crew))
            .catch(err => res.status(400).json(err))
    },

  getAll: (req, res) => {
    Crew.find({})
      .then((crew) => res.json(crew))
      .catch((err) => res.status(400).json(err));
  },
  getOne: (req, res) => {
    Crew.findOne({ _id: req.params.idd })
      .then((crew) => res.json(crew))
      .catch((err) => res.status(400).json(err));
  },
  updateCrew: (req, res) => {
		Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true, })
			.then((crewUpdated) => res.json(crewUpdated))
			.catch((err) => res.status(400).json(err));
	},
  
  deleteCrew: (req, res) => {
    Crew.deleteOne({ _id: req.params.iddd })
      .then((crew) => res.json(crew))
      .catch((err) => res.status(400).json(err));
  },

};