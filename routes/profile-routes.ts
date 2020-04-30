const router = require("express").Router();
import { authCheck } from "../middlewares/authCheck";

router.get("/", authCheck, (req, res) => {
  res.render("profile", { user: req.user });
});

export default router;
