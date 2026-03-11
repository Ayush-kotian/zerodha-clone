const { model } = require("mongoose");
const {OrdersSchema}=require("../schemas/OrdersSchema")
let OrdersModel=new model("order",OrdersSchema);
module.exports={OrdersModel}