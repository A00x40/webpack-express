import dotenv from 'dotenv'
import express from 'express'
import fetch from 'node-fetch'
import { default as FormData } from "form-data"

dotenv.config()

const app_key = process.env.API_KEY

const app = express()
app.use(express.json({
    type: ['application/json', 'text/plain']
}));
app.use(express.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html', { root: __dirname + '/..' })
})

app.post('/api/test', async function (req, res) {
    var sentiments = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${app_key}&of=json&url=${req.body.txt}&lang=en`)
    const json = await sentiments.json()
    res.send(json)
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})




