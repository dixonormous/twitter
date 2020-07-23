import React, { useState } from 'react';
import { Button } from '@material-ui/core';

export default function SearchInput({ handleSearch }){

  const [topic, setTopic] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(topic);
    setTopic('');
  }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <input
          value={topic}
          placeholder="Coffee"
          onChange={(e) => setTopic(e.target.value)}/>
        <div className="form-button-container">
          <Button
            type='submit'
            variant="outlined"
            disabled={topic.length < 1}
            onClick={() => handleSearch(topic)}>
            Search
          </Button>
        </div>
      </form>
    </div>
  )
}
