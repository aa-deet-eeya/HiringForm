const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'resume/' })

const controller = require('./controller/form-data')


router.post('/' , upload.single('file') ,controller.post_form_data)


module.exports = router 