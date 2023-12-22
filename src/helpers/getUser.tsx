import { ICustomError } from "@interfaces/CustomError";

export const getUser = async () => {
	const res = await fetch(`${process.env.VITE_BACKEND_URL}/auth/user`, {
		method: "GET",
		credentials: "include",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Credentials": "true",
		},
	});

	const data = await res.json();

	if (data.status === "fail") {
		const error: ICustomError = new Error(data.message);
		error.code = res.status;
		error.status = data.status;

		throw error;
	}

	return data;
};
