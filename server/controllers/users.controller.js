const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = db.user;


const getUsers = (req, res) => {
    User.find().exec((err, users)=>{
        if (err) {
            res.status(500).send({message: err});
            return;
        }
        res.status(200).send({message: `${users.length} was found`, payload: {users: users.map(({username, email, id})=>({username, email, id}))}});
    })
}


module.exports = {
    getUsers,
}
