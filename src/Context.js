import React, { useState } from "react";

const Context = React.createContext();

const postsPerPage = 9;

function ContextProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchContract, setSearchContract] = useState(false);
  const [loadMore, setLoadMore] = useState(postsPerPage);

  function handleUserInput(e) {
    setSearchQuery(e.target.value);
  }

  function handleUserLocation(e) {
    setSearchLocation(e.target.value);
  }

  function handleUserContract(e) {
    setSearchContract((prev) => !prev);
  }

  function handleLoadMore() {
    setLoadMore((prev) => prev + postsPerPage);
  }

  return (
    <Context.Provider
      value={{
        searchQuery,
        setSearchQuery,
        handleUserInput,
        searchLocation,
        setSearchLocation,
        handleUserLocation,
        searchContract,
        handleUserContract,
        loadMore,
        handleLoadMore,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
