const jwt = require('jsonwebtoken');
const responseMessages = require('../constants/responseMessages');
const Admin = require('../Mongo_Schema/admin/adminSchema');

const adminAuth = function(req, res, next){
    
    let token = (req.headers.authorization);
    console.log(token);
    if(token){
        jwt.verify(token, 'secret', (err, verifiedJwt) => {
            if(err){
                console.log(err);
                res.status(responseMessages.unauthorized.code).json({
                    message: responseMessages.unauthorized.message,
                });
            }else{
                console.log(verifiedJwt);
                console.log(Admin);
                req.id = verifiedJwt.id;
                console.log(req.id);
                next();
            }
        });
    }else{
        console.log("error");
        res.status(responseMessages.unauthorized.code).json({
            message: responseMessages.unauthorized.message,
        });
    }
    
}

module.exports = adminAuth;
