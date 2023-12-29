export const getRecentRepository = async () => {
	const res = await fetch(`${process.env.VITE_BACKEND_URL}/repositories`, {
		credentials: "include",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Credentials": "true",
		},
	});

	return await res.json();
};
