"use strict";


const express = require("express");
const router = express.Router()
const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login) 
router.post("/login",ctrl.process.login) // 로그인 데이터를 받아 처리

module.exports = router //내보내기