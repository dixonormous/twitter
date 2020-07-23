import React, { useState, useEffect } from 'react';
import { SearchInput, SearchResults, KeywordInput } from './components'
import { search } from '../../hooks';
import './styles.css';

export default function SearchPage(){

  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    document.title = 'Explore / Twitter';
  }, []);

  useEffect(() => {
    setFilteredResults(results.filter(({ text }) => text.toLowerCase().includes(keyword.toLowerCase())));
  }, [keyword, results]);

  const handleSearch = (topic) => {
    setLoading(true);
    setHasResults(false);
    search(topic, (results) => {
      results.sort((a,b) => a.created_at - b.created_at);
      setResults(results);
      setFilteredResults(results);
      setLoading(false);
      setHasResults(true);
    })
  };

  return (
    <div className="search-container">
      <div className="search-input">
        <SearchInput
          handleSearch={handleSearch}
          />
      </div>
      {hasResults && <KeywordInput handleKeywordFilter={(e) => setKeyword(e.target.value)}/>}
      <div className="search-results">
        <SearchResults
          loading={loading}
          results={filteredResults}
          hasResults={hasResults}
          />
      </div>
    </div>
  )
}
