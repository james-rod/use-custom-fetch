import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();

  useEffect(() => {
    (async function () {
      try {
        setData(undefined);
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const dataAPI = await response.json();

        setData(dataAPI);
        setIsLoading(true);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { data, isLoading, isError };
}
