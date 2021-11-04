import { useState, createContext } from "react";

export interface answersInterface {
	[index: number]: boolean;
}

interface surveyContextInterface {
	answers: answersInterface;
	saveAnswer: (index: number, answer: boolean) => void;
}

export const SurveyContext = createContext<surveyContextInterface>(undefined!);

export const SurveyProvider = (props: React.PropsWithChildren<{}>) => {
	const [answers, setAnswers] = useState<answersInterface>({});
	const saveAnswer = (index: number, answer: boolean) => {
		setAnswers((currAnswers: answersInterface) => {
			console.log(currAnswers);

			currAnswers[index] = answer;
			return { ...currAnswers };
		});
	};

	return (
		<SurveyContext.Provider value={{ answers, saveAnswer }}>
			{props.children}
		</SurveyContext.Provider>
	);
};
