import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

//context manually use
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("titanic");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      //   console.log(data);
      //response will true;
      if (data.Response === "True") {
        setMovie(data.Search);
        setIsLoading(false);//console.log("data Response:", data,"Error",setIsError);
        setIsError({
          show: false,
          msg: "",
        });

      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);
  // console.log(`${API_URL}&s=${query}`);
  // console.log(API_URL+"&s="+query);
  // console.log(getMovies(API_URL+"&s="+query));

  return (
    <AppContext.Provider value={{ movie, isLoading, isError, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

//global context same thing will do

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
