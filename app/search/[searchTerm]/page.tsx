import React from 'react';

interface pageprops {
  params: {
    searchTerm: string;
  };
}

interface SearchResult {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
}
const search = async (searchterm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchterm}&api_ke=${process.env.API_KEY}`
  );
  const data: SearchResult = await res.json();
  return data;
};
const searchResults = async (props: pageprops) => {
  const searchresults = await search(props.params.searchTerm);
  return (
    <div>
      <h1>Search results</h1>
    </div>
  );
};

export default searchResults;
