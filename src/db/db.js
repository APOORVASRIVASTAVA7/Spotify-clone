const mongooose = require('mongoose');

async function connectDB() {


    try{
        await mongooose.connect(process.env.MONGO_URI)
        console.log("DB connected");
    }
    catch(error){
        console.log('DB connection error: ', error);

         
    }
}

module.exports = connectDB;