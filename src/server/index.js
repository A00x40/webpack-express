var path = require('path')

const dotenv = require('dotenv')
dotenv.config()

const app_key = process.env.API_KEY

const express = require('express')
const app = express()
app.use(express.json({
    type: ['application/json', 'text/plain']
}));
app.use(express.urlencoded({
  extended: true
}));

//const fetch = require('node-fetch')

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html', { root: __dirname + '/..' })
})

app.post('/api/test', function (req, res) {
    
    const requestOptions = {
        method: 'POST',
        body: {
            "txt": req.body.txt,
            "key": process.env.API_KEY
        },
        redirect: 'follow'
    };

    //fetch("https://api.meaningcloud.com/lang-4.0/identification", requestOptions)
    
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})




