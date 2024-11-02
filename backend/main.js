const express = require('express')

app = express()

app.get('/', (req, res)=> {
    res.send("Index endpoint")
})

app.listen(3000, () => {
    console.log("Server listening on http://localhost:3000")
})