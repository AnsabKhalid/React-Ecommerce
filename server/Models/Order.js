const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    client : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    cart : {
        type : String,
        required : true
    }
})

const OrderModel = mongoose.model("order", OrderSchema)
module.exports = OrderModel