import { screen, render } from "@testing-library/react";
import Error from "@pages/Error";

describe("Error Page", () => {
	it("renders properly", () => {
		render(<Error />);
		screen.getByRole("heading", { name: /PAGE WAS NOT FOUND!/i });
		screen.getByText(/404/i);
	});
});
