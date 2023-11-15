const AllFunctions = require('../functions/crudFunctions')

async function appointment(req,res){
    const {name,
    lastName,
    phone,
    email,
    city,
    date,
    gender} = req.body
    try{
        await AllFunctions.createDocument({
            name:name,
    lastName:lastName,
    phone:phone,
    email:email,
    city:city,
    date:date,
    gender:gender
        },"Clinic", "appointments").then(()=>{console.log("res entered")})
    }catch(e){
        console.log("errr");
    }
    res.send("okay")
}
module.exports = appointment