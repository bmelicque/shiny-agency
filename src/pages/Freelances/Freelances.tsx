import { useGet } from "../../utils/hooks/useGet";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import FreelancesVue from "./Freelances.vue";

export interface freelanceProfile {
	id: string;
	name: string;
	job: string;
	picture: string;
	skills: string[];
	location: string;
	available: boolean;
	tjm: number;
}

interface freelanceData {
	freelancersList: freelanceProfile[];
}

export function Freelances() {
	const { theme } = useContext(ThemeContext);
	const { data, isLoading, error } = useGet<freelanceData>(
		"http://localhost:8000/freelances"
	);

	if (error) return <p>Une erreur s'est produite</p>;

	const freelancersList = data?.freelancersList || [];

	return (
		<FreelancesVue
			isDark={theme === "dark"}
			isLoading={isLoading}
			data={freelancersList}
		/>
	);
}
