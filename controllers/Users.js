const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const User = require('../models/User')







module.exports = router