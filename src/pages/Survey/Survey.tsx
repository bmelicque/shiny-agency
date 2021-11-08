import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useGet } from "../../utils/hooks/useGet";
import { useContext } from "react";
import { SurveyContext } from "../../utils/context";
import { ThemeContext } from "../../utils/context/ThemeContext";

type SurveyParams = {
	questionNumber: string;
};

interface surveyData {
	surveyData: {
		[index: number]: string;
	};
}

const style = {
	container: `flex flex-col items-center gap-12`,
	title: `text-xl font-bold border-b-2 border-primary`,
	link: `px-4 p-2 hover:underline`,
	button: (isDark: boolean, isSelected: boolean) =>
		`py-4 px-16 text-xl rounded-xl border-2 ${
			isSelected ? "border-primary" : "border-transparent"
		} ${isDark ? "bg-dark" : "bg-transparent"}`,
};

export function Survey() {
	const questionNumber: number = +useParams<SurveyParams>().questionNumber;
	const prevQuestionNumber = questionNumber > 1 ? questionNumber - 1 : 1;
	const nextQuestionNumber = questionNumber + 1;

	const { answers, saveAnswer } = useContext(SurveyContext);
	const { theme } = useContext(ThemeContext);
	const isDark = theme === "dark";

	const { data, isLoading, error } = useGet<surveyData>(
		"http://localhost:8000/survey"
	);

	if (error) return <p>Une erreur s'est produite</p>;

	if (isLoading) return <i className="fas fa-spinner fa-spin text-3xl"></i>;

	const questions = data!.surveyData;

	return (
		<div className={style.container}>
			<h1 className={style.title}>Question {questionNumber}</h1>

			<p>{questions[questionNumber]}</p>
			<div className="flex gap-4">
				<button
					className={style.button(isDark, answers[questionNumber] === true)}
					onClick={() => saveAnswer(questionNumber, true)}
				>
					Oui
				</button>
				<button
					className={style.button(isDark, answers[questionNumber] === false)}
					onClick={() => saveAnswer(questionNumber, false)}
				>
					Non
				</button>
			</div>

			<nav className="flex gap-8">
				<Link to={`/survey/${prevQuestionNumber}`} className={style.link}>
					Précédent
				</Link>
				{questionNumber >= Object.keys(questions).length ? (
					<Link to="/results" className={style.link}>
						Résultats
					</Link>
				) : (
					<Link to={`/survey/${nextQuestionNumber}`} className={style.link}>
						Suivant
					</Link>
				)}
			</nav>
		</div>
	);
}
