const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");
const  favoriteRoutes = require("./favoriteRoutes");
const stationRoutes = requier("./stationRoutes");

router.use("/users", userRoutes);
router.use("/comment", commentRoutes);
router.use("/favorite", favoriteRoutes);
router.use("/station", stationRoutes.js);

module.exports = router;
