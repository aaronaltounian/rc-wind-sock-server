const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
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

exports.create = create;
