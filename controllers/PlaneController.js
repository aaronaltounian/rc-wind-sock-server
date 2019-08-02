const Plane = require('../models/PlaneModel');
const jwt = require('jsonwebtoken');

const create = (req, res, next) => {
    console.log(req.body);
    let token = req.headers.authorization;
    console.log(token);
    token = token.slice(7, token.length);
    let user = jwt.verify(token, 'secretkey');
    let id = user['userId'];
    let plane = new Plane({
        'userId': id,
        'make': req.body.make,
        'model': req.body.model,
        'minWind': req.body.minWind,
        'maxWind': req.body.maxWind,
        'maxGust': req.body.maxGust
    })
    plane.save(() => res.json({'saved': true}))

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