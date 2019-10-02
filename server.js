const express = require('express')
const distName = require('./webpack.common').externals.paths.dist
const path = require('path')

const port = 5000
const app = express()

app.use(express.static(distName))

app.get('*', (req, res) => res.sendFile(path.join(distName + '/index.html')))
app.listen(port)
console.log(`Server has been started on port ${port}`)