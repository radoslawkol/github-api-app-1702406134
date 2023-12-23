import { screen, render } from "@testing-library/react";
import Login from "@pages/Login";

describe("Login Page", () => {
	it("renders properly", () => {
		render(<Login />);
		expect(screen.getByText(/Welcome to GitHub API app!/i)).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /login with github/i })
		).toBeInTheDocument();
	});
});
