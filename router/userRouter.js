const router = require("express").Router();
const {createUser, getAllUers, updateOne, findUser} = require("../controller/users_controler");

router.post("/post", createUser);
router.get("/", getAllUers);
router.patch("/patch/:id" , updateOne)
router.post("/find", findUser)

module.exports= router;