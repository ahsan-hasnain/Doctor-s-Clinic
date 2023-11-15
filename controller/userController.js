const AllFunctions = require('../functions/crudFunctions')

async function user(req,res){
    const {username, password} = req.body
    try{
        await AllFunctions.createDocument({
            username:username,
             password:password
        },"Clinic", "users").then(()=>{console.log("res entered")})
    }catch(e){
        console.log("errr");
    }
    res.send("okay")
}
module.exports = user