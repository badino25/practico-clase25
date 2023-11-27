const express= require('express');
const router= express.Router();
const path = require("path")


const {about} = require ("../controllers/about-controllers");
router.get("/about", about);


module.exports = router

