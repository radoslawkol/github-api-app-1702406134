const router = require("express").Router();
const passport = require("passport");

router.get("/failed", (req, res) => {
	res.status(401).json({
		status: "fail",
		message: "Authentication failed",
	});
});

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect(`${process.env.APP_URL}/login`);
});

router.get(
	"/github",
	passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
	"/github/callback",
	passport.authenticate("github", {
		successRedirect: process.env.APP_URL,
		failureRedirect: "/auth/failed",
	})
);

module.exports = router;
