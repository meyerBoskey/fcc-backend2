const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    // var ip = req.headers['x-forwarded-for'] ||
    //  req.connection.remoteAddress ||
    //  req.socket.remoteAddress ||
    //  (req.connection.socket ? req.connection.socket.remoteAddress : null);
    // console.log(req.headers['x-forwarded-for']);
    // console.log(req.connection.remoteAddress);
    // console.log(req.socket.remoteAddress);
    // console.log(req.connection.socket ? req.connection.socket.remoteAddress : null);
    res.json({
        IP: req.headers['x-forwarded-for'].split(",")[0],
        language: req.acceptsLanguages()[0],
        software: req.headers['user-agent'].split(/\(|\)/g)[1]
    });
});

const server = app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
