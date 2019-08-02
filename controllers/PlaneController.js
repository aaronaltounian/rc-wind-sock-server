const Plane = require('../models/PlaneModel');
const jwt = require('jsonwebtoken');

const create = (req, res, next) => {
    console.log(req.body);
}

const retrieve = (req, res, next) => {
    let token = req.headers.authorization;
    token = token.slice(7, token.length);
    let user = jwt.verify(token, 'secretkey');
    let id = user['userId'];
    Plane.find({userId: id}, (err, planes) => {
        res.json(planes);
    })
}

exports.retrieve = retrieve;
exports.create = create;