import { screen, render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
	it("renders properly", () => {
		render(<App />);
		expect(screen.getByText("Vite + React")).toBeInTheDocument();
	});
});
