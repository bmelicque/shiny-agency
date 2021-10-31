import { useEffect, useState } from "react";
import axios from "axios";

interface data {
	surveyData?: object;
}

export function useGet(url: string) {
	const [data, setData] = useState<data>({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!url) return;

        setIsLoading(true);

		async function getData() {
			try {
				const fetchedData: data = (
					await axios.get("http://localhost:8000/survey")
				).data;
				setData(fetchedData);
			} catch (error) {
				console.log(error);
				setError(true);
			} finally {
				setIsLoading(false);
			}
		}

		getData();
	}, [url]);

	return { data, isLoading, error };
}
