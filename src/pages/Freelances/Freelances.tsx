import Card from "../../components/Card";
import colors from "../../utils/style/colors";
import { useGet } from "../../utils/hooks/useGet";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

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

export interface freelanceData {
	freelancersList: freelanceProfile[];
}

function isFreelanceData(data: any): data is freelanceData {
	return data?.freelancersList !== undefined;
}

const style = {
	main: `flex flex-col items-center`,
	title: `my-4 text-xl font-bold`,
	p: (isDark: boolean) =>
		`my-4 ${isDark ? "text-white" : `text-${colors.secondary}`}`,
	cardWrapper: `my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,
};

export function Freelances() {
	const { data, isLoading, error } = useGet("http://localhost:8000/freelances");
	const freelancersList = isFreelanceData(data) ? data.freelancersList : [];
	const { theme } = useContext(ThemeContext);

	return (
		<main className={style.main}>
			<h1 className={style.title}>Trouvez votre prestataire</h1>
			<p className={style.p(theme === "dark")}>
				Chez Shiny nous réunissons les meilleurs profils pour vous
			</p>
			<div className={style.cardWrapper}>
				{isLoading ? (
					<i className="fas fa-spinner fa-spin text-3xl" data-testid="loader"></i>
				) : error ? (
					<p>Une erreur est survenue</p>
				) : (
					freelancersList.map((profile: freelanceProfile, index: number) => (
						<Card
							key={`${profile.name}-${index}`}
							freelanceId={profile.id}
							label={profile.job}
							picture={profile.picture}
							title={profile.name}
						/>
					))
				)}
			</div>
		</main>
	);
}
