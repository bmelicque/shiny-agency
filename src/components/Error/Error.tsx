import { ReactComponent as ErrorIllustration } from "../../assets/404.svg";

const pStyle = `text-xl font-semi-bold`;

export function Error() {
	return (
		<main className="flex flex-col items-center">
            <p className={pStyle}>Oups...</p>
			<ErrorIllustration className="w-3/5" />
            <p className={pStyle}>Il semblerait qu'il y ait un problème</p>
		</main>
	);
}
