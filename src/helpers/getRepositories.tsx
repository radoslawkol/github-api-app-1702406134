interface IProps {
	signal?: AbortSignal | null | undefined;
	searchTerm?: string;
}

export const getRepositories = async ({ signal, searchTerm }: IProps) => {
	let url = `${process.env.VITE_BACKEND_URL}/repositories`;

	if (searchTerm) {
		url += `?searchTerm=${searchTerm}`;
	}

	const res = await fetch(url, {
		credentials: "include",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Credentials": "true",
		},
		signal,
	});

	return await res.json();
};
