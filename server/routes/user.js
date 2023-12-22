const router = require("express").Router();
const { upload } = require("../multer");
const { createUser } = require("../controllers/user");

router.post("/create-user", upload.single("avatar"), createUser);
module.exports = router;
