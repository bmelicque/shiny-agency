import { useContext } from "react";
import { useGet } from "../../utils/hooks/useGet";
import {
	SurveyContext,
	answersInterface,
} from "../../utils/context/SurveyContext";

/* Defining and controlling interfaces */
interface resultInterface {
	title: string;
}

export interface resultsData {
	resultsData: resultInterface[];
}

function isResultsData(data: any): data is resultsData {
	return data?.resultsData !== undefined;
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

	const { data, isLoading, error } = useGet(
		`http://localhost:8000/results?${queryParams}`
	);

	if (error) return <span>Il y a un problème...</span>;

	const resultsData = isResultsData(data) ? data.resultsData : [];

	return isLoading ? (
		<p>Chargement...</p>
	) : (
		<div className="">
			Les compétences dont vous avez besoin&nbsp;:
			{resultsData &&
				resultsData.map((result) => <span>{result.title}</span>).join(", ")}
		</div>
	);
}
