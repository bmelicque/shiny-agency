import { render, screen, fireEvent } from "@testing-library/react";
import Card from ".";
import { ThemeProvider } from "../../utils/context";

describe("Card", () => {
	it("should render with title and picture", async () => {
		render(<Card label="Dev" title="John Doe" picture="./picture.png" />, {
			wrapper: ThemeProvider,
		});
		const cardImg = screen.getByRole("img") as HTMLImageElement;
		const cardTitle = await screen.findByText(/John/i);
		expect(cardImg.src).toBe("http://localhost/picture.png");
		expect(cardTitle.textContent).toBe("John Doe");
	});
	it("should add a star to the label on click", async () => {
		render(<Card label="Dev" title="John Doe" picture="./picture.png" />, {
			wrapper: ThemeProvider,
		});
        const cardLabel = screen.getByText(/Dev/i);
		const cardNode = cardLabel.closest("div")!;
		fireEvent.click(cardNode);
        expect(cardLabel.textContent).toBe("Dev ⭐️")
	});
});
