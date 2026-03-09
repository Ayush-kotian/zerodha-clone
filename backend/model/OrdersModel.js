const { model } = require("mongoose");
const {OrderSchema}=require("../schemas/OrdersSchema")
let OrdersModel=new model("order",OrderSchema);
module.exports={OrdersModel}