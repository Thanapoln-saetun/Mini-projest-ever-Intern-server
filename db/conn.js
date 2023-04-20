const mongoose = require("mongoose");

const DB = "mongodb+srv://Jaohack:Jaohack852543@cluster0.ndgbyvt.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));