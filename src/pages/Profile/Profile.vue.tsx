import React from "react";
import { freelanceProfile } from "../Freelances/Freelances";

interface Props {
	isDark: boolean;
	profile: freelanceProfile;
}

// Contains the strings to be used as classNames
const style = {
	main: (isDark: boolean) =>
		`${
			isDark ? `bg-dark` : `bg-lightblue`
		} h-96 flex gap-16 justify-center items-center`,
	img: `h-64 w-64 rounded-full`,
    contentWrapper: "flex flex-col gap-4",
    headline: "flex justify-between gap-6 items-center",
	name: `text-2xl`,
	location: `text-xl text-grey`,
	job: `text-xl`,
	skillList: `flex gap-2`,
	skill: (isDark: boolean) =>
		`border ${isDark ? "border-white" : "border-black"} rounded-md py-1 px-2`,
};

const ProfileVue = (props: Props) => {
	const { isDark, profile } = props;
	const { name, job, picture, skills, location, available, tjm } = profile;
    const availableString = available ? "🟢 Disponible" : "🔴 Indisponible";

	return (
		<main className={style.main(isDark)}>
			<img src={picture} alt="" className={style.img} />
			<div className={style.contentWrapper}>
				<div className={style.headline}>
					<h1 className={style.name}>{name}</h1>
					<p className={style.location}>{location}</p>
				</div>
				<p className={style.job}>{job}</p>
				<ul className={style.skillList}>
					{skills.map((skill) => (
						<li className={style.skill(isDark)}>{skill}</li>
					))}
				</ul>
				<p>{availableString}</p>
				<p>{`${tjm} € / jour`}</p>
			</div>
		</main>
	);
};

export default ProfileVue;
