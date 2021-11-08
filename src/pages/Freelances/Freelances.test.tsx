import { rest } from "msw";
import { setupServer } from "msw/node";
import {
	render,
	waitForElementToBeRemoved,
	screen,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Freelances from ".";
import { ThemeProvider } from "../../utils/context";

const freelancersMockData = [
	{
		name: "John Doe",
		job: "Développeur front",
		picture: "",
	},
	{
		name: "Jane Doe",
		job: "Développeuse back",
		picture: "",
	},
];

const server = setupServer(
	rest.get("http://localhost:8000/freelances", (req, res, ctx) => {
		return res(ctx.json({ freelancersList: freelancersMockData }));
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function wrappers({children}: React.PropsWithChildren<{}>) {
	return (
		<Router>
			<ThemeProvider>{children}</ThemeProvider>
		</Router>
	);
};

describe("Freelances", () => {
	it("should render without crashing", async () => {
		render(<Freelances />, { wrapper: wrappers });
		expect(screen.getByTestId("loader")).toBeTruthy();
		await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
		expect(screen.getByText("John Doe")).toBeTruthy();
		expect(screen.getByText("Jane Doe")).toBeTruthy();
	});
});
