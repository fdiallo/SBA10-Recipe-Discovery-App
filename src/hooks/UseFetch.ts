import { useEffect, useState } from "react";


export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        console.log("API Response: ", response)
        console.log("API OKAY: ", response.ok)
        console.log("API BODY: ", response.body)
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        console.log("API Result: ", result)
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
