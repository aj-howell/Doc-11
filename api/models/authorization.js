const User = require('../models/users').userModel;
const jwt = require('jsonwebtoken');

const grabId = async(email, password)=>
{
    try {
        const user= await User.findOne({email:email, password:password});

        if(user==null)
        {
            return -1;
        }

        return user._id;
    } catch (error) {
        console.log(error);
    }
}

const checkToken=async(header,res)=>
{
    const headerS = `${header}`;
    if(headerS.startsWith('Bearer'))
     {
        const token = headerS.substring('Bearer '.length);
        
        try {
        const decoded=jwt.verify(token, 'user');
        
        const emailExist = await User.exists({email:decoded.email})==null;
        
        if(emailExist==true)
        {
            return false;
        }
    
         return true;   

        } catch (error) {
            console.log(error);
        }
    }
    return false;
}
module.exports=
{
    grabId,
    checkToken
}