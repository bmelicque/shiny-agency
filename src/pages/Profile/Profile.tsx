import { useParams } from "react-router";
import { useGet } from "../../utils/hooks";
import colors from "../../utils/style/colors";
import { freelanceProfile } from "../Freelances/Freelances";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context/ThemeContext";

export interface profileData {
	freelanceData: freelanceProfile;
}

function isProfileData(data: any): data is profileData {
	return data?.freelanceData !== undefined;
}

const style = {
	main: (isDark: boolean) =>
		`${
			isDark
				? `bg-${colors.backgroundLessDark}`
				: `bg-${colors.backgroundLight}`
		} h-96 flex gap-16 justify-center items-center`,
	img: `h-64 w-64 rounded-full`,
	name: `text-2xl`,
	location: `text-xl text-${colors.secondary}`,
	job: `text-xl`,
	skillList: `flex gap-2`,
	skill: (isDark: boolean) =>
		`border ${isDark ? "border-white" : "border-black"} rounded-md py-1 px-2`,
};

export function Profile() {
	const { id } = useParams<{ id: string }>();
	const { theme } = useContext(ThemeContext);
	const isDark = theme === "dark";

	const { data, isLoading, error } = useGet(
		`http://localhost:8000/freelance?id=${id}`
	);

	if (error) return <p>Il semblerait qu'il y ait un problème...</p>;

	const profileData = isProfileData(data) ? data.freelanceData : {};
	const { name, job, picture, skills, location, available, tjm } =
		profileData as freelanceProfile;

	return isLoading ? (
		<div className="">Chargement...</div>
	) : (
		<main className={style.main(isDark)}>
			<img src={picture} alt="" className={style.img} />
			<div className="flex flex-col gap-4">
				<div className="flex justify-between gap-6 items-center">
					<h1 className={style.name}>{name}</h1>
					<p className={style.location}>{location}</p>
				</div>
				<p className={style.job}>{job}</p>
				<ul className={style.skillList}>
					{skills.map((skill) => (
						<li className={style.skill(isDark)}>{skill}</li>
					))}
				</ul>
				<p>{available ? "🟢 Disponible" : "🔴 Indisponible"}</p>
				<p>{`${tjm} € / jour`}</p>
			</div>
		</main>
	);
}
