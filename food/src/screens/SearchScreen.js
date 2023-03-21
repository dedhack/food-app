import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;
