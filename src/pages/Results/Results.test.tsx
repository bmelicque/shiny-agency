import { rest } from "msw";
import { setupServer } from "msw/node";
import {
	render,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import { formatQueryParams, Results } from "./Results";
import { SurveyProvider } from "../../utils/context";
import { BrowserRouter as Router } from "react-router-dom";

// formatQueryParams
describe("The formatQueryParams function", () => {
	it("should use the correct format for params", () => {
		const expectedState = "a1=true";
		expect(formatQueryParams({ 1: true })).toEqual(expectedState);
	});
	it("should concatenate params with &", () => {
		const expectedState = "a1=true&a2=false";
		expect(formatQueryParams({ 1: true, 2: false })).toEqual(expectedState);
	});
});

/* React component */
const resultsMockedData = [
	{
		title: "seo",
		description: `Le SEO est en charge du référencement web d'une page`,
	},
	{
		title: "frontend",
		description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
	},
];

const server = setupServer(
	rest.get("http://localhost:8000/results", (req, res, ctx) => {
		return res(ctx.json({ resultsData: resultsMockedData }));
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function wrappers({children}: React.PropsWithChildren<{}>) {
	return (
		<Router>
			<SurveyProvider>{children}</SurveyProvider>
		</Router>
	);
};

describe("Results", () => {
	it("should display the data after loading", async () => {
		render(<Results />, { wrapper: wrappers });
		await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
		const jobTitleElements = screen.queryAllByTestId("job-title");
		expect(jobTitleElements[0].textContent).toBe("seo");
		expect(jobTitleElements.length).toBe(2);
		const jobDescriptionElements = screen.getAllByTestId("job-description");
		expect(jobDescriptionElements[1].textContent).toBe(
			resultsMockedData[1].description
		);
		expect(jobDescriptionElements.length).toBe(2);
	});
});
