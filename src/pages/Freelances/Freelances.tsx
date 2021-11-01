import Card from "../../components/Card";
import colors from "../../utils/style/colors";
import { useGet } from "../../utils/hooks/useGet";

interface freelanceProfile {
	id: string;
	job: string;
	name: string;
	picture: string;
}

interface freelanceData {
    freelancersList: freelanceProfile[]
}

function isFreelanceData(data: any): data is freelanceData {
    return data?.freelancersList !== undefined;
}

export function Freelances() {
	const { data, isLoading, error } = useGet("http://localhost:8000/freelances");
    const freelancersList = isFreelanceData(data) ? data.freelancersList : [];

	return (
		<div className={`flex flex-col items-center`}>
			<h1 className={`my-4 text-xl font-bold`}>Trouvez votre prestataire</h1>
			<p className={`my-4 text-${colors.secondary}`}>
				Chez Shiny nous réunissons les meilleurs profils pour vous
			</p>
			<div className="my-6 grid grid-cols-2 gap-6">
				{isLoading ? (
					<p>Chargement...</p>
				) : error ? (
					<p>Une erreur est survenue</p>
				) : (
					freelancersList.map((profile: freelanceProfile, index: number) => (
						<Card
							key={`${profile.name}-${index}`}
							label={profile.job}
							picture={profile.picture}
							title={profile.name}
						/>
					))
				)}
			</div>
		</div>
	);
}
