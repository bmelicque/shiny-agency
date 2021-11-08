import { useParams } from "react-router";
import { useGet } from "../../utils/hooks";
import { freelanceProfile } from "../Freelances/Freelances";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context/ThemeContext";
import ProfileVue from "./Profile.vue";

export interface profileData {
	freelanceData: freelanceProfile;
}

export function Profile() {
	const { id } = useParams<{ id: string }>();
	const { theme } = useContext(ThemeContext);
	const isDark = theme === "dark";

	const { data, isLoading, error } = useGet<profileData>(
		`http://localhost:8000/freelance?id=${id}`
	);

	if (error) return <p>Il semblerait qu'il y ait un problème...</p>;
	if (isLoading) return <i className="fas fa-spinner fa-spin text-3xl"></i>;

	const profileData = data!.freelanceData;

	return <ProfileVue isDark={isDark} profile={profileData} />;
}
