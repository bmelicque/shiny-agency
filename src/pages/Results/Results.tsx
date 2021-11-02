import { useContext } from "react";
import { SurveyContext } from "../../utils/context/SurveyContext";

export function Results() {
	const { answers } = useContext(SurveyContext);
    console.log(answers);
    

	return <div>C'est la page des résultats</div>;
}
