import { useEffect, useState } from "react";
import axios from "axios";

export function useGet<T>(url: string) {
	const [data, setData] = useState<T>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	
	useEffect(() => {
		if (!url) return;

		setIsLoading(true);

		async function getData() {
			try {
				const fetchedData: T = (await axios.get(url)).data;
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
