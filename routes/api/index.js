const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");
const  favoriteRoutes = require("./favoriteRoutes");

router.use("/users", userRoutes);
router.use("/comment", commentRoutes);
router.use("/favorite", favoriteRoutes);

module.exports = router;
