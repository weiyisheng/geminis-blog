import express from 'express'
import path from 'path'


const APP_PORT = 3000
const compression = require('compression')


export default function(app) {

  app.use(compression())

  // Serve static resources
  app.use(express.static(path.resolve(__dirname, 'public')))

  app.use("/", function(req, res, next) {
    res.render('index.ejs', {})
  })

  app.listen(APP_PORT, () => {
    console.log(`App is now running on http://localhost:${APP_PORT}`)
  })


}
