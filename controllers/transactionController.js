const transactionController = require("express").Router();
const transactionArr = require("../models/transactions");

transactionController.get("/", (req, res) => {
  res.json(transactionArr);
});

transactionController.get("/:id", (req, res) => {
    const { id } = req.params;
    if(transactionArr[id]) {
        res.json(transactionArr[id])
    } else {
        res.redirect("/404")
    }
})

transactionController.post("/", (req, res) => {
    transactionArr.push(req.body)
    res.json(transactionArr[transactionArr.length - 1])
})

transactionController.delete("/:id", (req, res) => {
    const { id } = req.params;
    if(transactionArr[id]) {
        const deleteTrans = transactionArr.splice(id, 1)
        res.status(200).json(deleteTrans)
    } else {
        res.redirect("/404")
    }
})

transactionController.put("/:id", (req, res) => {
    const { id } = req.params;
    if(transactionArr[id]){
        transactionArr[id] = req.body
        res.status(200).json(transactionArr[id])
    } else {
        res.redirect("/404")
    }
})


module.exports = transactionController
