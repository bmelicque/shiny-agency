import { render, screen } from "@testing-library/react";
import Card from ".";
import { ThemeProvider } from "../../utils/context";
import { BrowserRouter as Router } from 'react-router-dom';

function wrappers({children}: React.PropsWithChildren<{}>) {
	return (
		<Router>
			<ThemeProvider>{children}</ThemeProvider>
		</Router>
	);
};

describe("Card", () => {
	it("should render with title and picture", async () => {
		render(<Card freelanceId="0" label="Dev" title="John Doe" picture="./picture.png" />, {
			wrapper: wrappers,
		});
		const cardImg = screen.getByRole("img") as HTMLImageElement;
		const cardTitle = await screen.findByText(/John/i);
		expect(cardImg.src).toBe("http://localhost/picture.png");
		expect(cardTitle.textContent).toBe("John Doe");
	});
});
