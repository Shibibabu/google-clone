import React, { useEffect, useState } from "react";
import API_KEY from "./keys";

//custom hook
const CONTEXT_KEY = "713578749e8328dc6";
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then(res => res.json())
        .then(result => {
          setData(result);
        })
    }
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
