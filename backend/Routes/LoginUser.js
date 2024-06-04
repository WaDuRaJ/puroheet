const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "ItisOurFinalYearEngineeringProject2024!@#$%^&*"

router.post("/loginuser",
    [
        body("email").isEmail(),
        body("password").isLength({ min: 5 })
    ],
    async (req, res)=> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    let email = req.body.email;
    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: "try logging with correct credentials" })
        }

        const pdCompare = await bcrypt.compare(req.body.password,userData.password)
        if (!pdCompare) {
            return res.status(400).json({ errors: "try logging with correct credentials" })
        }

        const data = {
            user:{
                id:userData.id
            }
        }

        const authToken = jwt.sign(data,jwtSecret)

        return res.json({ success: true,authToken: authToken })
    }
    catch (error) {
      console.log(error);
      res.json({ success: false });
    }
    }
);

module.exports = router;
