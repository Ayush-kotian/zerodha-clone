 const { model } = require("mongoose");
let {PositionsSchema}=require("../schemas/PositionsSchema");
let PositionsModel=new model("postion",PositionsSchema);
module.exports={PositionsModel}