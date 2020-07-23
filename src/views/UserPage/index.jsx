import React, { useState, useEffect } from 'react';
import { UserDetails, Tweets, Paginator } from './components';
import { getUserData } from '../../hooks';
import './styles.css';

export default function UserPage(){

  const [tweets, setTweets] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tweetsPerPage] = useState(5);

  useEffect(() => {
    document.title = 'Home / Twitter';
    getTweetData();
  }, []);

  const getTweetData = () => {
    setLoading(true);
    getUserData((data) => {
      const { tweets } = data;
      setTweets(tweets);
      setUserData(data);
      setLoading(false);
    });
  };

  const handleDeleteTweet = ({ retweet_count, id }) => {
    const confirm = window.confirm(`Are you sure you want to delete this tweet? It has ${retweet_count} retweets though!`);

    if(confirm){
      let newTweets = tweets.filter((item) => item.id !== id);
      setTweets(newTweets);
    }
  };

  const handleChangePage = (pageNumber) => setCurrentPage(pageNumber);

  const lastTweetIndex = currentPage * tweetsPerPage;
  const firstTweetIndex = lastTweetIndex - tweetsPerPage;
  const currentTweets = tweets.slice(firstTweetIndex, lastTweetIndex);

  return (
    <div>
      <UserDetails user={userData} />
      <div className="tweet-container">
        <Tweets
          tweets={currentTweets}
          loading={loading}
          handleDeleteTweet={handleDeleteTweet}
          />
      </div>
      <div>
        <Paginator
          tweetsPerPage={tweetsPerPage}
          totalTweets={tweets.length}
          handleChangePage={handleChangePage}
          />
      </div>
    </div>
  )
}
