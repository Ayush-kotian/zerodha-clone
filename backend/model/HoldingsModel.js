const { model } = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchema");
let HoldingsModel=new model("holding",HoldingsSchema);
module.exports={HoldingsModel}