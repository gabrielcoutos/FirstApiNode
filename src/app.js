const express = requere('express');
const app = express();


app.use((request,response,next)=> {
    const data = {
        message: "TOP!"
    }
    response.status(200).json(data)

});


module.exports = app;

