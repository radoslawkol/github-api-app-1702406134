const router = require("express").Router();
const passport = require("passport");

router.get("/user", (req, res) => {
	if (req.user) {
		res.status(200).json({
			status: "success",
			user: req.user,
		});
	} else {
		res.status(401).json({
			status: "fail",
			message: "You are not logged in.",
		});
	}
});

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

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
	"/github/callback",
	passport.authenticate("github", {
		successRedirect: process.env.APP_URL,
		failureRedirect: "/auth/failed",
	})
);

module.exports = router;
