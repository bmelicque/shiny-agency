import { useContext } from "react";
import { useGet } from "../../utils/hooks/useGet";
import {
	SurveyContext,
	answersInterface,
} from "../../utils/context/SurveyContext";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";

/* Defining and controlling interfaces */
interface resultInterface {
	title: string;
	description: string;
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

const style = {
	wrapper: `m-auto max-w-2xl flex flex-col py-16 items-center gap-16`,
	title: `text-center text-3xl font-bold`,
	jobTitle: `text-${colors.primary}`,
	jobDescription: `text-${colors.secondary} mb-2`,
	link: `m-auto rounded-full px-4 py-1 text-center text-xl hover:bg-${colors.primary} hover:text-white`,
};

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
		<p data-testid="loader">Chargement...</p>
	) : (
		<div className={style.wrapper}>
			<div className={style.title}>
				Les compétences dont vous avez besoin&nbsp;:&nbsp;
				{resultsData &&
					resultsData.map(({ title }, index) => (
						<>
							{index > 0 ? ", " : ""}
							<span
								key={`title-${title}`}
								className={style.jobTitle}
								data-testid="job-title"
							>
								{title}
							</span>
						</>
					))}
			</div>
			<Link to="./freelances" className={style.link}>
				Découvrez nos profils
			</Link>
			<div>
				{resultsData &&
					resultsData.map(({ title, description }) => (
						<>
							<h2 key={`title-description-${title}`} className={style.jobTitle}>
								{title.toUpperCase()}
							</h2>
							<p
								key={`description-${title}`}
								className={style.jobDescription}
								data-testid="job-description"
							>
								{description}
							</p>
						</>
					))}
			</div>
		</div>
	);
}
