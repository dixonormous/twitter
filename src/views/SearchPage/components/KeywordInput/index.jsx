import React from 'react';

export default ({ handleKeywordFilter }) => (
  <div className="keyword-container">
    <h4>Keyword:</h4>
    <input
      placeholder="Enter keyword.."
      onChange={handleKeywordFilter}/>
  </div>
);
