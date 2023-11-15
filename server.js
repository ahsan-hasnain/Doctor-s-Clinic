const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes');
const cors = require("cors");
const appointmentRoutes = require('./routes/appointmentRoutes');
app.use(express.json())
app.use(cors())


app.use('/api/users', userRoutes); 
app.use('/api/appointments', appointmentRoutes); 


app.get('/api',(req,res)=>{
    res.send('okkk')
})


app.listen(3003,()=>{
    console.log('app running');
})