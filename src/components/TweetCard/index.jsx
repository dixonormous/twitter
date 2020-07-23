import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import moment from 'moment';
import './styles.css';

const userAvatar = 'http://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_normal.png'

const CardTitle = ({ avatar, timestamp, username, userHandle, isSearchResult }) => (
  <div className="card-title">
    <Avatar src={isSearchResult ? avatar : userAvatar} style={{ width: 30, height: 30 }} />
    <div className="tweet-user-details">
      <h4>{isSearchResult ? username : "React"}</h4>
      <h5>{isSearchResult ? `@${userHandle}` : "@reactjs"}</h5>
      <span> {moment(timestamp).format('MMM Do, YYYY hh:mm a')}</span>
    </div>
  </div>
);

const CardBottom = ({ retweetCount, handleDeleteTweet }) => (
  <div className="tweet-bottom-details">
    <div className="retweet-count">
      <i className="fas fa-retweet" /> <span>{retweetCount}</span>
    </div>
    <div>
      <Button
        className="tweet-delete-button "
        onClick={handleDeleteTweet}
        variant="outlined"
        >
        Delete
      </Button>
    </div>
  </div>
)

export default ({ text, timestamp, username, userHandle, avatar, retweetCount, handleDeleteTweet, isSearchResult }) => (
  <div className="tweet-base">
    <div className="tweet-card">
      <CardTitle
        timestamp={timestamp}
        username={username}
        userHandle={userHandle}
        avatar={avatar}
        isSearchResult={isSearchResult} />
      <div className="tweet-text">
        <p>{text}</p>
      </div>
      {
        !isSearchResult &&
        <CardBottom retweetCount={retweetCount} handleDeleteTweet={handleDeleteTweet} />
      }
    </div>
  </div>
)
