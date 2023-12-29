const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
	try {
		const { data } = await axios.get(
			`https://api.github.com/search/repositories?q=user:${req.session.user?.username}`,
			{
				headers: {
					Authorization: `Bearer ${req.session.passport?.user?.accessToken}`,
				},
			}
		);

		if (data?.items.length > 0) {
			const sortedRepos = data.items.sort(
				(a, b) => new Date(b.created_at) - new Date(a.created_at)
			);

			const recentRepo = sortedRepos[0];
			console.log(recentRepo);

			return res.status(200).json({
				status: "success",
				repository: {
					name: recentRepo.name,
					url: recentRepo.html_url,
					stars: recentRepo.stargazers_count,
				},
			});
		}

		res.status(200).json({
			status: "success",
			message: "No repositories found",
		});
	} catch (err) {
		res.status(500).json({
			status: "fail",
			message: err.message,
		});
	}
});

module.exports = router;
