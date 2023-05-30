const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const uri = "mongodb+srv://aryan2130:kec4lMQJ9BmvOFRj@cluster0.ri4ol.mongodb.net/todo?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 
}).then(()=>{
    console.log("connected");
}).catch((e)=>{
    console.log('failed'+ e);
});