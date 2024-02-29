const auth = require('../models/authorization').grabId;
var jwt = require('jsonwebtoken');

const login = async(req,res)=>
{
    //utilize what we already have
    userToken = {email: req.body.email, password: req.body.password}

    try {
        const id = await auth(req.body.email, req.body.password); // we need the id before checking this condition
        
        if(id==-1)
        {
            res.status(500).send("User is not authorized");
        }
        
        else
        {
            //900000 15 min
            const token = jwt.sign({email: req.body.email}, 'user', { expiresIn: '900000' }); // issue token
            const authResponse = {token:token, id:id} //creating the response
            
            res.setHeader('Authorization', `Bearer ${token}`); //set the header so we can make the request later
            res.send(authResponse);
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports=
{
    login
}

