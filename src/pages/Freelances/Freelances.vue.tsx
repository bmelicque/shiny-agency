import React from "react";
import Card from "../../components/Card";
import { freelanceProfile } from "./Freelances";

interface Props {
	isDark: boolean;
	isLoading: boolean;
	data: freelanceProfile[];
}

const style = {
	main: `flex flex-col items-center`,
	title: `my-4 text-xl font-bold`,
	p: (isDark: boolean) => `my-4 ${isDark ? "text-white" : "text-grey"}`,
	cardWrapper: `my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,
};

const FreelancesVue = (props: Props) => {
	const { isDark, isLoading, data } = props;

	return (
		<main className={style.main}>
			<h1 className={style.title}>Trouvez votre prestataire</h1>
			<p className={style.p(isDark)}>
				Chez Shiny nous réunissons les meilleurs profils pour vous
			</p>
			<div className={style.cardWrapper}>
				{isLoading ? (
					<i
						className="fas fa-spinner fa-spin text-3xl"
						data-testid="loader"
					></i>
				) : (
					data.map((profile, index: number) => (
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
};

export default FreelancesVue;
