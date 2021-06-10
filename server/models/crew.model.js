const mongoose = require("mongoose");

const CrewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [2, "{PATH} must be at least {MINLENGTH}"],
    },
    imgUrl : {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    num: {
      type: Number,
      required: [true, "{PATH} is required"],
  },
    name2 :{
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
   
  crewpostion : {
    type: String,
    required: [true, "Position is required"]

  },
  peg :{
    type: Boolean,
    required: [true, "{PATH} is required"],
  },
  eye : {
    type: Boolean,
    required: [true, "{PATH} is required"],
  },
  hook : {
    type: Boolean,
    required: [true, "{PATH} is required"],
  }

  
  },
  { timestamps: true }
);

module.exports.Crew = mongoose.model("crew", CrewSchema)