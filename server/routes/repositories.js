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

		if (req?.query?.searchTerm) {
			const matchRepos = data.items
				.filter((repo) =>
					repo.name
						.toLowerCase()
						.includes(req?.query?.searchTerm?.toLowerCase())
				)
				.map((repo) => ({
					id: repo.id,
					name: repo.name,
					url: repo.html_url,
					stars: repo.stargazers_count,
				}));

			return res.status(200).json({
				status: "success",
				repositories: matchRepos,
			});
		} else if (data?.items.length > 0) {
			const sortedRepos = data.items.sort(
				(a, b) => new Date(b.created_at) - new Date(a.created_at)
			);

			const recentRepo = sortedRepos[0];

			return res.status(200).json({
				status: "success",
				repository: {
					id: recentRepo.id,
					name: recentRepo.name,
					url: recentRepo.html_url,
					stars: recentRepo.stargazers_count,
				},
			});
		}

		res.status(404).json({
			status: "fail",
			message: "No repositories found",
		});
	} catch (err) {
		res.status(500).json({
			status: "fail",
			message: "No repositories found",
		});
	}
});

module.exports = router;
