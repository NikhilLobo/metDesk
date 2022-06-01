import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortcont = new AbortController();
    fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization:
          "jwt eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiZmVjaGFsbDM4Mzk4YWJhNzJiY2MyMjM4MzcyMSIsImV4cCI6MTY3MjUzMTIwMH0.gQ8Ro0neGskV0vi1qkCPNnmS7PovKNH2VamMAQZUqMY",
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      signal: abortcont.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
    return () => abortcont.abort();
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};
export default useFetch;
