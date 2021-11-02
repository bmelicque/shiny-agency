import { useState, createContext } from "react";

interface surveyContextInterface {
	answers: boolean[];
	saveAnswer: (index: number, answer: boolean) => void;
}

export const SurveyContext = createContext<surveyContextInterface>(undefined!);

export const SurveyProvider = (props: React.PropsWithChildren<{}>) => {
	const [answers, setAnswers] = useState<boolean[]>([]);
	const saveAnswer = (index: number, answer: boolean) => {
		setAnswers((currAnswers: boolean[]) => {
			console.log(currAnswers);
			
			currAnswers[index] = answer;
			return [...currAnswers];
		});
	};

	return (
		<SurveyContext.Provider value={{ answers, saveAnswer }}>
			{props.children}
		</SurveyContext.Provider>
	);
};
