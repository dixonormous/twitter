import React from 'react';
import { Avatar } from '@material-ui/core';
import './styles.css';

export default ({ user }) => (
  <div className="details-main">
    <div className="user-details">
      <Avatar src={user.profile_image_url} style={{ width: 50, height: 50 }} />
      <div className="user-names">
        <h3>{user.name || '...'}</h3>
        <h6>@{user.screen_name || '...'}</h6>
      </div>
      <div className="follower-count">
        <span>{user.followers_count ? user.followers_count.toLocaleString() : '...'} followers</span>
      </div>
    </div>
  </div>
)
