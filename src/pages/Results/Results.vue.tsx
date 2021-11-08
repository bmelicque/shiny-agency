import React from "react";
import { Link } from "react-router-dom";

interface Props {
	data: {
		title: string;
		description: string;
	}[];
}

const style = {
	wrapper: `m-auto max-w-2xl flex flex-col py-16 items-center gap-16`,
	title: `text-center text-3xl font-bold`,
	jobTitle: `text-primary`,
	jobDescription: `text-grey mb-2`,
	link: `m-auto rounded-full px-4 py-1 text-center text-xl hover:bg-primary hover:text-white`,
};

const ResultsVue = (props: Props) => {
	const { data } = props;
	return (
		<div className={style.wrapper}>
			<div className={style.title}>
				Les compétences dont vous avez besoin&nbsp;:&nbsp;
				{data.map(({ title }, index) => (
					<>
						{index > 0 ? ", " : ""}
						<span
							key={`title-${title}`}
							className={style.jobTitle}
							data-testid="job-title"
						>
							{title}
						</span>
					</>
				))}
			</div>
			<Link to="./freelances" className={style.link}>
				Découvrez nos profils
			</Link>
			<div>
				{data.map(({ title, description }) => (
					<>
						<h2 key={`title-description-${title}`} className={style.jobTitle}>
							{title.toUpperCase()}
						</h2>
						<p
							key={`description-${title}`}
							className={style.jobDescription}
							data-testid="job-description"
						>
							{description}
						</p>
					</>
				))}
			</div>
		</div>
	);
};

export default ResultsVue;
