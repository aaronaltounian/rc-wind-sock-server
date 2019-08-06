const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const salt = 8;

function create(request, response, next) {
    let {username, password} = request.body;

    if(!username || !password) {
        response.json({
            message: 'You must enter a username and password!'
        })
    }
    else {
        User.findOne({username:username}, (err, foundUser) => {
            if(foundUser) {
                response.json({
                    message: 'exists'
                });
            }
            else {
                let hash = bcrypt.hashSync(password, salt);
                let user = new User( {username: username, password: hash} );
                user.save(() => response.json({
                    message: 'created'
                }))  
            }
        })
    }
}

function display(request, response, next) {
    let token = request.headers.authorization;
    token = token.slice(7, token.length)
    let user = jwt.verify(token, 'secretkey');
    console.log(user);
    response.json(user);
}

exports.create = create;
exports.display = display;