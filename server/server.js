//we can use this too but we will have to make chane in our package.json --> we will have to add "type":"module"
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv"; // Note the "* as" syntax


dotenv.config(); // Load environment variables from .env file

const app = express();
 
app.use(express.json());
app.use(cors());


const uri = process.env.URI;
mongoose.connect(uri)
    .then(()=>{
        const port = process.env.PORT;
        app.listen(port, ( )=>{
            console.log(`server is running on port:- ${port}`);
        })
    })
    .catch((err)=>{
        console.log(err);
    })

    //password == WFdRgL9LFPZqUUAo
