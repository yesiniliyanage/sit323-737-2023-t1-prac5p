//calculator app
const express = require("express");
const res = require("express/lib/response");
const app = express();
const add= (n1,n2) => {
    return n1+n2;
}
const subtract= (n1,n2) => {
    return n1-n2;
}
const multiply = (n1,n2) => {
    return n1*n2;
}
const divide= (n1,n2) => {
    return n1/n2;
} 

//addition
app.get("/yesini", (req,res)=>{
    try{
        const n1= parseFloat(req.query.n1); //if we dont parsefloat it will interept as strings, so '5'+ '8' will be '58'
        const n2= parseFloat(req.query.n2);
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }

    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }
    const result = yesini(n1,n2);
    res.status(200).json({statuscode:200, data:result }); //this is our result print. status code:200 is the response for a request. 200 is embedded in the status packet in the request, we can't use just 
    //any number
    //404: page not found error is a status code
} catch(error) {
    console.log(error)
    res.status(500).json({statuscode:500, msg: error.toString() })
}
});

//subtraction
app.get("/subtract", (req,res)=>{
    try{
        const n1= parseFloat(req.query.n1); //if we dont parsefloat it will interept as strings, so '5'+ '8' will be '58'
        const n2= parseFloat(req.query.n2);
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }

    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }
    const result = subtract(n1,n2);
    res.status(200).json({statuscode:200, data:result }); //this is our result print. status code:200 is the response for a request. 200 is embedded in the status packet in the request, we can't use just 
    //any number
    //404: page not found error is a status code
} catch(error) {
    console.log(error)
    res.status(500).json({statuscode:500, msg: error.toString() })
}
});

//multiplication
app.get("/multiply", (req,res)=>{
    try{
        const n1= parseFloat(req.query.n1); //if we dont parsefloat it will interept as strings, so '5'+ '8' will be '58'
        const n2= parseFloat(req.query.n2);
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }

    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }
    const result = multiply(n1,n2);
    res.status(200).json({statuscode:200, data:result }); //this is our result print. status code:200 is the response for a request. 200 is embedded in the status packet in the request, we can't use just 
    //any number
    //404: page not found error is a status code
} catch(error) {
    console.log(error)
    res.status(500).json({statuscode:500, msg: error.toString() })
}
});

//division
app.get("/divide", (req,res)=>{
    try{
        const n1= parseFloat(req.query.n1); //if we dont parsefloat it will interept as strings, so '5'+ '8' will be '58'
        const n2= parseFloat(req.query.n2);
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }

    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }

    if (n2 === 0){
        console.log()
        throw new Error("n2 cannot be zero");
    }
    const result = divide(n1,n2);
    res.status(200).json({statuscode:200, data:result }); //this is our result print. status code:200 is the response for a request. 200 is embedded in the status packet in the request, we can't use just 
    //any number
    //404: page not found error is a status code
} catch(error) {
    console.log(error)
    res.status(500).json({statuscode:500, msg: error.toString() })
}
});

//port
const port = 3040;
app.listen(port,() => {
    console.log("hello I'm listening to port"+port);
    
})
// logging
/*
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({filename: 'error.log', level: error }),
        new winston.transports.File({filename: 'combined.log',}),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
} */
