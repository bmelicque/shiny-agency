import { useContext } from "react";
import { useGet } from "../../utils/hooks/useGet";
import {
	SurveyContext,
	answersInterface,
} from "../../utils/context/SurveyContext";
import ResultsVue from "./Results.vue";

/* Defining and controlling interfaces */
interface resultsData {
	resultsData: {
		title: string;
		description: string;
	}[];
}

// Takes the answers object and formats it into a parameter string
export function formatQueryParams(answers: answersInterface) {
	return Object.keys(answers)
		.map((answerNumber) => `a${answerNumber}=${answers[+answerNumber]}`)
		.join("&");
}

// Actual component
export function Results() {
	const { answers } = useContext(SurveyContext);
	const queryParams = formatQueryParams(answers);

	const { data, isLoading, error } = useGet<resultsData>(
		`http://localhost:8000/results?${queryParams}`
	);

	if (error) return <span>Il y a un problème...</span>;
	if (isLoading) return <p data-testid="loader">Chargement...</p>

	const resultsData = data!.resultsData;

	return (
		<ResultsVue data={resultsData} />
	);
}
