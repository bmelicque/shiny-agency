import { formatQueryParams } from "./Results";

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
