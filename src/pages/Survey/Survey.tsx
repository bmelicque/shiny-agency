import { useParams } from "react-router";
import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";
import { useGet } from "../../utils/hooks/useGet";

type SurveyParams = {
	questionNumber: string;
};

const linkStyle = `px-4 p-2 hover:underline`;
const buttonStyle = `py-4 px-16 text-xl rounded-xl border-2 border-transparent hover:border-${colors.primary}`;

export function Survey() {
	const questionNumber: number = +useParams<SurveyParams>().questionNumber;
	const prevQuestionNumber = questionNumber > 1 ? questionNumber - 1 : 1;
	const nextQuestionNumber = questionNumber + 1;

	const { data, isLoading, error } = useGet("http://localhost:8000/survey");
	const questions = data.surveyData ? Object.values(data.surveyData) : [];

	if (error) return <p>Une erreur s'est produite</p>;

	return (
		<div className="flex flex-col items-center gap-12">
			<h1 className={`text-xl font-bold`}>Question {questionNumber}</h1>

			{isLoading ? (
				<i className="fas fa-spinner fa-spin text-3xl"></i>
			) : (
				<>
					<p>{questions[questionNumber]}</p>
					<div className="flex gap-4">
						<button className={buttonStyle}>Oui</button>
						<button className={buttonStyle}>Non</button>
					</div>
				</>
			)}

			<nav className="flex gap-8">
				<Link to={`/survey/${prevQuestionNumber}`} className={linkStyle}>
					Précédent
				</Link>
				{questionNumber >= 10 ? (
					<Link to="/results" className={linkStyle}>
						Résultats
					</Link>
				) : (
					<Link to={`/survey/${nextQuestionNumber}`} className={linkStyle}>
						Suivant
					</Link>
				)}
			</nav>
		</div>
	);
}
