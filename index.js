const express= require("express")
const app=express();

const PORT=6565;
// importing the file like it providing info that route folder only contain routes or nothing else
const userRoute=require('./routes/users')
const AdminRoute=require('./routes/Admin')
//query : still u can notice here that they aren't provide the acess to the files present in routes
//sol: so we can export the && then apply those routes

app.use('/users',userRoute);
app.use('/Admin',AdminRoute);

app.listen(PORT,()=>{
    console.log("server listening the port")
}) 