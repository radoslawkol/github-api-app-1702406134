export const logout = async () => {
	const res = await fetch(`${process.env.VITE_BACKEND_URL}/auth/logout`, {
		method: "GET",
		credentials: "include",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Credentials": "true",
		},
	});

	if (!res.ok) {
		throw Error("Something went wrong.");
	}

	return await res.json();
};
