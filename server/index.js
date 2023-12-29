const express = require("express");
require("dotenv").config();
const session = require("express-session");
const cors = require("cors");
var bodyParser = require("body-parser");
const passport = require("passport");
const authRoute = require("./routes/auth");
const repositoriesRoute = require("./routes/repositories");
const passportConfig = require("./passwort");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: process.env.NODE_ENV === "production" },
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: process.env.APP_URL,
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoute);
app.use("/repositories", repositoriesRoute);

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
