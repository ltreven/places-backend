const express = require('express')
const router = express.Router()
const unidecode = require("unidecode")
const axios = require("axios")

// include the model:
const Place = require('../models/place')

router.get('/', (req, res, next) => {
  const search = unidecode(req.query.search)
  const path = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
  const queryParams = "inputtype=textquery&fields=formatted_address,name,geometry,place_id"

  axios.get(path + "?" + queryParams + "&key=" + process.env.GOOGLE_API_KEY + "&input=" + search)
  .then(response => {
    res.json(response.data)
  })

})

module.exports = router
