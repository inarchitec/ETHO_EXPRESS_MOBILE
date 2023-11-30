import { useEffect, useState } from "react";
 
import { makeReq } from "../makeReq/makeReq";


// This defines a custom React hook called useFetch. The hook takes a single argument,
// url, which is the endpoint of the API to fetch. It uses the useState hook to define
// three state variables: data, loading, and error. The data state variable is used to store the response data from the API.
// It is initialized as null because we don't have any data yet. The loading state variable is
// used to indicate whether or not the API request is currently being made. It is initialized as false because
// we are not making any requests yet. The error state
// variable is used to indicate whether or not the API request failed. It is initialized
// as false because we haven't made any requests yet.
 
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // This uses the useEffect hook to make the API request.
  // It calls an async function called fetchData that sets
  // the loading state to true to indicate that the request is being made.
  // It then uses the makeRequest module's get method to make the API request with the provided url.
  // If the request is successful, the setData function is called to update the data state with the response data.
  // If the request fails, the setError function is called to set the error state to true.
  // Finally, the loading state is set back to false to indicate that the request has finished. The useEffect hook
  // takes a dependency array containing the url argument, which ensures that the hook will only re-run if the url changes.

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeReq.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  // This returns an object containing the three state variables: data, loading, and error.
  // This object can be used in the component that calls the useFetch hook to display the data, show a loading spinner, or handle errors.

  return { data, loading, error };
};

export default useFetch;

 