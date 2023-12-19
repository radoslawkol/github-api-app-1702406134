const express = require("express");
require("dotenv").config();
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
const passportConfig = require("./passwort");

const app = express();

app.use(
	cors({
		origin: process.env.APP_URL,
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use(
	cookieSession({
		name: "session",
		keys: ["token"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());

app.use("/auth", authRoute);

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
