const OrderModel = require("./Models/Order")

const express = require("express")
const app = express()

const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/Orders?readPreference=primary&appname=MongoDB%20Compass&ssl=false", {userNewUrlParser: true})

app.get("/insert", async (req, res) => {
    const order = new OrderModel({client : "Ansab", email : "ans@gmail.com", cart : "Mercedes"})

    await order.save()
    res.send("Data is inserted")
})

app.listen(3001, () => {
    console.log("You are Connected")
})