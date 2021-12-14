const express = require('express')
const cookieparser = require('cookie-parser')
const fs = require('fs');
const path  = require('path');
const router = express.Router();
const app = express();

app.use(cookieparser());

const port = 3000;

app.get('/', (req, res) => {
    // res.send('welcome to express app')
    res.sendFile(path.join(__dirname+'/index.html'));
    console.log("Cookies: ", req.cookies)
});

app.get('/cookie', (req, res) => {
    res.cookie(cookie_name, 'cookie_value').send('cookie puesta');
});

app.listen(port, () => console.log(`Corriendo en el puerto ${port}`));