var express = require("express");
const { getUserData } = require("../services/user.service");
var router = express.Router();

router.get("/get-user", async (req, res) => {
  const email = req?.email;
  let response = await getUserData(email);
  res.json(response);
});

module.exports = router;
