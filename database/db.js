import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection=()=>{
    const DB_URI=`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-v6vd9ej-shard-00-00.9kjamqs.mongodb.net:27017,ac-v6vd9ej-shard-00-01.9kjamqs.mongodb.net:27017,ac-v6vd9ej-shard-00-02.9kjamqs.mongodb.net:27017/?ssl=true&replicaSet=atlas-hziuaf-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        mongoose.connect(DB_URI,{useNewUrlParser:true});
        console.log("database connected successfully");
    }catch(error){
        console.log('error while connecting to databse',error.message);
    }
}

export default Connection;