// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';

// const app= express();
// app.use(bodyParser.json({limit:'30mb',extended:true}));
// app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));


// const connect = mongoose.connect('mongodb://localhost:27017/muarchive',{
//     useNewUrlParser:true,
// })
// .then(() => app.listen(5000,() => console.log("Listening")));
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/muarchive',{
    useNewUrlParser:true,useUnifiedTopology:true
});
