import { Footer } from "./Footer";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "../../utils/context";

describe("Footer", () => {
	it("should render without crash", async () => {
		render(<Footer />, { wrapper: ThemeProvider });
	});

	it("should change theme", async () => {
		render(<Footer />, { wrapper: ThemeProvider });
		const nightModeButton = screen.getByRole("button");
		expect(nightModeButton.textContent).toBe("Passer au mode sombre 🌙");
		fireEvent.click(nightModeButton);
		expect(nightModeButton.textContent).toBe("Passer au mode clair ☀️");
	});
});
