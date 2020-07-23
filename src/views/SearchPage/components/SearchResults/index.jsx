import React from 'react';
import { Loader, TweetCard } from '../../../../components';

const SearchResults = ({ results, loading, hasResults }) => {

  if (loading) {
    return <Loader />
  }

  return (
    <div className="search-results">
      {!hasResults && <h2>Search any topic you'd like!</h2>}
      {results.map(({ user, created_at, id, text }) => (
        <TweetCard
          key={id}
          isSearchResult={true}
          userHandle={user.screen_name}
          username={user.name}
          text={text}
          avatar={user.profile_image_url}
          timestamp={created_at}
          />
      ))}
    </div>
  )
};

export default SearchResults;
