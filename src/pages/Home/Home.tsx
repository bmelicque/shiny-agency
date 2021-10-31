import { Link } from "react-router-dom";
import { ReactComponent as HomeIllustration } from "../../assets/home-illustration.svg";
import colors from "../../utils/style/colors";

export function Home() {
	return (
		<main
			className={`my-16 bg-${colors.backgroundLight} p-16 flex flex-row items-center`}
		>
			<div className={`w-1/2 flex flex-col items-center gap-4`}>
				<h1 className={`text-5xl font-bold leading-loose`}>
					Repérez vos besoins,
					<br />
					on s'occupe du reste,
					<br />
					avec les meilleurs talents
				</h1>
				<Link
					to="/survey/1"
					className={`rounded-full px-4 py-1 flex items-center text-${colors.secondary} text-xl hover:bg-${colors.primary} hover:text-white`}
				>
					Faire le test
				</Link>
			</div>
			<HomeIllustration className={`w-1/2`} />
		</main>
	);
}
