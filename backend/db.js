const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://worshipwell:rajrohit2001@worshipwell.jr0lfhp.mongodb.net/worshipwell?retryWrites=true&w=majority&appName=worshipwell';
const mongoDB =async() =>{
    await mongoose.connect(mongoURI,{ useNewUrlParser: true },async(err,result)=>{
        if (err) console.log("- - -",err)
            else {
                console.log("connected");
                const fetched_data  = await mongoose.connection.db.collection("events");
                fetched_data.find({}).toArray(function( err, data){
                    if (err) console.log(err);
                    else console.log(data);
                })
            }
        
    });

}
module.exports = mongoDB;