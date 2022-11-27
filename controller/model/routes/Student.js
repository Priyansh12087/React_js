const express = require("express");
const app = express();
const router = express.Router();
const StudentController= require('../controller/StudentController')

router.post('/student',StudentController.createStudnet)
router.get('/Student',StudentController.getAllStudent)
module.exports = router;