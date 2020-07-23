import React from 'react';
import { Loader, TweetCard } from '../../../../components';

const Tweets = ({ tweets, loading, handleDeleteTweet }) => {
  if (loading) {
    return <Loader />
  }

  return (
    <div className="tweets">
      {tweets.map(({ text, id, created_at, retweet_count }) => (
        <TweetCard
          key={id}
          text={text}
          retweetCount={retweet_count}
          handleDeleteTweet={() => handleDeleteTweet({ retweet_count, id })}
          timestamp={created_at} />
      ))}
    </div>
  )
};

export default Tweets;
