import React from 'react';
import './styles.css';

const Paginator = ({ tweetsPerPage, totalTweets, handleChangePage }) => {
  const pageNumbers = [];

  for (var i = 1; i <= Math.ceil(totalTweets / tweetsPerPage); i++) {
    pageNumbers.push(i);
  };

  return (
    <div className="pagination">
      {pageNumbers.map(num => (
        <div className="page-button" onClick={() => handleChangePage(num)} key={num}>
          {num}
        </div>
      ))}
    </div>
  )
};

export default Paginator;
