const express = require('express');
const router = express.Router()

const FirstNames = ["John", "Jane", "Bob", "Alice", "Tom", "Sara", "Mike", "Emily", "David", "Olivia", "pam"];
const LastNames = ["Smith", "Johnson", "Brown", "Taylor", "Anderson", "Wilson", "Clark", "Lewis", "Walker", "Hall", "Béla"];

router.get('/name', async (req, res) => {
    try{
        const index1 = Math.floor(Math.random() * 10);
        const index2 = Math.floor(Math.random() * 10);
        const data = FirstNames[index1] + " " + LastNames[index2]
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;