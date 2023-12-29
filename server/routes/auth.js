const router = require("express").Router();
const passport = require("passport");

router.get("/user", (req, res) => {
	if (req.user) {
		res.status(200).json({
			status: "success",
			user: req.user.profile,
		});
	} else {
		res.status(401).json({
			status: "fail",
			message: "You are not authenticated.",
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
	res.json({
		status: "success",
		message: "Successfully log out.",
	});
});

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
	"/github/callback",
	passport.authenticate("github", {
		failureRedirect: process.env.APP_URL + "/login",
	}),
	(req, res) => {
		req.session.user = {
			...req.user.profile,
			accessToken: req.user.accessToken,
		};

		res.redirect(process.env.APP_URL);
	}
);

module.exports = router;
