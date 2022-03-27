const jwt = require('jsonwebtoken');
const responseMessages = require('../constants/responseMessages');
const User = require('../Mongo_Schema/users/userSchema');

const auth = function(req, res, next){

    let token = (req.headers.authorization);

    if(token){
        jwt.verify(token, 'secret', (err, verifiedJwt) => {
            if(err){
                console.log(err);
                res.send(err.message);
            }else{
                console.log(verifiedJwt);
                console.log(User)
                req.id = verifiedJwt.id; 
                next();
            }
        });
    }else{
        res.status(responseMessages.unauthorized.code).json({
            message: responseMessages.unauthorized.message,
        });
    }
    
}

module.exports = auth;
